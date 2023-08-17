export type routeLink = {
  name: string
  route: string
}
export interface ITestimonial {
  image: string
  content: string
  userName: string
  post: string
}
export interface IPricing {
  type: string
  price: string | number
  isRecommended: boolean
  textButton: string
  description: string
  including: string[]
}
