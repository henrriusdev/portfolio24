<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		AppWindow,
		BrandAws,
		BrandGithub,
		BrandGolang,
		BrandHtml5,
		BrandLinkedin,
		BrandPython,
		BrandSupabase,
		BrandSvelte,
		BrandTailwind,
		BrandTypescript,
		BrandVue,
		Calendar,
		Coffee,
		HexagonLetterN,
		Leaf,
		Mail,
		Pepper,
		ServerBolt,
		Settings,
		Sql,
		SquareLetterN
	} from '@steeze-ui/tabler-icons';
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import avatarImg from '$lib/assets/avatar.jpg';

	let projects = [
		{
			title: 'AWS Products RestAPI',
			description: 'Back-End',
			content:
				'Project for test and learn the AWS Lambda, API Gateway and Cognito Services, using Python',
			technologies: [
				{ icon: BrandPython, color: '#55F', name: 'Python' },
				{ icon: BrandAws, color: '#ff572b', name: 'AWS' }
			],
			link: 'https://github.com/henrriusdev/aws-products-restapi'
		},
		{
			title: '7H Inversions',
			description: 'Multiplatform & Back-End',
			content:
				'Fictitious store, is a purchasing, sales and inventory manager. Built with JavaFX and Spring Boot to manage the H2 DB',
			technologies: [
				{ icon: Coffee, color: 'red', name: 'Java' },
				{ icon: AppWindow, color: 'purple', name: 'JavaFX' },
				{ icon: Leaf, color: '#5b5', name: 'SpringBoot' },
				{ icon: Sql, color: 'gray', name: 'H2 Database' }
			],
			link: 'https://github.com/henrriusdev/inversiones7h'
		},
		{
			title: 'Snippetbox',
			description: 'Back-End',
			content:
				"Simple, snippet blog, built on Go and HTML templates, as an learning of Alex Edwards's book named Let's Go!",
			technologies: [
				{ icon: BrandGolang, color: '#0AA', name: 'Golang' },
				{ icon: BrandHtml5, color: '#dd461a', name: 'HTML' },
				{ icon: Sql, color: 'neutral', name: 'MariaDB' }
			],
			link: 'https://github.com/henrriusdev/snippetbox'
		},
		{
			title: 'NestJS Bots',
			description: 'Telegram Bots',
			content:
				'Collection of Telegram Bots maded by a telegram group, built in NestJS with Supabase Postgres Database.',
				technologies: [
					{ icon: SquareLetterN, color: '#e0234e', name: 'NestJS' },
				{ icon: BrandSupabase, color: '#41cf91', name: 'Supabase' },
				{ icon: Sql, color: 'gray', name: 'Supabase PostgreSQL' }
			],
			link: 'https://gitlab.com/fcc-coffee/nestjs-bots'
		},
		{
			title: 'Quasar Form-Modal',
			description: 'Front-End Component',
			content:
			'Modal component with a customizable form, provide the formFields, formData and submit function. (In progress)',
			technologies: [
				{ icon: Settings, color: 'blue', name: 'Quasar Framework' },
				{ icon: BrandTailwind, color: '#0cc', name: 'Tailwind' }
			],
			link: 'https://github.com/henrriusdev/formodal'
		},
		{
			title: "Mock University",
			description: "Fullstack (WIP)",
			content: "University management system, built with Go, Svelte, and PostgreSql, with SSR thanks to gonertia (inertia.js golang adapter)",
			technologies: [
				{ icon: BrandGolang, color: '#0AA', name: 'Golang' },
				{ icon: BrandSvelte, color: '#ff3e00', name: 'Svelte' },
				{ icon: Sql, color: 'gray', name: 'PostgreSql' }
			],
			link: 'https://github.com/henrriusdev/mock_university'
		},
		{
			title: "Templdais",
			description: "UI Kit",
			content: "UI Kit of DaisyUI for Templ, a golang template engine",
			technologies: [
				{ icon: BrandGolang, color: '#0AA', name: 'Golang' },
				{ icon: BrandHtml5, color: '#dd461a', name: 'HTML' },
				{ icon: BrandTailwind, color: '#0cc', name: 'DaisyUI' }
			],
			link: "https://github.com/henrriusdev/templdais"
		},
		{
			title: "Templdais.io",
			description: "Fullstack",
			content: "Templdais.io is the documentation of the Templdais project, built with Templ and Go",
			technologies: [
				{ icon: BrandGolang, color: '#0AA', name: 'Golang' },
				{ icon: BrandHtml5, color: '#dd461a', name: 'HTML' },
				{ icon: BrandTailwind, color: '#0cc', name: 'Tailwind' }
			],
			link: "https://templdais-io.fly.dev/"
		}
	];
</script>

