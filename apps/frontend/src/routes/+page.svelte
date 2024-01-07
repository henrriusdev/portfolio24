<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Sheet from '$lib/components/Sheet.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		AppWindow,
		BrandAngular,
		BrandAws,
		BrandGithub,
		BrandGolang,
		BrandHtml5,
		BrandJavascript,
		BrandLinkedin,
		BrandMongodb,
		BrandNextjs,
		BrandPython,
		BrandSupabase,
		BrandSvelte,
		BrandTailwind,
		BrandTypescript,
		BrandVue,
		Calendar,
		Coffee,
		HexagonLetterC,
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

	let projects = [
		{
			title: 'AWS Products RestAPI',
			description: 'Back-End',
			content:
				'Project for test and learn the AWS Lambda, API Gateway and Cognito Services, using Python',
			technologies: [
				{ icon: BrandPython, color: 'blue', name: 'Python' },
				{ icon: BrandAws, color: 'orange', name: 'AWS' }
			],
			link: 'https://github.com/hbourgeot/aws-products-restapi'
		},
		{
			title: '7H Inversions',
			description: 'Multiplatform & Back-End',
			content:
				'Fictitious store, is a purchasing, sales and inventory manager. Built with JavaFX and Spring Boot to manage the H2 DB',
			technologies: [
				{ icon: Coffee, color: 'red', name: 'Java' },
				{ icon: AppWindow, color: 'purple', name: 'JavaFX' },
				{ icon: Leaf, color: 'green', name: 'SpringBoot' },
				{ icon: Sql, color: 'neutral', name: 'H2 Database' }
			],
			link: 'https://github.com/hbourgeot/inversiones7h'
		},
		{
			title: 'IUTEPAS Admin System',
			description: 'Front-End',
			content:
				"Administrative System for the IUTEPAS University, made with SvelteKit, using the UI 'Skeleton '",
			technologies: [{ icon: BrandSvelte, color: 'orange', name: 'SvelteKit' }],
			link: 'https://github.com/hbourgeot/iutepas'
		},
		{
			title: 'IUTEPAS Notes System',
			description: 'Front-End',
			content:
				'System for manage IUTEPAS students grades and courses. Roles: Student, Teacher, Coordinator and Study Control',
			technologies: [{ icon: BrandSvelte, color: 'orange', name: 'SvelteKit' }],
			link: 'https://github.com/hbourgeot/pasnotes'
		},
		{
			title: 'IUTEPAS Back-End',
			description: 'Back-End',
			content:
				'Storess the information for both systems in the front-end. Built with Flask and PostgreSQL',
			technologies: [
				{ icon: BrandPython, color: 'blue', name: 'Python' },
				{ icon: Pepper, color: 'gray', name: 'Flask' },
				{ icon: Sql, color: 'neutral', name: 'PostgresSQL' }
			],
			link: 'https://github.com/hbourgeot/pasdmin'
		},
		{
			title: 'Snippetbox',
			description: 'Back-End',
			content:
				"Simple, snippet blog, built on Go and HTML templates, as an learning of Alex Edwards's book named Let's Go!",
			technologies: [
				{ icon: BrandGolang, color: 'blue', name: 'Golang' },
				{ icon: BrandHtml5, color: 'orange', name: 'HTML' },
				{ icon: Sql, color: 'neutral', name: 'MariaDB' }
			],
			link: 'https://github.com/hbourgeot/snippetbox'
		},
		{
			title: 'NestJS Bots',
			description: 'Telegram Bots',
			content:
				'Collection of Telegram Bots maded by a telegram group, built in NestJS with Supabase Postgres Database.',
			technologies: [
				{ icon: SquareLetterN, color: 'pink', name: 'NestJS' },
				{ icon: BrandSupabase, color: 'orange', name: 'Supabase' },
				{ icon: Sql, color: 'neutral', name: 'Supabase PostgreSQL' }
			],
			link: 'https://gitlab.com/fcc-coffee/nestjs-bots'
		},
		{
			title: 'Quasar Form-Modal',
			description: 'Front-End Component',
			content: 'Modal component with a customizable form, provide the formFields, formData and submit function. (In progress)',
			technologies: [
				{ icon: Settings, color: 'blue', name: 'Quasar Framework' },
				{ icon: BrandTailwind, color: 'teal', name: 'Tailwind' }
			],
			link: 'https://github.com/hbourgeot/formodal'
		}
	];
