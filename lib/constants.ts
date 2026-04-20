export const siteConfig = {
	name: 'Shreya Powar',
	description:
		'Portfolio of a Data Science student showcasing AI, web development, and real-world projects.',
	mainNav: [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Education', href: '/education' },
		{ title: 'Skills', href: '/skills' },
		{ title: 'Experience', href: '/experience' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Certificates', href: '/certificates' },
		{ title: 'Contact', href: '/contact' },
	],
	links: {
	github: 'https://github.com/Shreyapowar9961',
	linkedin: 'https://linkedin.com/in/shreya-powar-447007299',
	whatsapp: 'https://wa.me/919834460012',
	email: 'mailto:shreyapowar598@gmail.com',
	phone: 'tel:+919834460012',
},
};

/* ================= EXPERIENCE ================= */

export const experiences = [
	{
		title: 'Web Development Intern',
		company: 'Prodigy Infotech',
		location: 'Remote',
		startDate: 'Jul 2025',
		endDate: 'Aug 2025',
		description: [
			'Developed responsive web applications using HTML, CSS, and JavaScript',
			'Built interactive UI components to enhance user experience',
			'Collaborated with team members to complete project milestones',
		],
		technologies: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		title: 'C++ Programming Intern',
		company: 'CodSoft',
		location: 'Remote',
		startDate: 'Aug 2024',
		endDate: 'Sep 2024',
		description: [
			'Developed console-based applications like calculators and games',
			'Applied object-oriented programming concepts',
			'Improved debugging and problem-solving skills',
		],
		technologies: ['C++'],
	},
];

/* ================= PROJECTS ================= */

export const projects = [
	{
		title: 'AI-Based Leaf Disease Detection',
		description:
			'Developed a CNN-based model to detect plant leaf diseases with high accuracy using deep learning techniques.',
		image: 'https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg',
		tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
		link: '',
		repo: 'https://github.com/Shreyapowar9961/-Ai-based-leaf-diseases-detection-of-grape-wine-cnn-model-',
	},
	{
		title: 'Creative Cart – Artisan Marketplace',
		description:
			'Built a full-stack e-commerce platform for artisans with authentication, cart, wishlist, and checkout features.',
		image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
		tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
		link: '',
		repo: 'https://github.com/Shreyapowar9961/KreativeCartOnlineMarketplaceforLocalMaharashtrianArtisans-', // 👉 add real repo if available
	},
	{
		title: 'EduForum – Discussion Platform',
		description:
			'Developed a web platform for students to ask questions and collaborate through discussion threads.',
		image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
		tags: ['HTML', 'CSS', 'JavaScript'],
		link: '',
		repo: 'https://github.com/Miniprojectg17/Eduforum_Final', // 👉 update if needed
	},
	{
		title: 'CrowdCivic – Civic Issue Reporting',
		description:
			'Created a platform for reporting local issues with image upload and admin dashboard for tracking.',
		image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
		tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
		link: '',
		repo: 'https://github.com/Shreyapowar9961/Synergy_Circle', // 👉 update if needed
	},
	{
	title: 'Smart Document Classifier',
	description:
		'Built an AI-based document classification system using machine learning and FastAPI to automatically categorize documents into predefined classes.',
	image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
	tags: ['Python', 'Machine Learning', 'FastAPI', 'NLP'],
	link: '',
	repo: 'https://github.com/Shreyapowar9961/smart-doc-classifier'
},
{
  title: 'Mandi Connect – Agricultural Marketplace',
  description:
    'Developed a web-based platform to connect farmers directly with buyers, improving transparency, accessibility, and efficiency in agricultural trade. Built during HackAura 2026 with real-time product listings and communication features.',
  image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
  tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
  link: '',
  repo: 'https://github.com/Miniprojectg17/mandi-connect'
}
];
/* ================= EDUCATION ================= */

export const education = [
	{
		degree: 'Bachelor of Technology',
		field: 'Computer Science & Engineering (Data Science)',
		institution: 'Kolhapur Institute of Technology’s College of Engineering',
		location: 'Kolhapur, India',
		startDate: '2023',
		endDate: 'Present',
		gpa: '8.71/10',
		achievements: [
			'Maintaining a CGPA of 8.71',
			'Published research paper in IJSREM Journal (2025)',
			'Vice President – ACADS Student Departmental Club (2025–26)',
			'Design Associate – ACADS Student Departmental Club (2024–25)',
		],
	},
	{
		degree: 'Higher Secondary Certificate (HSC)',
		field: 'Science',
		institution: 'Chate Jr. College of Science',
		location: 'Kolhapur, India',
		startDate: '2021',
		endDate: '2023',
		gpa: '80%',
		achievements: [
			'Strong foundation in PCM subjects',
			'Developed analytical thinking skills',
		],
	},
	{
		degree: 'Secondary School Certificate (SSC)',
		field: 'General Education',
		institution: 'Holyden English Medium School',
		location: 'Kagal, India',
		startDate: '2020',
		endDate: '2021',
		gpa: '87%',
		achievements: [
			'Scored 87% in board exams',
			'Built strong academic fundamentals',
		],
	},
];

/* ================= CERTIFICATES ================= */

export const certificates = [
	{
		title: 'Generative AI Leader Track',
		issuer: 'Google Cloud Career Launchpad',
		date: '2025',
	},
	{
		title: ' Google DeepMind AI Research Foundations track ',
		issuer: 'Google Cloud Career Launchpad',
		date: '2026',
	},
	{
		title: 'Research Publication – Online Marketplace for Artisans',
		issuer: 'International Journal of Scientific Research in Engineering & Management (IJSREM)',
		date: 'May 2025',
	},
	{
		title: 'Second Runner-Up – Creative Cart Project',
		issuer: 'PBL Competition',
		date: '2025',
	},
	{
	title: 'HACKERA National Level Hackathon Participation',
	issuer: 'Sanjay Ghodawat University, Kolhapur',
	date: '2026',
},
	{
		title: 'HackAura 2026 – Mandi Connect Project',
		issuer: 'Somasekhar R. Kothiwale Institute of Technology',
		date: '2026',
	},
	{
		title: 'INVENTRA-2K25 National Hackathon',
		issuer: 'KLE College of Engineering & Technology, Chikodi',
		date: '2025',
	},
	{
		title: 'Bharatiya Antariksh Hackathon',
		issuer: 'ISRO Collaboration',
		date: '2025',
	},
];
/* ================= SKILLS ================= */

export const skills = [
	// Technical
	{ name: 'Machine Learning', level: 8, category: 'technical' },
	{ name: 'Data Analysis', level: 8, category: 'technical' },
	{ name: 'Deep Learning (CNN)', level: 7, category: 'technical' },

	// Programming
	{ name: 'Python', level: 8, category: 'software' },
	{ name: 'C++', level: 7, category: 'software' },
	{ name: 'Java', level: 7, category: 'software' },
	{ name: 'JavaScript', level: 8, category: 'software' },

	// Web
	{ name: 'HTML', level: 9, category: 'software' },
	{ name: 'CSS', level: 8, category: 'software' },
	{ name: 'Node.js', level: 7, category: 'software' },
	{ name: 'Firebase', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Teamwork', level: 9, category: 'soft' },
	{ name: 'Leadership', level: 8, category: 'soft' },
	{ name: 'Communication', level: 8, category: 'soft' },

	// Languages
	{ name: 'English', level: 9, category: 'language' },
	{ name: 'Hindi', level: 9, category: 'language' },
	{ name: 'Marathi', level: 10, category: 'language' },
];