<div class="w-90% mx-auto px-5 sm:w-full lg:px-0">
	<div class="fixed right-5 top-3">
		<Sheet />
	</div>
	<section class="mx-auto mt-40 max-w-2xl">
		<h1 class="flex items-center gap-x-2 text-3xl font-bold md:text-5xl">
			<Avatar src={avatarImg} />Hey, I'm Henrry
		</h1>
		<p class="my-2 max-w-[45ch] text-base md:text-lg">
			<span class="text-red-500 dark:text-red-300">+1 year of experience.</span>
			<span>Fullstack developer and content creator.</span>
			<span class="text-blue-500 dark:text-blue-300"
				>Specialized in Back-End applications and PENS Stack</span
			>
		</p>
		<div class="flex flex-wrap justify-start gap-3">
			<Badge variant="default" class="bg-blue-400">PostgreSQL</Badge>
			<Badge variant="default" class="bg-slate-500">Express.js</Badge>
			<Badge variant="default" class="bg-red-400">NestJS</Badge>
			<Badge variant="default" class="bg-orange-500">SvelteKit</Badge>
		</div>
		<Separator class="my-3 max-w-xl" />
		<p class="my-1 mb-2 text-lg">Contact me</p>
		<div class="flex flex-wrap justify-start gap-2">
			<Badge variant="outline">
				<a
					class="flex gap-x-2 text-neutral-600 transition-colors hover:text-neutral-300"
					href="https://BrandGithub.com/henrriusdev"
					target="_blank"
				>
					<Icon src={BrandGithub} class="h-5 w-5" /> Github
				</a>
			</Badge>
			<Badge variant="outline">
				<a
					class="flex gap-x-2 text-neutral-600 transition-colors hover:text-neutral-300"
					href="https://Brandlinkedin.com/in/henrriusdevjr"
					target="_blank"
				>
					<Icon src={BrandLinkedin} class="h-5 w-5" /> Linkedin
				</a>
			</Badge>
			<Badge variant="outline">
				<a
					class="flex gap-x-2 text-neutral-600 transition-colors hover:text-neutral-300"
					href="mailto:henrrybrgt@gmail.com"
					target="_blank"
				>
					<Icon src={Mail} class="h-5 w-5" /> Mail
				</a>
			</Badge>
		</div>
	</section>
	<section class="mx-auto my-3 max-w-2xl">
		<h2 class="mx-auto max-w-2xl text-2xl md:text-3xl">Skills</h2>
		<div class="grid grid-cols-2 gap-2 p-2 sm:grid-cols-4 md:grid-cols-6">
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={BrandPython}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> Python
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={ServerBolt}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> FastAPI
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={BrandGolang}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> Go
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={BrandTypescript}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> TypeScript
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={BrandSvelte}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> SvelteKit
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={BrandVue}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> Vue
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={Settings}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> Quasar
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={HexagonLetterN}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> Node.js
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={SquareLetterN}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> NestJS
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon
					src={Coffee}
					class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20"
				/> Java
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Leaf} class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20" />
				Spring Boot
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Sql} class="h-16 w-16 text-neutral-500 dark:text-neutral-300 md:h-20 md:w-20" /> SQL
				& NoSQL
			</p>
		</div>
	</section>
	<section id="experience" class="mx-auto mt-10 max-w-2xl">
		<h2 class="text-2xl md:text-3xl">Experience</h2>

		<Timeline order="vertical" class="my-8 max-w-[65ch]">
			<TimelineItem title="Back-End developer at Sera">
				<svelte:fragment slot="icon">
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 ring-8 ring-white dark:bg-orange-600 dark:ring-gray-900"
					>
						<Icon src={Calendar} class="text-primary-600 dark:text-primary-400 h-4 w-4" />
					</span>
				</svelte:fragment>
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					Currently I am working as a Back-End developer at Sera, a fintech company, where I am developing a back-end in Golang. The project is a financial aid and analysis for manage your spendings and savings, and also have better control of your money and more credits for your credit card.
			</TimelineItem>
			<TimelineItem title="Developer at Linktic" date="December 5, 2022 - August 1, 2024">
				<svelte:fragment slot="icon">
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 ring-8 ring-white dark:bg-orange-600 dark:ring-gray-900"
					>
						<Icon src={Calendar} class="text-primary-600 dark:text-primary-400 h-4 w-4" />
					</span>
				</svelte:fragment>
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					I have participated in the development of virtual stores and management systems, some of
					the front-end technologies that I have used most are Vue, Quasar and Sveltekit.In
					addition, there have been certain challenges such as learning the services offered by AWS,
					being one of them: Lambda, Cognito, Api Gateway and Dynamodb, learning its use and how not
					to pass the Free Tier.
				</p>
			</TimelineItem>
			<TimelineItem
				title="Freelancer Fullstack developer"
				date="February 22, 2023 - December 5, 2023"
			>
				<svelte:fragment slot="icon">
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 ring-8 ring-white dark:bg-orange-600 dark:ring-gray-900"
					>
						<Icon src={Calendar} class="text-primary-600 dark:text-primary-400 h-4 w-4" />
					</span>
				</svelte:fragment>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					I developed two systems for a university in my country, the systems have PostgreSql as a
					database, a back-end in Flask, a Python frame of work, and in the front is Sveltekit in
					its first version.The systems are for university managing and another for notes.
				</p>
			</TimelineItem>
		</Timeline>
	</section>
	<section id="projects" class="mx-auto mt-10">
		<h2 class="mx-auto max-w-2xl text-2xl md:text-3xl">Projects</h2>
		<div class="mx-auto my-3 grid max-w-3xl gap-2 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
			{#each projects as { title, content, description, technologies, link }}
				<div class="h-full w-full">
					<ProjectCard {title} {content} {description} {technologies} {link} />
				</div>
			{/each}
		</div>
	</section>
	<section id="about" class="mx-auto mt-10 max-w-4xl">
		<h2 class="mx-auto max-w-2xl text-2xl md:text-3xl">About Me</h2>
		<div class="flex flex-col-reverse items-center justify-between p-2 md:flex-row">
			<p class="text-lg">
				I am a highly adaptable professional, with an exceptional ability to learn and master new
				technologies and work methods. I excel in dynamic and constantly changing environments,
				always keeping up to date with the latest industry trends. I possess strong teamwork and
				excellent communication skills, which are crucial to collaborate effectively on complex
				projects. My proactive approach and creative solutions to challenges make me a valuable
				asset to any team looking to innovate and advance their goals.
			</p>
			<img src={avatarImg} alt="Img" class="w-1/2 rounded-full p-5 md:w-1/3" />
		</div>
	</section>
</div>

<style>
	:global(ol li) {
		padding-left: 30px;
	}
</style>
