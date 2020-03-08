<template>
<div class="w-full max-w-screen-xl mx-auto sm:px-6 sm:flex">
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,600&display=swap');

@import "tailwindcss/base";

@import "tailwindcss/components";

.router-link-exact-active {
  & svg {
    @apply text-white bg-gray-600 #{!important};
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

.text-xxs {
  font-size: 0.65rem;
}

.p-xs {
  padding: 0.15rem;
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
  padding-bottom: 0.1rem;
}

.form-select {
  background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  -webkit-print-color-adjust:exact;
  color-adjust:exact;
  background-repeat:no-repeat;
  background-color:#fff;
  border-color:#d2d6dc;
  border-width:1px;
  font-size:1rem;
  line-height:1.5;
  background-position:right .5rem center;
  background-size:1.5em 1.5em
}
</style>
