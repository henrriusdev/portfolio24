<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";

  export let src: string
</script>
<Avatar.Root>
  <Avatar.Image {src} alt="@shadcn" />
  <Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>