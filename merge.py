"""
merge_markdown_docs.py

Recursively merges Markdown documentation files into one large Markdown file.

Usage:
    python merge_markdown_docs.py <docs_folder>
    python merge_markdown_docs.py <docs_folder> -o <output_file>

Example:
    python C:\\dev\\tools\\merge_markdown_docs.py C:\\dev\\HRI_DP\\social-hri-framework\\docs\\docs
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from typing import Iterable


EXCLUDED_DIR_NAMES = {
    "node_modules",
    ".git",
    ".docusaurus",
    "build",
    "dist",
    "__pycache__",
}


MARKDOWN_SUFFIXES = {".md", ".mdx"}


def strip_frontmatter(text: str) -> str:
    """
    Remove YAML frontmatter from the beginning of a Markdown/MDX file.

    Frontmatter format:
        ---
        title: ...
        ---
    """
    if not text.startswith("---"):
        return text

    match = re.match(r"^---\s*\n.*?\n---\s*\n?", text, flags=re.DOTALL)
    if match:
        return text[match.end():].lstrip()

    return text


def extract_title(text: str, fallback: str) -> str:
    """
    Extract the first Markdown H1 title from the document.
    If no H1 is found, use fallback generated from the file path.
    """
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("# "):
            return stripped[2:].strip()

    return fallback


def title_from_path(file_path: Path, root: Path) -> str:
    """
    Create a readable fallback title from the relative path.
    """
    relative = file_path.relative_to(root)
    without_suffix = relative.with_suffix("")
    parts = list(without_suffix.parts)

    cleaned_parts = []
    for part in parts:
        part = re.sub(r"^\d+[-_]", "", part)
        part = part.replace("-", " ").replace("_", " ")
        cleaned_parts.append(part.title())

    return " / ".join(cleaned_parts)


def should_skip(path: Path) -> bool:
    """
    Skip files inside excluded directories.
    """
    return any(part in EXCLUDED_DIR_NAMES for part in path.parts)


def iter_markdown_files(root: Path) -> Iterable[Path]:
    """
    Recursively collect Markdown/MDX files.
    Sorted by path for deterministic output.
    """
    files = [
        path
        for path in root.rglob("*")
        if path.is_file()
        and path.suffix.lower() in MARKDOWN_SUFFIXES
        and not should_skip(path)
    ]

    return sorted(files, key=lambda p: str(p.relative_to(root)).lower())


def normalize_content(text: str) -> str:
    """
    Normalize line endings and trim excessive outer whitespace.
    """
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    return text.strip()


def merge_docs(root: Path, output_file: Path) -> None:
    root = root.resolve()
    output_file = output_file.resolve()

    if not root.exists():
        raise FileNotFoundError(f"Input folder does not exist: {root}")

    if not root.is_dir():
        raise NotADirectoryError(f"Input path is not a folder: {root}")

    files = list(iter_markdown_files(root))

    if not files:
        raise RuntimeError(f"No Markdown files found under: {root}")

    sections: list[str] = []

    for file_path in files:
        raw = file_path.read_text(encoding="utf-8")
        body = normalize_content(strip_frontmatter(raw))

        if not body:
            continue

        fallback_title = title_from_path(file_path, root)
        title = extract_title(body, fallback_title)
        relative = file_path.relative_to(root).as_posix()

        section = f"""---

# {title}

Source file: `{relative}`

{body}
"""
        sections.append(section)

    output = "\n\n".join(sections).strip() + "\n"

    output_file.parent.mkdir(parents=True, exist_ok=True)
    output_file.write_text(output, encoding="utf-8")

    print(f"Input folder:  {root}")
    print(f"Output file:   {output_file}")
    print(f"Files found:   {len(files)}")
    print(f"Sections used: {len(sections)}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Recursively merge Markdown/MDX documentation files into one Markdown file."
    )

    parser.add_argument(
        "folder",
        type=Path,
        help="Root documentation folder to scan recursively.",
    )

    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=None,
        help="Output Markdown file. Defaults to <parent>/<folder_name>_merged.md",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()

    root: Path = args.folder

    if args.output is None:
        output_file = root.parent / f"{root.name}_merged.md"
    else:
        output_file = args.output

    merge_docs(root, output_file)


if __name__ == "__main__":
    main()