import Features from "../view/pages/Features";
import Homepage from "../view/pages/Homepage";
import Testimonials from "../view/pages/Testimonials";

export const menuItems = [
  {
    id: "features",
    path: "#features-section",
    element: <Features />,
  },
  {
    id: "testimonial",
    path: "#testimonial-section",
    element: <Testimonials />,
  },
  {
    id: "pricing",
    path: "#price-section",
    element: <Homepage />,
  },
];
