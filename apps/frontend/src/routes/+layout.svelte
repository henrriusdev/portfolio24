<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	// Supports weights 100-900
	import '@fontsource-variable/urbanist';
</script>

<ModeWatcher />
<slot />

<style>
	:global(body) {
		font-family: 'Urbanist Variable', sans-serif;
	}
</style>
