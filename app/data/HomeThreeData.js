export const headerMenuData = [
  {
    title: "home",
    children: [
      { label: "Main Home", link: "/" },
      { label: "Corporate Business", link: "/home-two" },
      { label: "Insurance", link: "/home-three" },
    ],
  },
  { title: "About Us", link: "/about-us" },
  {
    title: "Service",
    children: [
      { label: "Our Services", link: "/service" },
      { label: "Services Details", link: "/service-details" },
    ],
  },
  {
    title: "Pages",
    children: [
      { label: "About Us", link: "/about-us" },
      { label: "Our Services", link: "/service" },
      { label: "Our Team", link: "/team" },
      { label: "Team Details", link: "/team-details" },
      { label: "Pricing", link: "/pricing" },
      { label: "FAQ", link: "/faq" },
    ],
  },
  {
    title: "Portfolio",
    children: [
      { label: "Our Projects", link: "/project" },
      { label: "Project Details", link: "/project-details" },
    ],
  },
  {
    title: "Blog",
    children: [
      { label: "Blog", link: "/blog" },
      { label: "Blog List", link: "/blog-list" },
      { label: "Blog Details", link: "/blog-details" },
    ],
  },
  { title: "Contact", link: "/contact" },
];
export const footerMenu = [
  { label: "Home", link: "/" },
  { label: "Pages", link: "#" },
  { label: "Portfolio", link: "#" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

export const recentPostsData = {
  section: {
    subtitle: "recent posts",
    title1: "Recent blog news",
    title2: "& articles",
    desc:
      "Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet, amet consecteture.",
    button: {
      text: "view all blogs",
      link: "/blog",
    },
  },

  posts: [
    {
      id: 1,
      image: "images/blog/10.jpg",
      date: "June 16, 2024",
      category: "Business",
      titleLine1: "Travel insurance tips for",
      titleLine2: "safety abroad",
      link: "/blog-details",
      delay: 300,
    },
    {
      id: 2,
      image: "images/blog/11.jpg",
      date: "June 16, 2024",
      category: "Business",
      titleLine1: "Back-to-school coverage",
      titleLine2: "tips for kids.",
      link: "/blog-details",
      delay: 600,
    },
    {
      id: 3,
      image: "images/blog/12.jpg",
      date: "June 16, 2024",
      category: "Business",
      titleLine1: "Tips for handling a car",
      titleLine2: "accident scene.",
      link: "/blog-details",
      delay: 900,
    },
  ],
};
export const testimonialsData = {
  bgShape: "images/shape/8.svg",
  icon: "images/icon/5.svg",

  testimonials: [
    {
      id: 1,
      text:
        "It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms",
      name: "Joshua liddell",
      role: "Agency owner",
    },
    {
      id: 2,
      text:
        "It’s a pleasure working with Bunker our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms",
      name: "Joshua liddell",
      role: "Agency owner",
    },
    
  ],
};
export const servicesInsuranceData = {
  section: {
    subtitle: "Our Services",
    title1: "We're Covering All the",
    title2: "Insurance Services",
  },

  services: [
    {
      id: 1,
      icon: "images/icon/4.svg",
      title: "Health Insurance",
      desc:
        "With our innovative consulting today's breakthroughs become the leadership strategies propelling your",
      link: "/service-details",
      delay: 300,
    },
    {
      id: 2,
      icon: "images/icon/4.svg",
      title: "Home Insurance",
      desc:
        "With our innovative consulting today's breakthroughs become the leadership strategies propelling your",
      link: "/service-details",
      delay: 600,
    },
    {
      id: 3,
      icon: "images/icon/4.svg",
      title: "Travel Insurance",
      desc:
        "With our innovative consulting today's breakthroughs become the leadership strategies propelling your",
      link: "/service-details",
      delay: 800,
    },
  ],
};


export const processAreaData = {
  section: {
    subtitle: "Process Bar",
    title1: "Easy process to find",
    title2: "your ideal plan",
  },

  circleImage: "images/shape/9.svg",

  items: [
    {
      id: 1,
      step: "1",
      image: "images/process/1.jpg",
      title: "Talk to an Advisor",
      desc:
        "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios.",
      arrow: "images/icon/6.svg",
      delay: 300,
    },
    {
      id: 2,
      step: "2",
      stepClass: "nth",
      image: "images/process/2.jpg",
      title: "Get a Quote",
      desc:
        "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios.",
      arrow: "images/icon/7.svg",
      delay: 600,
    },
    {
      id: 3,
      step: "3",
      image: "images/process/3.jpg",
      title: "Relax & Sleep Easy",
      desc:
        "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios.",
      delay: 900,
    },
  ],
};

