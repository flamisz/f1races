<template>
<div class="antialiased text-gray-900 font-mono min-h-screen bg-white flex justify-center dark:bg-gray-900 dark:text-gray-100">
    <div class="w-full max-w-screen-md p-4 sm:p-8">
        <div class="mb-4">
            <Nav/>
        </div>

        <!-- content -->
        <router-view/>

        <div class="mt-8 text-gray-400 flex justify-between text-sm">
            <div class="inline-flex items-center">
                made by
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                </svg>
                <a href="https://twitter.com/flamisz" class="mr-2">tw: @flamisz</a>
                <a href="https://github.com/flamisz">gh: @flamisz</a>
            </div>
        </div>
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
