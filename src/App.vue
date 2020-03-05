<template>
<div class="w-full max-w-screen-xl mx-auto px-6 flex">
  <Nav/>
  
  <!-- content -->
  <router-view/>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,500,600&display=swap');

@import "tailwindcss/base";

@import "tailwindcss/components";

.router-link-exact-active {
  @apply font-medium text-green-500 #{!important};
  & svg {
    @apply text-gray-500 #{!important};
  }
}

@import "tailwindcss/utilities";

@-webkit-keyframes spin {
 0% {
  -webkit-transform:rotate(0deg);
  transform:rotate(0deg)
 }
 to {
  -webkit-transform:rotate(1turn);
  transform:rotate(1turn)
 }
}

@keyframes spin {
 0% {
  -webkit-transform:rotate(0deg);
  transform:rotate(0deg)
 }
 to {
  -webkit-transform:rotate(1turn);
  transform:rotate(1turn)
 }
}

.spin {
 -webkit-animation:spin 2s linear infinite;
 animation:spin 2s linear infinite
}

.highlight {
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(-100deg,rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 0.7) 95%, rgba(255, 224, 0, 0.1));
}

.sketch-underline {
  background: url(data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTE5IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCAxMTkgNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTE3LjQzNCAzLjg1M0M1OS4wMjcgNS45MzMgODQuNzg0LTIuNDYgMS41NjYgMy40MzYiIHN0cm9rZT0iI2ZjMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc%2BCg%3D%3D) bottom left/100% 0.5rem no-repeat;
  padding-bottom: 0.1rem; }
</style>
