import Features from "../view/pages/Features";
import Homepage from "../view/pages/Homepage";
import Testimonials from "../view/pages/Testimonials";

export const menuItems = [
  {
    id: 'home',
    path: '/',
    element: <Homepage />
  },
  {
    id: 'features',
    path: '/features',
    element: <Features />
  },
  {
    id: 'testimonial',
    path: '/testimonial',
    element: <Testimonials />
  },
]