interface ServiceItem {
  id: number;
  img: string;
  title1: string;
  title2: string;
  description: string;
}

interface PixelItem {
  id: number;
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

interface ReadMoreItem {
  id: number;
  img: string;
  title: string;
}

interface FooterItems {
  id: number;
  title: string;
  list: string[];
}

interface CountItems {
  id: number;
  icon: string;
  title: string;
  count: number;
}

export const serviceData: ServiceItem[] = [
  {
    id: 1,
    img: "/assets/service-1-removebg.png",
    title1: "Membership",
    title2: "Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    img: "/assets/service-2-removebg.png",
    title1: "National",
    title2: "Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    img: "/assets/service-3-removebg.png",
    title1: "Clubs And",
    title2: "Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

export const pixelGradeData: PixelItem[] = [
  {
    id: 1,
    img: "/assets/Image-2.png",
    title: "The unseen of spending three years at Pixelgrade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Donec eget justo ac libero pretium vestibulum. Integer cursus enim at purus sodales.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    img: "/assets/Image-3.png",
    title: "How to design your site footer like we did",
    description:
      "Donec eget justo ac libero pretium vestibulum. Integer cursus enim at purus sodales, non ullamcorper lacus auctor. Praesent aliquet, justo eu cursus pharetra, felis orci laoreet erat, vitae dignissim elit felis eget dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Donec eget justo ac libero pretium vestibulum.",
    buttonText: "Learn More",
  },
];

export const readMoreData: ReadMoreItem[] = [
  {
    id: 1,
    img: "/assets/faq-1.jpg",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    id: 2,
    img: "/assets/faq-2.jpg",
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    id: 3,
    img: "/assets/faq-3.jpg",
    title: "Revamping and Membership Model with Triathlon Australia",
  },
];

export const footerData: FooterItems[] = [
  {
    id: 1,
    title: "Company",
    list: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    id: 2,
    title: "Support",
    list: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy policy",
      "Status",
    ],
  },
];

export const countData: CountItems[] = [
  { id: 1, title: "Members", count: 2245341, icon: "/assets/group.png" },
  { id: 2, title: "Clubs", count: 46328, icon: "/assets/hands.png" },
  { id: 3, title: "Event Bookings", count: 828867, icon: "/assets/click.png" },
  { id: 4, title: "Payments", count: 1926436, icon: "/assets/wallet.png" },
];
