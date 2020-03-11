<template>
  <span class="rounded-full bg-white shadow group-hover:shadow-outline sm:h-8 sm:w-8 h-6 w-6 p-xs sm:p-1 mr-1 sm:p-1 sm:mr-2" id="track">
    <svg class="text-gray-400 rounded-full flex-shrink-0" stroke="currentColor" fill="none" viewBox="0 0 20 20">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" :d="path" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Track',
  props: {
    path: String
  }
}
</script>