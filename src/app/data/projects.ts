export const projects = [
  {
    slug: "bible-diaries",
    title: "Bible Diaries",
    words: ["Bible", "Diaries"],
    category: "Faith & community",
    label: "Reflect. Share. Connect.",
    description:
      "A dedicated space for scripture, personal reflections and a connected faith community.",
    overview:
      "Bible Diaries brings spiritual reflection and community into one place. People can publish diary entries, explore themed reflections and connect through profiles and conversations.",
    features: [
      "Publish and discover reflections by theme",
      "Connect through community profiles and conversations",
      "Content moderation to support respectful discussion",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Supabase", "OpenAI"],
    contribution:
      "Product design and development for the reflection and community experience.",
  },
  {
    slug: "service-link",
    title: "Service Link",
    words: ["Service", "Link"],
    category: "Local services / Mobile app",
    label: "Find your next connection.",
    description:
      "Connecting people with local professionals through discovery, profiles and booking flows.",
    overview:
      "Service Link helps people find the right local service provider. Map and list views make discovery straightforward, while provider profiles bring pricing, experience and reviews into the decision.",
    features: [
      "Discover providers on a map or in a list",
      "Filter by category, distance and name",
      "Explore profiles and coordinate bookings",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "React Native Maps",
    ],
    contribution:
      "Mobile interface design and development, including discovery and navigation flows.",
  },
  {
    slug: "medsync",
    title: "MedSync",
    words: ["Med", "Sync"],
    category: "Healthcare / Mobile app",
    label: "Care, in sync.",
    description:
      "A healthcare application designed to make appointments and clinical workflows easier to manage.",
    overview:
      "Built for Hokma Tech, MedSync brings appointment management into a clear mobile experience. Its screens guide medical staff from sign-in and the dashboard through booking and confirmation.",
    features: [
      "Guided onboarding and sign-in screens",
      "Dashboard for appointment workflows",
      "Booking and confirmation interfaces",
    ],
    stack: [
      "React Native",
      "Expo",
      "React Navigation",
      "Delphi REST API integration",
    ],
    contribution:
      "Ts Industries contributed UI/UX design and API boundary planning. Front-end development was led by Mpho. Product ownership and intellectual property belong to Hokma Tech.",
  },
  {
    slug: "resume-build",
    title: "Resume Build",
    words: ["Resume", "Build"],
    category: "Career tools / Web app",
    label: "Your story. Well presented.",
    description:
      "A guided résumé builder that turns professional experience into a structured, shareable document.",
    overview:
      "Resume Build helps job seekers organise their experience, education and skills without manually wrestling with document layouts. Guided editing, previews and PDF generation support the journey from a first draft to a finished résumé.",
    features: [
      "Guided sections for experience, education and skills",
      "Interactive editing and document previews",
      "PDF generation and résumé processing",
    ],
    stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Supabase"],
    contribution: "Web application design and development for rbptech.",
    url: "https://www.rbptech.co.za",
    urlLabel: "Visit rbptech.co.za",
  },
  {
    slug: "rhyma-music",
    title: "Rhyma Music",
    words: ["Rhyma", "Music"],
    category: "Music / Artist platform",
    label: "A space for sound.",
    description:
      "An artist platform bringing music releases, discography and booking enquiries together.",
    overview:
      "Rhyma Music gives listeners a place to explore an artist’s music and latest releases. An administration area supports content updates and booking enquiries, with Spotify integration for release information.",
    features: [
      "Explore tracks, discography and upcoming releases",
      "Send artist booking enquiries",
      "Manage content and synchronise Spotify releases",
    ],
    stack: ["Python", "Flask", "Jinja2", "SQLAlchemy", "Spotify Web API"],
    contribution:
      "Website design and development for Rhyma’s artist presence and administration workflows.",
    url: "https://rhymamusic.co.za/",
    urlLabel: "Visit rhymamusic.co.za",
  },
  {
    slug: "ndivhu-mpho",
    title: "Ndivhu & Mpho",
    words: ["Ndivhu", "& Mpho"],
    category: "Celebrations / Wedding website",
    label: "One day. Every detail.",
    description:
      "A personal wedding website that brings guest reservations, seating and event details together.",
    overview:
      "Created for Ndivhuwo and Mpho, this wedding reservation system helps guests RSVP and choose seats while giving the couple a central place to manage responses and confirmations.",
    features: [
      "Guest RSVP and interactive seat selection",
      "Administration of pending, confirmed and declined reservations",
      "Guest confirmation emails and reservation controls",
    ],
    stack: ["Python", "Flask", "Flask-SQLAlchemy", "HTML", "CSS", "JavaScript"],
    contribution:
      "Custom website design and reservation workflow development. The live address is withheld under the client confidentiality agreement.",
  },
];
export type Project = (typeof projects)[number];
