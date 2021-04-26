<template>
<div class="antialiased text-gray-900 font-mono min-h-screen bg-white flex justify-center dark:bg-gray-900 dark:text-gray-100">
    <div class="w-full max-w-screen-md p-4 sm:p-8">
        <div class="mb-4">
            <Nav/>
        </div>

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
