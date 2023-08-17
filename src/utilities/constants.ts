import type { IPricing, ITestimonial, routeLink } from './types'

import testimonialMan from '@/assets/images/testimonial-man.png'
import testimonialWoman from '@/assets/images/testimonial-woman.png'
export const routeLinks: routeLink[] = [
  {
    name: 'Demo',
    route: '#'
  },
  {
    name: 'About',
    route: '#'
  },
  {
    name: 'Blog',
    route: '#'
  },
  {
    name: 'Pages',
    route: '#'
  },
  {
    name: 'Contact',
    route: '#'
  }
]
export const features: string[] = [
  'Manage cost saving & payments method',
  'Analysis inventory and online sales report'
]
export const paymentMethods: string[] = [
  'Accept any method of payment',
  'Apply discounts and issue refunds'
]

export const pricingMethods: string[] = [
  'Run layout program to reward customers.',
  'Keep notes on valuable customer preferences'
]
export const testimonialsData: ITestimonial[] = [
  {
    content: '"This is a the best course for React! Highly Recommened"',
    image: testimonialMan,
    userName: 'Dianne Russel',
    post: 'Founder, Extends Sales'
  },
  {
    content: '"I love how easy it was to learn every section. Easy to understand"',
    image: testimonialWoman,
    userName: 'Dianne Russel',
    post: 'Founder, Extends Sales'
  }
]

export const pricingData: IPricing[] = [
  {
    type: 'Basic',
    price: '99',
    isRecommended: false,
    textButton: 'Get Started',
    description:
      'Best for small business owners. startups who needes landing page for their business.',
    including: ['160+ UI Blocks', 'Best for Developers. Freelancers', 'Made with Figma']
  },
  {
    type: 'Premium',
    price: '199',
    isRecommended: true,
    textButton: 'Get Started',
    description:
      'Best for medium business owners. startups who needes landing page for their business.',
    including: [
      '160+ UI Blocks',
      'Best for Developers. Freelancers',
      'Made with Figma',
      'Premium Support',
      'Future Updates'
    ]
  },

  {
    type: 'Enterprise',
    price: '399',
    isRecommended: false,
    textButton: 'Get Started',
    description:
      'Best for large business owners. startups who needes landing page for their business.',
    including: [
      '160+ UI Blocks',
      'Best for Developers. Freelancers',
      'Made with Figma',
      'Premium Support',
      'Future Updates',
      'Recommandation'
    ]
  }
]
