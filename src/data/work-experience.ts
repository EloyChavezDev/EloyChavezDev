import type { WorkExperience } from "~/models/work-experience.ts";

export const workExperiences: WorkExperience[] = [
	{
		company: "Universidad Continente Americano",
		position: "Auxiliar de Sistemas",
		type: "Presencial",
		time: "full-time",
		period: [new Date(2020, 6), null],
		details: [
			"<b>Soporte técnico a usuarios:</b> Proporcioné soporte técnico eficiente a estudiantes, profesores y personal administrativo en el uso de software, hardware y sistemas de la universidad, resolviendo problemas técnicos de manera rápida y eficaz.",
			"Formé a los estudiantes en tecnologías base que son clave para el desarrollo web y móvil, incluyendo lenguajes como HTML5, CSS3, JavaScript.",
			"Facilitaba proyectos prácticos que involucraban el ciclo completo de desarrollo de aplicaciones web, desde la planificación y diseño hasta la implementación y despliegue en plataformas reales.",
			"Enseñé y supervisé el uso de herramientas colaborativas y de control de versiones como Git y GitHub.",
			"Implementé con éxito la enseñanza mediante el uso de Google Classroom",
			"Capacité a los estudiantes en estrategias para mejorar el rendimiento de sus aplicaciones web, incluyendo optimización de tiempos de carga, manejo eficiente de recursos y reducción de latencia.",
		],
		technologies: [
			"Google Chat",
			"Google Drive",
			"Javascript",
			"Github",
			"Netlify",
			"Astro",
			"Wordpress",
		]
	},
	{
		company: "Universidad Continente Americano",
		position: "Docente en Desarrollo de Aplicaciones Sobre Internet",
		type: "Presencial",
		time: "full-time",
		period: [new Date(2024, 1), new Date(2024, 4)],
		details: [
			"Actualice e implementé el plan de estudios sobre la materia Desarrollo de Aplicaciones, alineado con las tendencias tecnológicas y necesidades del mercado laboral.",
			"Formé a los estudiantes en tecnologías base que son clave para el desarrollo web y móvil, incluyendo lenguajes como HTML5, CSS3, JavaScript.",
			"Facilitaba proyectos prácticos que involucraban el ciclo completo de desarrollo de aplicaciones web, desde la planificación y diseño hasta la implementación y despliegue en plataformas reales.",
			"Enseñé y supervisé el uso de herramientas colaborativas y de control de versiones como Git y GitHub.",
			"Implementé con éxito la enseñanza mediante el uso de Google Classroom",
			"Capacité a los estudiantes en estrategias para mejorar el rendimiento de sus aplicaciones web, incluyendo optimización de tiempos de carga, manejo eficiente de recursos y reducción de latencia.",
		],
		technologies: [
			"HTML5",
			"CSS3",
			"Javascript",
			"Github",
			"Netlify",
			"Astro",
			"Wordpress",
		]
	},
	{
		company: "PT Healstation Indonesia",
		position: "Fullstack Web Developer",
		type: "remote",
		time: "freelance",
		period: [new Date(2023, 0), null],
		details: [
			"Building Content Management System for a South Korean mobile app that accommodates car, camp car, and camping site rent in one app",
			"Designed the database schema along with other developer",
			"Uses Next.js with Typescript, tRPC, Prisma, and Tailwind to maximise the development speed and user experience of the CMS",
			"Utilises MySQL as the database and MinIO/S3 as the object storage",
			"Using Docker for both local development setup and easy deployment solution"
		],
		technologies: [
			"typescript",
			"nextjs",
			"trpc",
			"mysql",
			"minio",
			"docker"
		]
	}
];