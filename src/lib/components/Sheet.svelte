<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Menu2 } from '@steeze-ui/tabler-icons';
	import ThemeSwitch from './ThemeSwitch.svelte';

	const links = [
		{ label: 'Skills', href: '#skills' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'About me', href: '#about' },
		{ label: 'Blog', href: 'https://publish.obsidian.md/henrriusdev' }
	];

	let open: boolean = false;
</script>

<div>
	<Sheet.Root {open}>
		<Sheet.Trigger asChild let:builder>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder={tooltipBuilder}>
					<Button builders={[builder, tooltipBuilder]} variant="outline" on:click={() => open = true}
						><Icon src={Menu2} class="h-5 w-5" /></Button
					>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Navigation Menu</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Sheet.Trigger>
		<Sheet.Content side="right">
			<Sheet.Header>
				<Sheet.Title>Navigation Menu</Sheet.Title>
        <Sheet.Description>
          <ThemeSwitch/>
        </Sheet.Description>
			</Sheet.Header>
			<div class="grid gap-4 py-4">
        {#each links as link}
				<a href={link.href} on:click={() => open = false} class="text-blue-500 transition duration-300 hover:text-blue-700">
					{link.label}
				</a>
        {/each}
			</div>
		</Sheet.Content>
	</Sheet.Root>
</div>
