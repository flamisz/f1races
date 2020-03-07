<template>
	<svg class="sm:h-8 sm:w-8 h-6 w-6 p-xs sm:p-1 mr-1 sm:p-1 sm:mr-2 text-gray-400 rounded-full bg-white shadow group-hover:shadow-outline flex-shrink-0" stroke="currentColor" fill="none" viewBox="0 0 20 20">
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