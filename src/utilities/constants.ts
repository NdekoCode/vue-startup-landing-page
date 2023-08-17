import type { ITestimonial, routeLink } from './types'

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
    content: '"This is a the best course for React! Highly Recommened"',
    image: testimonialWoman,
    userName: 'Dianne Russel',
    post: 'Founder, Extends Sales'
  }
]
