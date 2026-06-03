/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  hriSidebar: [
    {
      type: 'category',
      label: 'S.O.C.I.A.L. Principles',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'S.O.C.I.A.L. Core Principles',
        description: 'The six core architectural principles for hybrid Human-Robot Interaction.',
        slug: '/social-principles',
      },
      items: [
        'social-principles/s-separated-contexts',
        'social-principles/o-open-declarative',
        'social-principles/c-clear-cognition',
        'social-principles/i-interpretable-gates',
        'social-principles/a-adaptive-autonomy',
        'social-principles/l-layered-validation',
      ],
    },
    {
      type: 'category',
      label: 'HML — HRI Modeling Language',
      collapsed: true,
      items: [
        'hml/hml-overview',
        'hml/hml-diagram-conventions',
        'hml/hml-visual-dictionary',
        'hml/hif',
        'hml/semantic-operators',
        'hml/semantic-cells',
        'hml/state-memory-and-queues',
        'hml/hri-db',
        // 'hml/diagram-conventions',
      ],
    },    
    {
      type: 'category',
      label: 'HRI Design Patterns',
      collapsed: true,
      items: [
        'design-patterns/design-patterns-overview',
        'design-patterns/how-to-read-a-pattern-page',
        'design-patterns/cognitive-layer-map',
        
        {
          type: 'category',
          label: 'Human Context',
          items: [
            'design-patterns/human-context/human-context-overview',
            'design-patterns/human-context/synchronous-multi-extractor',
            'design-patterns/human-context/elastic-attention-governor',
            'design-patterns/human-context/basic-input-sublayer-example',
            'design-patterns/human-context/tiered-semantic-cache-proxy',
            'design-patterns/human-context/adaptive-signature-learner',
            'design-patterns/human-context/human-context-interpreter-sublayer-example',
            'design-patterns/human-context/human-context-layer-example',
          ],
        },

        'design-patterns/scene-context',
        'design-patterns/robot-context',

        {
          type: 'category',
          label: 'Context Management',
          items: [
            'design-patterns/context-management/context-management-overview',
            'design-patterns/context-management/context-novelty-extractor',
            'design-patterns/context-management/hri-db-handler-pattern',
            'design-patterns/context-management/hri-db-reasoning-handlers',
            'design-patterns/context-management/task-prerequisite-resolver',
            'design-patterns/context-management/social-convention-validator',
            'design-patterns/context-management/context-management-layer-example',
          ],
        },

        {
          type: 'category',
          label: 'Social Planning and Behavioral Synthesis',
          items: [
            'design-patterns/social-planning/social-planning-overview',
            'design-patterns/social-planning/social-opportunity-tpr',
            'design-patterns/social-planning/social-action-stylist',
            'design-patterns/social-planning/social-planning-layer-example',
          ], 
        },
        'design-patterns/actuation-layer',
      ],
    },

    {
      type: 'category',
      collapsed: true,
      label: 'Modern AI and SOCIAL HRI',
      items: [
        'modern-ai/modern-ai-integration-overview',
        'modern-ai/semantic-responsibility-decoupling',
        'modern-ai/foundation-models-as-hml-experts',
        'modern-ai/intermediate-artifacts-and-semantic-commitments',
        'modern-ai/end-to-end-rl-and-social-tradeoffs',
        'modern-ai/practical-integration-patterns',
      ],
    }

  ],
};


export default sidebars;