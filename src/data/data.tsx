import {ArrowDownTrayIcon, CalendarIcon, FlagIcon, MapIcon} from '@heroicons/react/24/outline';
import { BookOpenIcon, CircleStackIcon, CodeBracketIcon, EnvelopeIcon, ServerStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import heroImage from '../images/notbad.jpg';
import porfolioImage1 from '../images/portfolio/FabLabV2.PNG';
import porfolioImage2 from '../images/portfolio/WhatSonV2.PNG';
/*import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';*/
import porfolioImage4 from '../images/portfolio/DevPortfolio.png';
import porfolioImage5 from '../images/portfolio/Ron.jpg';
/*import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/

/*import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';*/

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Portfolio d'Émile Dzawa - Développeur Web Junior",
  description: "Portfolio d'Émile Dzawa - Développeur Web Junior",
}; 

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Profil',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'expériences',
  Skills: 'compétences',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Bienvenue sur mon Portfolio !`,
  description: (
    <>
      <div className="space-y-2" style={{fontFamily: 'Robotto, sans-serif'}}>
        <p className="text-stone-100 prose-base text-stone-200 sm:prose-lg lg:prose-2xl">
          Je suis un <strong className="text-stone-100">développeur web junior</strong>, passionné par la création
          d'interfaces modernes, claires et efficaces. Je développe des applications web en utilisant
          <strong className="text-stone-100"> HTML, TailwindCSS, JavaScript , React et Next.js</strong>.
        </p>
        
        {/*<p className="prose-base text-stone-200 sm:prose-lg lg:prose-2xl">
          Actuellement en montée en compétences, je travaille sur des
          <strong className="text-stone-100"> projets concrets</strong> pour renforcer mes bases techniques,
          améliorer la qualité de mon code.
        </p>*/}
      </div>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Télécharger mon CV',
      Icon: ArrowDownTrayIcon,
      color:'bg-blue-600/75',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Formulaire de Contact',
      Icon: EnvelopeIcon,
      color:'bg-green-700/75',
    },
  ],
};

/**
 * Skills Icons section
 */
export const skillsIcons = [
  { icon: CodeBracketIcon, label: 'Front-end', hoverColor: 'hover:text-blue-500/75' },
  { icon: CircleStackIcon, label: 'Back-end', hoverColor: 'hover:text-green-500/75' },
  { icon: BookOpenIcon, label: 'Apprentissage', hoverColor: 'hover:text-red-400/75' },
  { icon: WrenchScrewdriverIcon, label: 'Outils & Technologies', hoverColor: 'hover:text-pink-400/75' },
  { icon: ServerStackIcon, label: 'Réseaux', hoverColor: 'hover:text-amber-400/75' },
];

/**
 * About section
 */
export const aboutData: About = {
  
  description: `Je suis développeur web junior front-end avec des bases back-end. Je réapprends actuellement les bases de la programmation objet, ainsi que les principes du fonctionnement de systèmes informatiques.\n
