<template>
<div class="antialiased text-gray-900 font-mono font-bold min-h-screen bg-white flex justify-center">
    <div class="w-full max-w-screen-md p-8 m-4 bg-white border border-gray-300 overflow-hiddern rounded-lg shadow-lg">
        <Nav/>

        <!-- content -->
        <router-view/>
    </div>
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
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