</script>

<div class="w-90% mx-auto sm:w-full px-5 lg:px-0">
	<div class="fixed right-5 top-3">
		<Sheet />
	</div>
	<section class="mx-auto mt-40 max-w-2xl">
		<h1 class="text-3xl md:text-5xl font-bold">Hey, I'm Henrry</h1>
		<p class="my-2 max-w-[45ch] text-base md:text-lg">
			<span class="text-red-500 dark:text-red-300">+1 year of experience.</span>
			<span>Fullstack developer and content creator.</span>
			<span class="text-blue-500 dark:text-blue-300"
				>Specialized in Back-End applications and PENS Stack</span
			>
		</p>
		<div class="flex justify-start gap-3 flex-wrap">
			<Badge variant="default" class="bg-blue-400">PostgreSQL</Badge>
			<Badge variant="default" class="bg-slate-500">Express.js</Badge>
			<Badge variant="default" class="bg-red-400">NestJS</Badge>
			<Badge variant="default" class="bg-orange-500">SvelteKit</Badge>
		</div>
		<Separator class="my-3 max-w-xl" />
		<p class="my-1 mb-2 text-lg">Contact me</p>
		<div class="flex justify-start flex-wrap gap-2">
			<Badge variant="outline">
				<a
					class="flex gap-x-2 text-neutral-600 transition-colors hover:text-neutral-300"
					href="https://BrandGithub.com/hbourgeot"
					target="_blank"
				>
					<Icon src={BrandGithub} class="h-5 w-5" /> Github
				</a>
			</Badge>
			<Badge variant="outline">
				<a
					class="flex gap-x-2 text-neutral-600 transition-colors hover:text-neutral-300"
					href="https://Brandlinkedin.com/in/hbourgeotjr"
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
	<section class="mx-auto my-3 max-w-2xl lg:max-w-5xl">
		<h2 class="text-2xl max-w-2xl mx-auto">Skills</h2>
		<div class="p-2 grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandPython} class="h-20 w-20"/> Python
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Pepper} class="h-20 w-20"/> Flask
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={ServerBolt} class="h-20 w-20"/> FastAPI
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandGolang} class="h-20 w-20"/> Go
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandTypescript} class="h-20 w-20"/> TypeScript
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandJavascript} class="h-20 w-20"/> JavaScript
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandSvelte} class="h-20 w-20"/> SvelteKit
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandVue} class="h-20 w-20"/> Vue
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Settings} class="h-20 w-20"/> Quasar
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandNextjs} class="h-20 w-20"/> Next.js
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={HexagonLetterN} class="h-20 w-20"/> Node.js
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={SquareLetterN} class="h-20 w-20"/> NestJS
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Coffee} class="h-20 w-20"/> Java
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={AppWindow} class="h-20 w-20"/> JavaFX
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Leaf} class="h-20 w-20"/> Spring Boot
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={HexagonLetterC} class="h-20 w-20"/> C++
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Sql} class="h-20 w-20"/> PL/PGSQL
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={Sql} class="h-20 w-20"/> SQL
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandMongodb} class="h-20 w-20"/> NoSQL
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandAngular} class="h-20 w-20"/> Angular
			</p>
			<p class="flex flex-col items-center justify-center">
				<Icon src={BrandSupabase} class="h-20 w-20"/> Supabase
			</p>
		</div>
	</section>
	<section id="experience" class="mx-auto mt-10 max-w-2xl">
		<h2 class="text-2xl">Experience</h2>

		<Timeline order="vertical" class="my-8 max-w-[65ch]">
			<TimelineItem title="Developer at Linktic" date="December 5, 2022 - Current">
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
		<h2 class="text-2xl max-w-2xl mx-auto">Projects</h2>
		<div class="my-3 max-w-3xl lg:max-w-5xl mx-auto grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as { title, content, description, technologies, link }}
				<div class="w-full h-full">
					<ProjectCard {title} {content} {description} {technologies} {link} />
				</div>
			{/each}
		</div>
	</section>
	<section id="experience" class="mx-auto mt-10 max-w-xl">
		<h2 class="text-2xl">About Me</h2>
	</section>
</div>