Je travaille les bases de réseaux et des systèmes (Linux, notions de TCP/IP, fonctionnement des différentes machines et des connexions), dans l’objectif de construire progressivement un réseau TCP/IP afin d'avoir un profil technique plus complet.\n
Par le même temps, je travaille sur des exercices, des projets d’apprentissage et sur des projets personnelles afin de comprendre la structure de programmes et la manière dont les applications interagissent entre elles et leur environnement.\n
Curieux et persévérant, je cherche à acquérir des bases techniques plus concrètes plutôt que de me limiter à mes connaissances théoriques, afin de pouvoir m'orienter plus tards vers des roles plus avancés.\n
Autonome de nature, je peux travailler seul ou en groupe, étant aussi capable de m’adapter à un environnement que je ne connais pas ou peu. J’aime apprendre de nouvelles choses et reste ouvert aux critiques afin de m'améliorer toujours davantage.`,

  aboutItems: [
    {label: 'Localisation', text: 'France, Lespinasse', Icon: MapIcon},
    {label: 'Âge', text: '24', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Français', Icon: FlagIcon},
  ],
  softSkills: [
    {title: 'Apprentissage continu'},
    {title: 'Collaboration'},
    {title: 'Esprit d\'équipe & réactif'},
    {title: 'Autonomie'},

  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

  {
    name: 'Développement frontend',
    description: 'Compétences en développement frontend avec divers frameworks et bibliothèques.',
    Icon: CodeBracketIcon,
    iconColor: 'text-blue-500',
    iconPosition: 'right',
    skills: [
            {
        name: 'HTML',
        level: 9,
      },
            {
        name: 'CSS',
        level: 10,
      },
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'JQuery',
        level: 7,
      },
      {
        name: 'Ajax',
        level: 6,
      },
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'ChartJS',
        level: 5,
      },
    ],
  },
  {
    name: 'Développement backend',
    description: 'Compétences en développement backend avec plusieurs technologies.',
    Icon: CircleStackIcon,
    iconColor: 'text-green-400',
    iconPosition: 'left',
    skills: [
      {
        name: 'Node.js',
        level: 3,
      },
      {
        name: 'MySQL',
        level: 6,
      },
      {
        name: 'PHP',
        level: 4,
      },
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    Icon: ServerStackIcon,
    iconPosition: 'right',
    iconColor: 'text-amber-400',
    name: 'Réseaux',
    description: 'Compétences en réseaux informatiques.',
    skills: [
      {
        name: 'VLAN',
        level: 3,
      },
      {
        name: 'TCP/IP',
        level: 2,
      },
      {
        name: 'DNS',
        level: 1,
      },
      {
        name: 'DHCP',
        level: 1,
      },
      {
        name: 'Table de routage',
        level: 6,
      },
      {
        name: 'HTTP/HTTPS',
        level: 3,
      },  
    ],
  },
  {
    Icon: WrenchScrewdriverIcon,
    iconPosition: 'left',
    name: 'Outils & Technologies',
    description: "Compétences avec divers outils et technologies de développement.",
    iconColor: 'text-pink-400',
    skills: [
      {
        name: 'Git',
        level: 5,
      },
      {
        name: 'VS Code',
        level: 8,
      },
      {
        name: 'WordPress',
        level: 8,
      },
      {
        name: 'JSON',
        level: 2,
      },
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'Windows',
        level: 10,
      },
      {
        name: 'NetBeans',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'TRS FabLab',
    shortDescription: "Application web de suivi et d'analyse de la production d'imprimantes 3D. Le projet n'a jamais été terminé mais une version fonctionnelle est disponible en ligne.",
    stack: ['2022 | Formation','HTML', 'CSS', 'JavaScript', 'GraphQL', 'Chart.js', 'PHP', 'MySQL'],
    description: `- Suivi en temps réel des conditions de production (température, hygrométrie) avec alertes.
- Visualisation de la production par ordre de fabrication et estimation des coûts.
- Affichage du TRS (Taux de Rendement Synthétique) par imprimante.
- Gestion des utilisateurs (invité, utilisateur, administrateur).
- Développement frontend et intégration de données capteurs
- Rédaction de cahier des charges et création de maquettes
- Travail en équipe
- Projet Agile avec gestion des tâches avec TimePerformance`,
    url: 'https://emispheres.github.io/TRS-FabLab/',
    image: porfolioImage1,
  },
  {
    title: `What's On`,
    shortDescription: 'Application mobile centralisant des informations utiles pour étudiants du DUT de Blagnac.',
    stack: ['2019 | Formation','HTML', 'CSS', 'JavaScript', 'Font Awesome', 'API REST', ],
    description: `- Météo, horaires tram T1, agenda événements
- Projet collaboratif en gestion de projet
- Mode sombre avec détection préférences système (variables CSS)
- Intégration Open-Meteo (HTTPS, temps réel)
- JavaScript vanilla avec navigation fluide`,
    url: 'https://emispheres.github.io/Whatson/',
    image: porfolioImage2,
  },

  {
    title: 'Mon Portfolio',
    shortDescription: 'Site sur lequel vous êtes actuellement ! 😊',
    stack: ['2025 | Personnel','Next.js', 'React', 'TypeScript', 'TailwindCSS', 'GraphQL'],
    description: `- Portfolio personnel présentant mon parcours, mes compétences et mes projets
- Présentation de mes projets, formations et expériences professionnelles
- Design avec TailwindCSS
- Intégration de GraphQL pour l'affichage des projets
- Section de contact fonctionnelle
- Mise en avant des compétences techniques en frontend`,
    url: 'https://github.com/Emispheres/Dev-Portfolio',
    image: porfolioImage4,
  },
  {
    title: 'Robot Fouineur',
    shortDescription: 'Robot autonome de récupération de données environnementales. Le but de ce projet était de concevoir un robot contrôler par application mobile, capable de se déplacer de manière autonome dans des environnements inaccessible tout en collectant des données sur la température et l\'humidité ambiantes à l\'aide de capteurs et d\'une caméra intégrés.',
    stack: ['2018 | Formation','Arduino', 'C++', 'Capteurs Température/Humidité', 'Communication Bluetooth', 'Mit App inventor'],
    description: `- Projet Arduino de récupération et traitement de données environnementales
- Robot autonome équipé de capteurs de température et d'humidité
- Transmission des données du robot Arduino vers application mobile
- Traitement et stockage des données captées
- Interface de visualisation des mesures en temps réel
- Caméra embarquée pour navigation autonome
- Démonstration vidéo de l'application complète disponible
- Intégration de données capteurs
- Travail en équipe`,
    url: '',
    image: porfolioImage5,
    videoUrl: '/video/video-demo.mp4',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2022',
    location: 'Lycée International Victor Hugo',
    title: 'BTS Système numérique - informatique et réseaux ',
    content: (
      <ul style={{fontFamily: '"Roboto", sans-serif'}}>
        <li> Mise en place, configuration et maintenance de systèmes informatiques et réseaux.</li>
        <li> Compétences en administration de réseaux (LAN, routage, VLAN).</li>
        <li> Gestion de systèmes Windows et Linux. </li>
        <li> Programmation en Python, C, C++, HTML/CSS et JavaScript.</li>
      </ul>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'IUT - Blagnac',
    title: 'DUT Informatique ',
    content: (
      <ul style={{fontFamily: '"Roboto", sans-serif'}}>
        <li>Conception, développement et maintenance d’applications informatiques.</li>
        <li>Compétences en algorithmique, bases de données, réseaux et systèmes.</li>
        <li>Programmation en Java, Python, C, SQL, HTML/CSS et JavaScript.</li>
        <li>Travail en équipe et gestion de projets logiciels.</li>
      </ul>
    ),
  },
  {
    date: '2016 - 2019',
    location: 'Lycée Polyvalent Déodat de Séverac',
    title: "Bac STI2D spécialité Système d'information et numérique ",
    content: (
      <ul style={{fontFamily: '"Roboto", sans-serif'}}>
        <li>Découverte et mise en œuvre de systèmes informatiques et électroniques.</li>
        <li>Apprentissage des bases de la programmation et des réseaux.</li>
        <li>Réalisation de projets intégrant matériel, capteurs et interfaces logicielles.</li>
        <li>Utilisation d’outils de modélisation et d’analyse de signaux.</li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Septembre 2021 - Juin 2022',
    location: 'Lycée International Victor Hugo',
    title: "Projet de fin d'année",
    content: (
      <ul style={{fontFamily: '"Roboto", sans-serif'}}>
        <li>Création de site web avec base de données afin de suivre l'utilisation et l'état d'imprimantes 3D dans un
        FabLab.</li>
        <li>Création de maquettes et d'un cahier des charges.</li>
        <li>Récupération des données de capteurs de température et d'humidité dans le FabLab vers le serveur. Affichage de
        ces données sur site web.</li>
        <li>Gestion de projet avec TimePerformance.</li>
      </ul>
    ),
  },
  {
    date: 'Juin 2021 - Septembre 2021',
    location: 'Maintronic',
    title: "Stagiaire en maintenance d'appareil électronique",
    content: (
      <ul style={{fontFamily: '"Roboto", sans-serif'}}>
        <li>Prise en charge et réparation d'imprimante à jet d'encre EPSON pour clients particulier et professionnel.</li>
        <li>Accueil des clients en agence.</li>
        <li>Changement d'OS de Windows à Linux.</li>
        <li>Remplacement de composant de PC portable.</li>
      </ul>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Entrez en contact.',
  description: (
  <div>
    {/*Actuellement à la recherche d'un nouvel emploi, je suis intéressée par les métiers support, de réseaux et de développement web.*/}
    Actuellement à la recherche d'un stage d'observation pour confirmer mon orientation vers le développement d'applications, je m'intéresse aux métiers liés au développement logiciel et à la conception d'applications.
    <ul >
      <li>Développeur concepteur d'application</li>
      <li>Conception et architecture d'applications</li>
      <li>Développeur Web Junior Front/Back-end</li>
    </ul> 
    <br/> N'hésitez pas à me contacter via le formulaire ou par mail.
  </div>
  ),
  items: [
    {
      type: ContactType.Email,
      text: 'DzawaEmile@gmail.com',
      href: 'mailto:DzawaEmile@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'Emispheres',
      href: 'https://github.com/Emispheres',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  /*{label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},*/
];
