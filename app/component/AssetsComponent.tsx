import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export  const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  748: 2,
  480: 1
};

export const masonry_items = [
  { image: "/images/1.jfif", height: 200 },
  { image: "/images/2.jpg",  height: 300 },
  { image: "/images/3.jpg",  height: 300 },
  { image: "/images/4.jpg", height: 200 },
  { image: "/images/5.jfif",  height: 300 },
  { image: "/images/6.jpg",  height: 300 },
  { image: "/images/7.jpg", height: 500 },
  { image: "/images/8.jpg",  height: 300 },
  { image: "/images/9.jpg",  height: 400 },
  { image: "/images/10.jpg", height: 200 },
  { image: "/images/11.jpg",  height: 300 },
  { image: "/images/12.jpg",  height: 300 },
];

export const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export const images = [
  "/images/5.jfif",
  "/images/1.jfif",
  "/images/5.jfif",
  "/images/1.jfif",
  "/images/5.jfif"
];

export const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];