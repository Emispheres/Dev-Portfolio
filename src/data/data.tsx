import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  CommandLineIcon,
  FlagIcon,
  LightBulbIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/blue.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/laclasse.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Modèle de CV React',
  description: "Site d'exemple construit avec le modèle de CV React de Tim Baker",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Profil',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'cv',
  Skills: 'compétences',
  Stats: 'stats',
  Testimonials: 'temoignages',
  NextSteps: 'nextsteps',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Bienvenue`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Je suis un <strong className="text-stone-100">développeur web junior</strong>, passionné par la création
        d'interfaces modernes, claires et efficaces. Je développe des applications web en utilisant
        <strong className="text-stone-100"> HTML, CSS, JavaScript et React</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Actuellement en montée en compétences, je travaille sur des
        <strong className="text-stone-100"> projets concrets</strong> pour renforcer mes bases techniques, améliorer la
        qualité de mon code et construire un
        <strong className="text-stone-100"> portfolio professionnel</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Technicien / développeur, 
  avec une forte appétence pour le développement et les technologies web modernes. Je conçois des sites web modernes en utilisant HTML, CSS, JavaScript et React.
  Je travaille avec des API, la gestion d’état et des composants réutilisables.`,
  aboutItems: [
    {label: 'Localisation', text: 'Toulouse', Icon: MapIcon},
    {label: 'Âge', text: '24', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Française', Icon: FlagIcon},
    /*{label: 'Intérêts', text: 'Motos, Muay Thai, Banjos', Icon: SparklesIcon},*/
    /*{label: 'Études', text: 'Université de Victoria', Icon: AcademicCapIcon},
    {label: 'Emploi', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},*/
  ],
  strengths: [
    {
      title: 'Apprentissage rapide',
      description: 'Capacité à assimiler rapidement de nouveaux concepts et technologies pour rester à jour.',
      Icon: LightBulbIcon,
    },
    {
      title: 'Code de qualité',
      description: 'Engagement envers la rédaction de code propre, maintenable et bien documenté.',
      Icon: CommandLineIcon,
    },
    {
      title: 'Créativité',
      description: 'Approche créative pour résoudre les problèmes et créer des interfaces modernes.',
      Icon: SparklesIcon,
    },
    {
      title: 'Collaboration',
      description: "Travail d'équipe efficace et communication claire pour atteindre les objectifs communs.",
      Icon: AcademicCapIcon,
    },
  ],
  values: [
    {
      title: '🎯 Excellence',
      description: 'Viser l\'excellence dans chaque projet et ne jamais se contenter du "bon assez".',
    },
    {
      title: '🚀 Innovation',
      description: 'Chercher constamment des solutions innovantes et des approches créatives.',
    },
    {
      title: '📚 Apprentissage continu',
      description: "Croire en l'amélioration continue et à la croissance personnelle et professionnelle.",
    },
    {
      title: '🤝 Intégrité',
      description: 'Travailler avec honnêteté et responsabilité dans tous les aspects du travail.',
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langues',
    skills: [
      {
        name: 'Anglais',
        level: 7,
      },
      {
        name: 'Français',
        level: 10,
      },
    ],
  },
  {
    name: 'Développement frontend',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Développement backend',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Outils & Technologies',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'AWS',
        level: 6,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Titre du projet 1',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Titre du projet 2',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Titre du projet 3',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Titre du projet 4',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Titre du projet 5',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Titre du projet 6',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Titre du projet 7',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Titre du projet 8',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Titre du projet 9',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Titre du projet 10',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Titre du projet 11',
    description: 'Donnez une courte description de votre projet ici.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2022',
    location: 'Lycée Général et Technologique International Victor Hugo - Colomiers',
    title: 'BTS Système numérique - informatique et réseaux ',
    content: (
      <p>
        Décrivez votre expérience à l'école, ce que vous avez appris, les compétences utiles que vous avez acquises,
        etc.
      </p>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'IUT - Blagnac',
    title: 'DUT Informatique ',
    content: (
      <p>
        Décrivez votre expérience à l'école, ce que vous avez appris, les compétences utiles que vous avez acquises,
        etc.
      </p>
    ),
  },
  {
    date: '2016 - 2019',
    location: 'Lycée Polyvalent Déodat de Séverac - Toulouse',
    title: "Bac STI2D spécialité Système d'information et numérique ",
    content: (
      <p>
        Décrivez votre expérience à l'école, ce que vous avez appris, les compétences utiles que vous avez acquises,
        etc.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Septembre 2021 - Juin 2022',
    location: 'Lycée Général et Technologique International Victor Hugo - Colomiers',
    title: "Projet de fin d'année",
    content: (
      <p>
        Création de site web avec base de données afin de suivre l'utilisation et l'état d'imprimantes 3D dans un
        FabLab.<br></br>
        Création de maquettes et d'un cahier des charges.<br></br>
        Récupération des données de capteurs de température et d'humidité dans le FabLab vers le serveur. Affichage de
        ces données sur site web.<br></br>
        Gestion de projet avec TimePerformance.<br></br>
      </p>
    ),
  },
  {
    date: 'Juin 2021 - Septembre 2021',
    location: 'Maintronic - Labège',
    title: "Stagiaire en maintenance d'appareil électronique",
    content: (
      <p>
        Prise en charge et réparation d'imprimante à jet d'encre EPSON pour clients particulier et professionnel.
        <br></br>
        Accueil des clients en agence.<br></br>
        Changement d'OS de Windows à Linux.<br></br>
        Remplacement de composant de PC portable.<br></br>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: "Utilisez ceci comme une opportunité pour promouvoir ce que c'est que de travailler avec vous. Les témoignages de haute valeur incluent ceux de collègues actuels ou passés, de managers, ou de clients satisfaits.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: "Ici, vous devriez écrire des choses gentilles que quelqu'un a dites sur vous. Encouragez-les à être spécifiques et à inclure des détails importants (notes sur un projet sur lequel vous avez travaillé ensemble, qualité impressionnante produite, etc.).",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: "Quelqu'un d'autre",
      text: 'Ajoutez-en plusieurs, et gardez-les aussi frais que possible, mais assurez-vous de vous concentrer sur des témoignages de qualité avec des points forts sur vos compétences/éthique de travail.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Entrez en contact.',
  description:
    'Voici un bon endroit pour un message à vos lecteurs pour leur faire savoir comment vous contacter au mieux.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
