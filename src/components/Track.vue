<template>
    <!-- flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150 -->
	<svg class="h-7 w-7 p-px mr-3 text-gray-500 rounded-full bg-white shadow-sm group-hover:shadow-outline" stroke="currentColor" fill="none" viewBox="0 0 20 20">
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