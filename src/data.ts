// export const PORTRAIT =
//   'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

 export const PORTRAIT = '/mee.png';
export const ABOUT_BASE =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/';

export const GIFS: string[] = [
  '/marquee/1.png',
  '/marquee/2.png',
  '/marquee/3.png',
  '/marquee/4.png',
  '/marquee/5.png',
  '/marquee/6.png',
  '/marquee/7.png',
  '/marquee/8.png',
  '/marquee/9.png',
  '/marquee/10.png',
  '/marquee/11.png',
  '/marquee/12.png',
];

const cf = (id: string) =>
  `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_${id}.png&w=1280&q=85`;

export interface Project {
  number: string;
  category: string;
  name: string;
  liveUrl: string;
  images: [string, string, string];
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Full-Stack · MERN',
    name: 'Blogify — YouTube Blog',
    liveUrl: 'https://youtube-blog-cyan.vercel.app/', 
    images: ['/projects/project1-a.png', '/projects/project1-b.png', '/projects/project1-b.png'],
  },
  {
    number: '02',
    category: 'Frontend · React',
    name: 'Prepify — Interview Prep',
    liveUrl: 'https://prepifyy.vercel.app/', 
    images: ['/projects/project2-a.png', '/projects/project2-b.png', '/projects/project2-c.png'],
  },
  {
  number: '03',
  category: 'Frontend · JavaScript · API',
  name: 'GitHub User Finder',
  liveUrl: 'YOUR_GITHUB_USER_FINDER_LIVE_URL',
  images: ['/projects/project3-a.png', '/projects/project3-b.png', '/projects/project3-c.png'],
},
{
  number: '04',
  category: 'Frontend · JavaScript',
  name: 'Password Generator',
  liveUrl: 'YOUR_PASSWORD_GENERATOR_LIVE_URL',
  images: ['/projects/project4-a.png', '/projects/project4-a.png', '/projects/project4-a.png'],
},
];

export const SERVICES: { number: string; name: string; description: string }[] = [
  { number: '01', name: 'Frontend Development', description: 'Responsive, interactive interfaces built with React.js, Vite, Tailwind CSS, Context API, Material UI, and Chart.js.' },
  { number: '02', name: 'Backend & APIs', description: 'RESTful APIs with Node.js and Express, secured with JWT authentication, bcrypt hashing, and protected routes.' },
  { number: '03', name: 'Databases', description: 'Designing and querying data with MongoDB Atlas, Mongoose models, MySQL, and HNSW vector storage.' },
  { number: '04', name: 'Programming & CS Core', description: 'Java and JavaScript (ES6+) backed by a strong base in DSA, OOP, DBMS, and Software Engineering.' },
  { number: '05', name: 'Deployment & Tools', description: 'Shipping apps on Vercel and Render with Git, GitHub, Postman, and clean environment-based configuration.' },
];

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  description: string;
}

export const EDUCATION: EducationItem[] = [
  {
    year: '2024 – 2028',
    degree: 'B.E. in Computer Engineering',
    institution: 'Government Engineering College, Modasa',
    description: 'CGPA 8.58 / 10. Strong foundation in Data Structures and Algorithms, OOP, DBMS, and Software Engineering, while building full-stack projects.',
  },
  {
    year: '2022 – 2024',
    degree: 'Higher Secondary Certificate — Science',
    institution: 'Swami Vivekanand English Medium School, Bharuch',
    description: 'Completed with 73.56%, with a growing interest in computers and programming.',
  },
];
