<template>
    <!-- flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150 -->
	<svg class="h-7 w-7 p-px mr-3 text-green-100 rounded-full bg-green-500" stroke="currentColor" fill="none" viewBox="0 0 20 20">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" :d="path" />
  </svg>
</template>

<script>
export default {
  name: 'Track',
  props: {
    path: String
  }
}
</script>