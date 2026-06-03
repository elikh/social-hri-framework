import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type EntryCard = {
  title: string;
  icon: string;
  description: string;
  to: string;
  linkLabel: string;
};

const entryCards: EntryCard[] = [
  {
    title: 'S.O.C.I.A.L. Principles',
    icon: 'S',
    description:
      'Six architectural principles for inspectable, governable, socially aware human-robot interaction.',
    to: '/docs/social-principles',
    linkLabel: 'Read the principles',
  },
  {
    title: 'HML Language',
    icon: 'HIF',
    description:
      'A lightweight modeling language built around HIFs, semantic cells, λ experts, gates, memory, and queues.',
    to: '/docs/hml/hml-overview',
    linkLabel: 'Learn HML',
  },
  {
    title: 'Design Patterns',
    icon: '◇',
    description:
      'Reusable patterns for context extraction, reasoning, social planning, actuation, and feedback.',
    to: '/docs/design-patterns/design-patterns-overview',
    linkLabel: 'Browse patterns',
  },
  {
    title: 'Modern AI Integration',
    icon: 'λ',
    description:
      'How to use LLMs, VLMs, agents, RL, and end-to-end models without losing transparency and control.',
    to: '/docs/modern-ai/modern-ai-integration-overview',
    linkLabel: 'Explore modern AI',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroEyebrow}>Human-Robot Interaction Architecture</div>
        <Heading as="h1" className={styles.heroTitle}>
          S.O.C.I.A.L. HML Framework
        </Heading>
        <p className={styles.heroSubtitle}>
          A pattern language for inspectable, socially governed HRI.
        </p>
        <p className={styles.heroText}>
          From context and memory to socially validated behavior —
with bounded LLMs, VLMs, agents, and learned policies.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/hml/hml-overview">
            Start with the Framework
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.secondaryButton)}
            to="/docs/design-patterns/design-patterns-overview">
            Browse Design Patterns
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhySection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.twoColumn}>
          <div>
            <Heading as="h2">Why this framework?</Heading>
            <p>
              Human-facing robots need more than perception, planning, and control. They
              need explicit context, memory governance, social validation, timing, style,
              embodiment binding, and feedback.
            </p>
            <p>
              S.O.C.I.A.L. HML provides a layered design language for making these
              responsibilities visible, testable, replaceable, and governable.
            </p>
          </div>
          <div className={styles.callout}>
            <strong>Core position</strong>
            <p>
              Modern AI does not make HML obsolete. It makes semantic interfaces,
              responsibility boundaries, and layered validation more important.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EntryCards() {
  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <Heading as="h2" className={styles.centeredHeading}>
          Explore the framework
        </Heading>
        <div className={styles.cardGrid}>
          {entryCards.map((card) => (
            <Link key={card.title} to={card.to} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <Heading as="h3">{card.title}</Heading>
              <p>{card.description}</p>
              <span className={styles.cardLink}>{card.linkLabel} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <Heading as="h2" className={styles.centeredHeading}>
          Architecture at a glance
        </Heading>
        <p className={styles.centeredText}>
          HML models the full path from interaction evidence to socially appropriate,
          platform-specific robot behavior.
        </p>

        <div className={styles.pipeline} aria-label="SOCIAL HML architecture pipeline">
          <div className={styles.pipelineNode}>
            <span>Human</span>
            <span>Scene</span>
            <span>Robot</span>
            <small>Context</small>
          </div>
          <div className={styles.pipelineArrow}>→</div>
          <div className={styles.pipelineNode}>
            <span>Context</span>
            <span>Management</span>
            <small>Reasoning</small>
          </div>
          <div className={styles.pipelineArrow}>→</div>
          <div className={styles.pipelineNode}>
            <span>Social</span>
            <span>Planning</span>
            <small>Timing + Style</small>
          </div>
          <div className={styles.pipelineArrow}>→</div>
          <div className={styles.pipelineNode}>
            <span>Natural</span>
            <span>Actuation</span>
            <small>Embodiment</small>
          </div>
          <div className={styles.pipelineFeedback}>feedback ↺</div>
        </div>
      </div>
    </section>
  );
}

function ModernAiSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.modernAiBox}>
          <div>
            <div className={styles.heroEyebrow}>Modern AI and SOCIAL HRI</div>
            <Heading as="h2">Foundation models as bounded experts</Heading>
            <p>
              LLMs, VLMs, agents, video models, RL policies, and end-to-end systems can
              all contribute to HRI. The key is to connect them through HIFs, gates,
              semantic commitments, and feedback rather than giving them unbounded
              authority.
            </p>
          </div>
          <Link
            className="button button--primary button--lg"
            to="/docs/modern-ai/modern-ai-integration-overview">
            Read the Modern AI section
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.aboutBox}>
          <div>
            <div className={styles.heroEyebrow}>About this work</div>
            <Heading as="h2">From HRI consortium lessons to a research framework</Heading>
            <p>
              S.O.C.I.A.L. HML was created by Dr. Eliahu Khalastchi as an independent
              synthesis of HRI architecture lessons, informed by applied R&amp;D experience
              and the rapid shift toward foundation-model-based robotics.
            </p>
            <p>
              The documentation is being developed alongside an academic paper on
              inspectable HRI architectures in the foundation-model era.
            </p>
          </div>
          <Link className="button button--primary button--lg" to="/docs/about">
            About the framework
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoPlaceholder() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.videoPlaceholder}>
          <div>
            <Heading as="h2">Short overview video</Heading>
            <p>
              A short video introduction will be added here after the public site is
              available and can be used as source material.
            </p>
          </div>
          <Link className="button button--primary button--lg" to="/docs/hml/hml-overview">
            Read the overview for now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="S.O.C.I.A.L. HML Framework"
      description="A pattern language for inspectable, socially governed, modern-AI-compatible Human-Robot Interaction architectures.">
      <HomepageHeader />
      <main>
        <WhySection />
        <EntryCards />
        <section className={styles.videoSection}>
          <div className="container">
            <h2 className={styles.videoTitle}>Watch the Overview</h2>
            <p className={styles.videoSubtitle}>
              A short introduction to the S.O.C.I.A.L. HML Framework and its role in inspectable,
              socially governed, modern-AI-compatible Human-Robot Interaction architectures.
            </p>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://player.vimeo.com/video/1197983185"
                title="S.O.C.I.A.L. HML Framework overview video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>        
        <ArchitectureSection />
        <ModernAiSection />
        <AboutSection />
        <VideoPlaceholder />
      </main>
    </Layout>
  );
}
