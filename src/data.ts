export const resumeData = {
  personalInfo: {
    name: "Arif Budi Prasetio",
    title: "Cloud & Infrastructure Engineer",
    email: "bparif21@gmail.com",
    phone: "+628153181990",
    location: "Jakarta Selatan, Indonesia",
    linkedin: "https://www.linkedin.com/in/arif-budi-prasetio/",
    about:
      "IT professional with 7+ years of experience, including 6 years in IT Support and 1 year as a Server Engineer. Skilled in delivering effective technical solutions to enhance operational efficiency. Keen interest in cloud technologies and infrastructure, with a strong drive to adopt and implement scalable cloud-based systems.",
  },
  workExperience: [
    {
      id: "bilibili",
      company: "Bilibili Indonesia",
      location: "Jakarta",
      role: "IT Office Support",
      date: "Dec 2023 - Present",
      description:
        "Delivered end-user technical support, performed network troubleshooting, managed new hire onboarding and IT asset lifecycle, and developed IT FAQ documentation to improve operational efficiency and enhance the overall user experience.",
      type: "Content / Media",
    },
    {
      id: "pointstar",
      company: "PointStar",
      location: "Jakarta",
      role: "Server Engineer",
      date: "Oct 2022 - Oct 2023",
      description:
        "Specializing in cloud infrastructure management, managed services, and server administration. Proficient in managing environments on Google Cloud Platform, troubleshooting Linux and Windows servers, and delivering reliable technical support to clients. Strong track record of collaborating across cross-functional teams to ensure infrastructure stability, resolve complex issues, and maintain high service standards.",
      type: "Cloud Consultancy",
    },
    {
      id: "lazada",
      company: "Lazada Indonesia",
      location: "Jakarta",
      role: "IT Support",
      date: "Jan 2017 - Oct 2022",
      description:
        "Results-driven IT Service Delivery professional with hands-on experience in end-user support, infrastructure administration, and IT operations. Skilled in managing enterprise systems, server environments, asset lifecycle, OS deployment, and software automation. Proven ability to deliver technical solutions, streamline processes, support livestream operations, and collaborate effectively with regional teams to drive successful IT projects and business continuity.",
      type: "E-commerce",
    },
  ],
  education: [
    {
      institution: "Al-Azhar Indonesia University",
      location: "Jakarta",
      degree: "Bachelor of Informatics",
      date: "Jul 2024 - Jul 2028 (Expected)",
    },
  ],
  projects: [
    {
      id: "p1",
      year: "2025",
      title: "Full-Stack Form System",
      description:
        "Designed and implemented a form submission web page using React for the frontend and Supabase for backend services and authentication. Integrated GitHub Actions to enable seamless and automated deployment.",
      tags: ["React", "Supabase", "GitHub Actions", "CI/CD"],
      link: "https://rsbcreatormanager.com/",
    },
    {
      id: "p2",
      year: "2025",
      title: "Self-Hosted Cloud Infrastructure",
      description:
        "Engineered a self-hosted cloud infrastructure on Zimaboard, utilizing CasaOS and Cloudflare Tunnel for secure remote access. Implemented Nextcloud for personal and shared document storage, achieving enhanced data privacy and control.",
      tags: ["Zimaboard", "CasaOS", "Cloudflare Tunnel", "Nextcloud", "Self-hosting"],
      link: "",
    },
    {
      id: "p3",
      year: "2023",
      title: "Static Site Migration to GCP",
      description:
        "Migrated a static vCard site from SiteGround to aaPanel on Google Cloud Platform, improving cost-efficiency and control.",
      tags: ["GCP", "aaPanel", "Migration", "Web Hosting"],
      link: "https://briansabin.spinnermedia.com/",
    },
    {
      id: "p4",
      year: "2023",
      title: "Open-Source Infrastructure Optimization",
      description:
        "Transitioned a business website from a paid hosting panel to an open-source solution on Google Cloud Platform, reducing hosting expenses without compromising performance.",
      tags: ["GCP", "Open-Source", "Infrastructure Cost Optimization"],
      link: "https://www.klots.com/",
    },
  ],
  certifications: [
    {
      issuer: "Google Cloud",
      badges: [
        { name: "Professional Cloud Architect (PCA)" },
        { name: "Associate Cloud Engineer (ACE)" },
        { name: "Cloud Digital Leader (CDL)" }
      ],
      iconType: "google",
    },
    {
      issuer: "Alibaba Cloud",
      badges: [
        { name: "Associate Cloud Architect (ACA)" },
        { name: "Associate Cloud Professional (ACP)" }
      ],
      iconType: "alibaba",
    },
    {
      issuer: "AWS",
      badges: [
        { name: "Cloud Practitioner" }
      ],
      iconType: "aws",
    },
  ],
  skills: [
    { category: "Cloud Platforms", items: ["Google Cloud Platform", "AWS", "Alibaba Cloud"] },
    { category: "Infrastructure", items: ["Compute Engine (VM)", "Networks", "Load Balancing", "Docker"] },
    { category: "OS & Virtualization", items: ["Linux", "Hyper-V", "Proxmox"] },
    { category: "IT Ops & Support", items: ["MacOS Troubleshooting", "Server Management", "Windows Troubleshooting", "Hardware & Software Support", "Asset Lifecycle", "OS Deployment"] },
  ],
};
