const plans = [
  {
    id: 'simple',
    name: 'Simple',
    description: 'Age pension',
    value: {
      single: 23597,
      couple: 47194
    }
  },
  {
    id: 'modest',
    name: 'Modest',
    description: '$27,902 pa',
    value: {
      single: 27902,
      couple: 55804
    }
  },
  {
    id: 'comfy',
    name: 'Comfortable',
    description: '$43,687 pa',
    value: {
      single: 43687,
      couple: 87374
    }
  },
  {
    id: 'premium',
    name: 'Premium',
    description: '$100,000 pa',
    value: {
      single: 100000,
      couple: 200000
    }
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'Enter your own',
    value: null
  }
]

export default plans
