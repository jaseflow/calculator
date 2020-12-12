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
      single: 27987,
      couple: 40440
    }
  },
  {
    id: 'comfy',
    name: 'Comfortable',
    description: '$43,687 pa',
    value: {
      single: 43901,
      couple: 62083
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
