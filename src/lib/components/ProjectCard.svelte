<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Tooltip from "$lib/components/ui/tooltip";
	import { Icon } from "@steeze-ui/svelte-icon";
  import { BrandGithub, type IconSource } from "@steeze-ui/tabler-icons";
	import Badge from "./ui/badge/badge.svelte";
	import Button from "./ui/button/button.svelte";
  
  export let title: string;
  export let description: string;
  export let content: string;
  export let technologies: {icon: IconSource, color: string, name: string}[];
  export let link: string;
</script>
<Card.Root>
  <Card.Header>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{description}</Card.Description>
  </Card.Header>
  <Card.Content>
    <p class="text-sm">{content}</p>
  </Card.Content>
  <Card.Footer class="flex justify-between">
    <p class="flex justify-end">
      {#each technologies as tech}
      <Tooltip.Root openDelay="{100}">
				<Tooltip.Trigger asChild let:builder={tooltipBuilder}>
					<Button builders={[tooltipBuilder]} variant="link" class="cursor-default" size="icon">
            <Icon src={tech.icon} class="h-7 w-7 {`text-${tech.color}-600 dark:text-${tech.color}-400`}"/>
          </Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{tech.name}</p>
				</Tooltip.Content>
			</Tooltip.Root>
      
    {/each}
    </p>
    <Badge variant="outline">
      <a href="{link}" class="flex gap-x-1 items-center w-full dark:text-slate-500 text-slate-400 transition-colors hover:dark:text-slate-50 hover:text-slate-950">
        <Icon src={BrandGithub} class="h-5 w-5"/> Repo
      </a>
    </Badge>
  </Card.Footer>
</Card.Root>