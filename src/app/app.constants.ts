import { Project } from "./app.models";

export const display_name = 'Abdullah Rafat';
export const username = 'abdullah.rafat';
export const jobTitle = 'Architectural Engineer';
export const user_bio = `Creative and detail-driven Architect with experience in designing functional and sustainable spaces. Skilled in
concept development, technical drawings, and project coordination. Proficient in AutoCAD, 3Ds MAX,
V-Ray , Adobe Photoshop and design visualization tools. Strong team player with a focus on delivering
innovative, client-centered solutions`;


export const email = 'abdullahelmejahed@gmail.com';
export const linkedinUrl = 'https://www.linkedin.com/in/abdullah-refat-738363351';

export const resumePath = 'assets/AbdullahRafatCV.pdf';
export const avatarPath = 'assets/engineer-icon.png';

export const projects: Project[] = [
  {
    name: 'Modern Bedroom Design | 3D Shots',
    description: 'A contemporary bedroom design featuring minimalist furniture, warm lighting, and smart storage solutions. This 3D visualization showcases a harmonious blend of functionality and modern aesthetics.',
    imageUrl: 'assets/projects/modern_bedroom_design.jpg',
    pdfUrl: 'assets/projects/modern_bedroom_design.pdf',
    year: 2025
  },
  {
    name: 'Modern Villa Design | 3D Shots',
    description: 'An elegant luxury villa concept with floor-to-ceiling windows, open living spaces, and seamless indoor-outdoor integration. The 3D renderings highlight the clean lines and premium materials of this architectural masterpiece.',
    imageUrl: 'assets/projects/modern_villa_design.jpg',
    pdfUrl: 'assets/projects/modern_villa_design.pdf',
    year: 2025
  },
  {
    name: 'Modern Living Design | 3D Shots',
    description: 'A sophisticated living room design featuring a neutral color palette, statement lighting, and custom-built entertainment units. The 3D visualization demonstrates optimal space planning and contemporary styling.',
    imageUrl: 'assets/projects/modern_living_room_design.jpg',
    pdfUrl: 'assets/projects/modern_living_room_design.pdf',
    year: 2025
  },
  {
    name: 'Mall Building Design | Working Drawings',
    description: 'Comprehensive architectural plans for a multi-level shopping complex, including structural details, circulation patterns, and facade development. These technical drawings ensure precise execution of the commercial design.',
    imageUrl: 'assets/projects/mall_building.png',
    pdfUrl: 'assets/projects/mall_building.pdf',
    year: 2024
  },
  {
    name: 'Care Center for Breadwinner Women | Graduation Project',
    description: 'A supportive care center designed to assist working mothers and breadwinner women, featuring childcare facilities, workspaces, and wellness areas. This project emphasizes accessibility, community support, and a nurturing environment to help balance work and family responsibilities.',
    imageUrl: 'assets/projects/gp.jpg',
    pdfUrl: 'assets/projects/gp.pdf',
    year: 2024
  },
];
