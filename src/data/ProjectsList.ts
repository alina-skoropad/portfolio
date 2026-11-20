export type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
  figcaption?: string;
};

export type GalleryContentBlock =
  | ({type: "image"} & GalleryImage)
  | {type: "text"; heading: string; text: string}
  | {type: "note"; text: string}
  | {type: "carousel"; images?: GalleryImage[]};

export type ProjectData = {
  id: string;
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
  process: string;
  role: string;
  contribution: {items: string[]};
  timeline: string;
  galleryImages?: GalleryImage[];
  galleryContent?: GalleryContentBlock[];
  additionalImages?: GalleryImage[];
  additionalPosition?: number;
  link?: string;
  colorClass?: string;
  button?: string;
};

export const ProjectsList: ProjectData[] = [
  {
    id: "gvn-app",
    imageUrl: "/images/projects/gvn-app/project-hero",
    tags: ["Design", "App"],
    title: "GVN Supplement Tracker Mobile App",
    description: "A mobile app concept that turns a daily supplement routine into a simple, trackable habit.",
    process: "GVN is a supplement brand with an online store. This was a concept for a companion app, proposed to the client. Customers build a personal supplement list by scanning bottles, follow a daily schedule with reminders, log how they feel, and explore programs built around health goals. The project started with a user flow and screen requirements. I turned them into a mobile UI in Figma, deciding layout, hierarchy and interactions for every screen. Only the key screens are shown here.",
    role: "UI and screen level UX design.",
    contribution: {
      items: [],
    },
    galleryContent: [
      {
        type: "text",
        heading: "Starting from the flow",
        text: "I went through the flow to find the moments that matter most: adding a product, taking it, and checking progress. Those screens got the most attention.",
      },
      {
        type: "image",
        src: "/images/projects/gvn-app/project-mockup1",
        alt: "Supplement tracking flow and app screens",
      },
      {
        type: "text",
        heading: "A UI kit to learn with",
        text: "I built a small UI kit in Figma, with icons and color rules, to learn the tool and keep every screen consistent. Color carries meaning only where it helps: yellow for morning, blue for evening, red for symptoms.",
      },
      {
        type: "image",
        src: "/images/projects/gvn-app/project-mockup5",
        alt: "GVN app icon and color system",
      },
      {
        type: "text",
        heading: "Making daily actions fast",
        text: "The things people do every day need to be quick. Large tap targets, one tap check offs, and a bottom sheet for settings instead of a new screen.",
      },
      {
        type: "image",
        src: "/images/projects/gvn-app/project-mockup3",
        alt: "GVN app programs",
      },
      {
        type: "image",
        src: "/images/projects/gvn-app/project-mockup4",
        alt: "GVN app screen details",
      },
      {
        type: "text",
        heading: "Keeping it calm",
        text: "White cards on a soft green background, clear hierarchy, and plenty of space. The app is about wellness, so the interface should not feel busy.",
      },
      {
        type: "image",
        src: "/images/projects/gvn-app/project-mockup2",
        alt: "Four GVN supplement app screens",
      },
      {type: "carousel"},
      {
        type: "image",
        src: "/images/projects/gvn-app/project-mockup6",
        alt: "GVN login, profile and symptoms screens",
      },
    ],
    additionalImages: [
      {src: "/images/projects/gvn-app/img-1", alt: "GVN schedule"},
      {src: "/images/projects/gvn-app/img-2", alt: "GVN supplement app screen"},
      {src: "/images/projects/gvn-app/img-3", alt: "GVN Brain Fog program screen"},
    ],
    timeline: "2025",
  },
  {
    id: "gvn",
    imageUrl: "/images/projects/gvn/project-hero",
    tags: ["Design", "Code", "Web", "B2C", "E-commerce", "Marketing"],
    title: "Green Valley Naturals",
    description: "A supplement brand’s online store that grew stage by stage — from blog redesign to full e-commerce.",
    process: "GVN is a supplement brand with an online store. Over two years it was my main project. I started with the blog, then redesigned the main website, created landing pages for the new packaging, and built marketing materials around the same visual system. I both designed and coded most of it.",
    role: "Web design, HTML/CSS development, marketing assets and ongoing support.",
    contribution: {
      items: [],
    },
    galleryContent: [
      {
        type: "text",
        heading: "Redesigning the store",
        text: "The main site needed a clearer structure. On product pages I put the choice between one-time purchase and multi-month bundles first, then broke the dense information (ingredients, FAQ, reviews) into clear sections.",
      },
      {type: "image", src: "/images/projects/gvn/project-mockup4", alt: "GVN product page with purchase options"},
      {type: "image", src: "/images/projects/gvn/project-mockup5", alt: "GVN blog article and product page"},
      {
        type: "text",
        heading: "Mobile-first UX patterns",
        text: "Every layout started on a small screen and then scaled up. On mobile, search stays in the header, category tags scroll horizontally, and long content collapses into expandable blocks so the page never feels endless.",
      },
      {type: "image", src: "/images/projects/gvn/project-mockup2", alt: "GVN mobile storefront screens"},
      {type: "image", src: "/images/projects/gvn/project-mockup3", alt: "GVN mobile product and category screens"},
      {type: "image", src: "/images/projects/gvn/project-mockup1", alt: "GVN mobile home page"},
      {
        type: "text",
        heading: "Landing pages for the new packaging",
        text: "When the bottles changed, the landings had to stand apart from the main store. I used a darker palette and put the new packaging front and centre so the update felt intentional.",
      },
      {
        type: "image",
        src: "/images/projects/gvn/project-mockup6",
        alt: "Product landing page",
      },
      {
        type: "image",
        src: "/images/projects/gvn/project-mockup7",
        alt: "Product landing pages",
      },
      {
        type: "text",
        heading: "Keeping the brand consistent outside the site",
        text: "Instead of treating marketing materials as separate pieces, I built them on the same visual system as the store — same greens, same product shots, same tone. This way the brand doesn’t fracture when it leaves the website.",
      },
      {type: "image", src: "/images/projects/gvn/project-mockup8", alt: "GVN promotional banners", figcaption: "Promotional banners"},
      {type: "image", src: "/images/projects/gvn/project-mockup10", alt: "GVN email templates", figcaption: "Email templates"},
      {type: "image", src: "/images/projects/gvn/project-mockup9", alt: "GVN bottle survey", figcaption: "Bottle survey"},
      {
        type: "carousel",
        images: [
          {src: "/images/projects/gvn/img-2", alt: "GVN mobile storefront screens"},
          {src: "/images/projects/gvn/img-3", alt: "GVN mobile article page"},
          {src: "/images/projects/gvn/img-1", alt: "GVN Medical Advisory Board page"},
        ],
      },
    ],
    timeline: "2024 – 2025",
    link: "https://greenvalleynaturals.com/",
    colorClass: "project__link--gvn-green",
    button: "Visit Website",
  },
  {
    id: "bam",
    imageUrl: "/images/projects/bam/img-2",
    tags: ["Design", "Code", "Web", "B2B"],
    title: "BAM Broadband",
    description: "A broadband provider website redesigned after two brands merged into one.",
    process: "Two separate brands were running almost identical websites. When they merged into BAM, I received a new brandbook and redesigned the site around it. The client defined the required pages and key content. I handled the structure, visual system, UI patterns, graphics and coding, then supported the site for about a year.",
    role: "Web design, HTML/CSS development and ongoing support.",
    contribution: {
      items: [],
    },
    galleryContent: [
      {
        type: "text",
        heading: "Translating the brandbook into a digital system",
        text: "The brandbook gave colours and tone. I turned it into a practical system for the site: a set of illustrations, icons and UI components that could be reused across pages without looking generic or repetitive.",
      },
      {
        type: "image",
        src: "/images/projects/bam/project-mockup1",
        alt: "BAM brand graphics, illustrations and icon set",
      },
      {
        type: "text",
        heading: "Restructuring the information",
        text: "The client listed the pages and content. I decided how to group the services and present the plans so the differences were obvious at a glance, and made the “check availability” path the clearest action on the site.",
      },
      {
        type: "image",
        src: "/images/projects/bam/project-mockup2",
        alt: "BAM address check and speed plans in the website hero",
      },
      {
        type: "image",
        src: "/images/projects/bam/project-mockup6",
        alt: "BAM desktop website with internet speed plan comparison cards",
      },
      {
        type: "text",
        heading: "Designing for real usage",
        text: "Most people look for internet on their phone. I designed the key flows (coverage check, plan comparison, contact) for small screens first, then adapted them to desktop.",
      },
      {
        type: "image",
        src: "/images/projects/bam/project-mockup3",
        alt: "BAM mobile website screens",
      },
      {
        type: "image",
        src: "/images/projects/bam/project-mockup4",
        alt: "BAM mobile website screens",
      },
      {
        type: "carousel",
        images: [
          {src: "/images/projects/bam/img-2", alt: "BAM broadband mobile website"},
          {src: "/images/projects/bam/img-1", alt: "BAM broadband mobile website"},
          {src: "/images/projects/bam/img-3", alt: "BAM broadband mobile website"},
        ],
      },
      {
        type: "image",
        src: "/images/projects/bam/project-mockup5",
        alt: "BAM referral, support and careers pages",
      },
      
    ],
    timeline: "2024",
    link: "https://www.bambroadband.com",
    colorClass: "project__link--bam-orange",
    button: "Visit Website",
  },
 {
    id: "mba",
    imageUrl: "/images/projects/mba/project-hero",
    tags: ["Design", "Code", "Web", "B2C", "Marketing"],
    title: "Military Benefit Association",
    description: "A redesigned website for a nonprofit that provides benefits to service members, veterans and their families.",
    process: "I started by coding the site from a provided layout. Later, I led its full redesign and rebuild, while also creating emails, booklets, and blog content over several years of ongoing support.",
    role: "Web design, HTML/CSS development, email, print design and long-term support.",
    contribution: {
      items: [],
    },
    galleryContent: [
      {
        type: "text",
        heading: "Rebuilding for clarity",
        text: "The earlier version had grown dense over time. In the redesign, I simplified the navigation, opened up the page spacing and made primary actions like checking eligibility and applying much easier to spot.",
      },
      {type: "image", src: "/images/projects/mba/project-mockup1", alt: "Military Benefit Association website redesign"},
      {type: "image", src: "/images/projects/mba/project-mockup7", alt: "Military Benefit Association email campaign"},
      {
        type: "text",
        heading: "Structuring insurance and benefit plans",
        text: "Members choose from different life insurance plans and support programs. I broke complex policy details into scannable cards, clear comparison blocks and step-by-step pages so visitors can find the right coverage without digging through dense text.",
      },
      {type: "image", src: "/images/projects/mba/project-mockup2", alt: "Military Benefit Association website screens"},
      {type: "image", src: "/images/projects/mba/project-mockup3", alt: "Military Benefit Association benefits pages"},
      {type: "image", src: "/images/projects/mba/project-mockup5", alt: "Military Benefit Association website screens"},
      {
        type: "carousel",
        images: [
          {src: "/images/projects/mba/img-2", alt: "Military Benefit Association mobile website"},
          {src: "/images/projects/mba/img-3", alt: "Military Benefit Association mobile website"},
          {src: "/images/projects/mba/img-1", alt: "Military Benefit Association website"},
          {src: "/images/projects/mba/project-mockup6", alt: "Military Benefit Association website screen"},
        ],
      },
      {
        type: "text",
        heading: "Emails, booklets and blog",
        text: "Alongside the site, I designed and coded responsive HTML emails, laid out print booklets for members and formatted blog articles, keeping the same typography and navy palette everywhere.",
      },
      {type: "image", src: "/images/projects/mba/project-mockup8", alt: "Military Benefit Association booklet and marketing materials"},
      {type: "image", src: "/images/projects/mba/project-mockup4", alt: "Military Benefit Association website pages"},
      {type: "image", src: "/images/projects/mba/project-mockup9", alt: "Military Benefit Association campaign materials"},
    ],
    timeline: "2020-2025",
    link: "https://militarybenefit.org",
    colorClass: "project__link--mba-dark-blue",
    button: "Visit Website",
  },
  {
    id: "kens",
    imageUrl: "/images/projects/kens/project-hero",
    tags: ["Design", "Code", "Web", "B2B", "Dashboard"],
    title: "Ken's Sales Portal",
    description: "Internal B2B platform for sales teams — product catalog, spec sheets, recipe builders, and order management.",
    process: "I joined the project with a defined home page direction and expanded the visual style into a full UI system across all modules, including complete mobile adaptation.",
    role: "UI/UX design, component system, and HTML/CSS implementation.",
    contribution: {
      items: ["Designed data-heavy interfaces: recipe builders, spec sheets, and order management", "Adapted complex desktop layouts (tables, filters, grids) for mobile and tablet", "Built a modular component system based on the initial home page aesthetic", "Implemented responsive front-end (HTML/CSS) for field-based sales teams"],
    },
    galleryImages: [
      {src: "/images/projects/kens/project-mockup1", alt: "Ken's Sales Portal Main Dashboard", figcaption: "Main Sales Dashboard"},
      {src: "/images/projects/kens/project-mockup2", alt: "Mobile Screens", figcaption: "Mobile Screens"},
      {src: "/images/projects/kens/project-mockup3", alt: "Mobile Screens", figcaption: "Mobile Screens"},
      {src: "/images/projects/kens/project-mockup4", alt: "Desktop Screen", figcaption: "Desktop Screen"},
      {src: "/images/projects/kens/project-mockup5", alt: "Desktop Screens", figcaption: "Desktop Screens"},
      {src: "/images/projects/kens/project-mockup6", alt: "Desktop Screens", figcaption: "Desktop Screens"},
    ],
    additionalImages: [
      {src: "/images/projects/kens/img-3", alt: "Product List View"},
      {src: "/images/projects/kens/img-1", alt: "Product Image Assets Library"},
      {src: "/images/projects/kens/img-2", alt: "Portal Home Navigation"},
    ],
    timeline: "2020-2021",
    additionalPosition: 0,
  },
  {
    id: "jtv",
    imageUrl: "/images/projects/jtv/project-hero",
    tags: ["Design", "Code", "Web", "App", "B2B", "B2C", "Admin", "Branding"],
    title: "JaybirdTV",
    description: "JaybirdTV is a white-label streaming platform for live TV and on-demand video, designed to work across Smart TV, mobile, tablet, and web, with a full CMS for station operators.",
    process: "The platform needed one design language across radically different screen contexts. A TV UI navigated by remote, touch-based mobile and tablet apps, and a desktop admin panel each required its own interaction patterns while staying visually consistent.",
    role: "UI/UX design across all platforms and admin CMS, and HTML/CSS implementation.",
    contribution: {
      items: ["Designed consumer UI/UX for Smart TV, iOS/Android, tablet, and web with a shared visual system", "Built remote-friendly TV interface with keyboard-based search and channel navigation", "Designed the admin CMS for managing users, tags, categories, input sources, and assets", "Supported white-label customization with same platform adapted for different station branding", "Implemented responsive HTML/CSS layouts"],
    },
    galleryImages: [
      {src: "/images/projects/jtv/project-mockup1", alt: "JTV Tablet and Mobile App Screens"},
      {src: "/images/projects/jtv/project-mockup2", alt: "JTV Mobile App Screens", figcaption: "Mobile App Screens"},
      {src: "/images/projects/jtv/project-mockup3", alt: "JTV Tablet App Screens", figcaption: "Tablet App Screens"},
      {src: "/images/projects/jtv/project-mockup4", alt: "JTV Roku App Screen"},
      {src: "/images/projects/jtv/project-mockup5", alt: "JTV Roku App Screen", figcaption: "Roku App Screen"},
      {src: "/images/projects/jtv/project-mockup6", alt: "JTV Roku App Screen", figcaption: "Roku App Screen"},
      {src: "/images/projects/jtv/project-mockup7", alt: "JTV Roku App Screen", figcaption: "Roku App Screen"},
      {src: "/images/projects/jtv/project-mockup8", alt: "JTV Admin", figcaption: "Admin"},
      {src: "/images/projects/jtv/project-mockup9", alt: "JTV Admin Screens", figcaption: "Admin Screens"},
      {src: "/images/projects/jtv/project-mockup10", alt: "JTV Admin Styles", figcaption: "Admin Styles"},
      {src: "/images/projects/jtv/project-mockup11", alt: "JTV App Styles", figcaption: "App Styles"},
    ],
    additionalImages: [
      {src: "/images/projects/jtv/img-1", alt: "JTV Roku App Screen"},
      {src: "/images/projects/jtv/img-2", alt: "JTV Mobile App Screen"},
      {src: "/images/projects/jtv/img-3", alt: "JTV Tablet Screen"},
    ],
    timeline: "2021",
    link: "https://www.jaybirdtv.com/",
    colorClass: "project__link--jtv-light-green",
    additionalPosition: 0,
    button: "Visit Website",
  },
  {
    id: "dohn",
    imageUrl: "/images/projects/dohn/project-hero",
    tags: ["Design", "Code", "Web", "B2B"],
    title: "Dohn Construction",
    description: "A redesigned website for a construction company, built to show its services and finished projects.",
    process: "Dohn Construction needed a refreshed website to modernize its online presence. Working from the existing site structure and an updated brand direction, I redesigned the full site and built it in HTML and CSS.",
    role: "Web design and HTML/CSS development.",
    contribution: {
      items: [],
    },
    galleryContent: [
       {
        type: "text",
        heading: "Leaving the white background",
        text: "The client wanted no white background, and a site that is simple and interesting at the same time. I used a light concrete texture, dark green headings and orange buttons, giving the pages an industrial feel while keeping them clean but stay clean.",
      },
      {
        type: "image",
        src: "/images/projects/dohn/project-mockup1",
        alt: "Dohn Construction responsive website",
      },
      {
        type: "text",
        heading: "Showing the work",
        text: "Finished projects are the best proof for a construction company, so the portfolio is a filterable grid of large photos, and every project has its own page with key facts and a gallery.",
      },
      {
        type: "image",
        src: "/images/projects/dohn/project-mockup5",
        alt: "Dohn Construction home, portfolio and project pages",
      },
      {
        type: "text",
        heading: "The same site on a phone",
        text: "On mobile, services open as a simple list, portfolio filters collapse into one button, and contact details stay near the top.",
      },
      {
        type: "image",
        src: "/images/projects/dohn/project-mockup2",
        alt: "Dohn Construction mobile screens",
      },
      {
        type: "carousel",
        images: [
          {src: "/images/projects/dohn/img-2", alt: "Dohn Construction on tablet and phone"},
          {src: "/images/projects/dohn/img-1", alt: "Dohn Construction mobile website"},
          {src: "/images/projects/dohn/img-3", alt: "Dohn Construction portfolio on a laptop"},
        ],
      },
      {
        type: "image",
        src: "/images/projects/dohn/project-mockup3",
        alt: "Dohn Construction mobile services and portfolio",
      },
      {
        type: "text",
        heading: "The people behind the company",
        text: "The team photos are black and white with orange line graphics added, so every portrait fits the brand colors.",
      },
      {
        type: "image",
        src: "/images/projects/dohn/project-mockup4",
        alt: "Dohn Construction team page",
      },
      {
        type: "image",
        src: "/images/projects/dohn/project-mockup6",
        alt: "Dohn Construction team portraits with graphics",
      },
    ],
    timeline: "2025",
    link: "https://www.dohnconstruction.com/",
    colorClass: "project__link--dohn-dark-green",
    button: "Visit Website",
  },
  {
    id: "locast",
    imageUrl: "/images/projects/locast/project-hero",
    tags: ["Design", "Code", "Smart TV", "Web", "App", "B2C", "Branding", "Marketing"],
    title: "Locast",
    description: "Locast was a non-profit streaming service for watching local TV channels across 30+ US markets, serving 3M+ users.",
    process: "The work covered the full product experience across all platforms and touchpoints, from the core TV guide and player to device activation, geofencing, donation flows, and all marketing materials.",
    role: "UI/UX design across all platforms (Mobile, Tablet, Smart TV, Web) and marketing.",
    contribution: {
      items: ["Redesigned the logo and extended the brand identity with an accent color system", "Built the design system in Sketch with a full component library synced via Zeplin", "Designed the full product UI from scratch across iOS, Android, tablet, Smart TV, and web", "Produced email templates, landing pages, and print banners for marketing campaigns", "Implemented HTML/CSS for the initial website version, landing pages and emails"],
    },
    galleryImages: [
      {src: "/images/projects/locast/project-mockup1", alt: "Locast Mobile App", figcaption: "Mobile App"},
      {src: "/images/projects/locast/project-mockup2", alt: "Locast Mobile App Screens", figcaption: "Mobile App Screens"},
      {src: "/images/projects/locast/project-mockup3", alt: "Locast Mobile App Screen", figcaption: "Mobile App Screen"},
      {src: "/images/projects/locast/project-mockup4", alt: "Locast Tablet App", figcaption: "Tablet App"},
      {src: "/images/projects/locast/project-mockup5", alt: "Locast Tablet App Screens", figcaption: "Tablet App Screens"},
      {src: "/images/projects/locast/project-mockup6", alt: "Locast SmartTV App", figcaption: "SmartTV App"},
      {src: "/images/projects/locast/project-mockup7", alt: "Locast SmartTV App Screens", figcaption: "SmartTV App Screens"},
      {src: "/images/projects/locast/project-mockup8", alt: "Locast SmartTV App Screens", figcaption: "SmartTV App Screens"},
      {src: "/images/projects/locast/project-mockup9", alt: "Locast Desktop EPG", figcaption: "Desktop EPG"},
      {src: "/images/projects/locast/project-mockup10", alt: "Locast Landing Page", figcaption: "Landing Page"},
      {src: "/images/projects/locast/project-mockup12", alt: "Locast Emails", figcaption: "Emails"},
      {src: "/images/projects/locast/project-mockup13", alt: "Locast Cards", figcaption: "Cards"},
    ],
    additionalImages: [
      {src: "/images/projects/locast/img-1", alt: "Locast Smart TV"},
      {src: "/images/projects/locast/img-2", alt: "Locast Web Streaming Interface"},
      {src: "/images/projects/locast/img-3", alt: "Locast Content Detail View"},
    ],
    timeline: "2019-2021",
    additionalPosition: 0,
  },
  {
    id: "locast-ops-dashboard",
    imageUrl: "/images/projects/locast-ops-dashboard/project-hero",
    tags: ["Design", "Code", "Web", "Dashboard", "Branding"],
    title: "Locast Ops Dashboard",
    description: "An internal real-time monitoring tool for the Locast ops team, providing live visibility into antenna status, broadcast health, and channel activity across all US markets.",
    process: "Designed from scratch as a standalone internal tool, built to give the ops team instant access to live status data across all monitored locations.",
    role: "UI/UX design and HTML/CSS implementation.",
    contribution: {
      items: ["Designed map-based dashboard showing antenna locations and signal status across 25+ US markets", "Built city-level detail panels with active channel counts, fatal error alerts, and station technical info", "Designed channel detail view with real-time status, technical specs, and user-reported problem graph", "Implemented HTML/CSS for the full dashboard"],
    },
    galleryImages: [
      {src: "/images/projects/locast-ops-dashboard/project-mockup1", alt: "Locast Ops Dashboard", figcaption: "Dashboard"},
      {src: "/images/projects/locast-ops-dashboard/project-mockup2", alt: "Locast Ops Dashboard Popups", figcaption: "Popups"},
      {src: "/images/projects/locast-ops-dashboard/project-mockup3", alt: "Locast Ops Channel Popup", figcaption: "Channel"},
    ],
    additionalImages: [
      {src: "/images/projects/locast-ops-dashboard/img-1", alt: "Locast Ops Dashboard"},
      {src: "/images/projects/locast-ops-dashboard/img-2", alt: "Locast Ops Dashboard"},
      {src: "/images/projects/locast-ops-dashboard/img-3", alt: "Locast Ops Dashboard"},
    ],
    timeline: "2020",
    additionalPosition: 1,
  },
  {
    id: "t2w",
    imageUrl: "/images/projects/t2w/project-hero",
    tags: ["Design", "Code", "Web", "App", "B2B", "Branding"],
    title: "Trades2Work",
    description: "Trades2Work needed a solution that simplifies time tracking and field workflows for construction trades, providing a unified interface for workers and managers.",
    process: "The project covered both the mobile app and a presentation website — designed in parallel to ensure the product and its public face felt like one cohesive system.",
    role: "UI/UX design for mobile app and web, branding, and HTML/CSS implementation.",
    contribution: {
      items: ["Designed UI/UX for the mobile app to streamline time tracking and field workflows", "Created a responsive presentation website to showcase the app and its key features", "Developed cohesive branding and visual assets for a unified product experience", "Implemented HTML/CSS for web layouts and interfaces"],
    },
    galleryImages: [
      {src: "/images/projects/t2w/project-mockup1", alt: "T2W Website / Mobile App", figcaption: "Website / Mobile App"},
      {src: "/images/projects/t2w/project-mockup2", alt: "T2W Mobile App Screens", figcaption: "Mobile App Screens"},
      {src: "/images/projects/t2w/project-mockup3", alt: "T2W Mobile App Screens", figcaption: "Mobile App Screens"},
      {src: "/images/projects/t2w/project-mockup4", alt: "T2W Mobile App Screens", figcaption: "Mobile App Screens"},
      {src: "/images/projects/t2w/project-mockup5", alt: "T2W Graphic Design", figcaption: "Graphic Design"},
      {src: "/images/projects/t2w/project-mockup6", alt: "T2W Desktop Screen", figcaption: "Desktop Screen"},
    ],
    additionalImages: [
      {src: "/images/projects/t2w/img-1", alt: "T2W Mobile App Screen"},
      {src: "/images/projects/t2w/img-2", alt: "T2W Mobile App Screen"},
      {src: "/images/projects/t2w/img-3", alt: "T2W Mobile App Screen"},
    ],
    timeline: "2021-2022",
    link: "https://www.youtube.com/watch?v=Dmw9NHjDQXs",
    colorClass: "project__link--t2w-dark-blue",
    additionalPosition: 1,
    button: "View Promo",
  },
];
