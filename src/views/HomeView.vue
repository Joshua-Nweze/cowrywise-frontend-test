<template>
    <div class="min-h-screen relative flex flex-col">
        <div class="p-24 px-36 search-section">
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-6">
                        <span class="text-black sm:text-sm">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        class="block w-full h-14 rounded border-1 py-1.5 pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black sm:text-sm sm:leading-6"
                        placeholder="Search for photo"
                    />
                </div>
            </div>
        </div>
        <div class=" w-full images-container absolute">
            <div class="images">
                <SkeletonLoader />
            </div>
        </div>
    </div>
</template>

<script setup>
import SkeletonLoader from '@/components/SkeletonLoader.vue'
</script>

<style scoped>
.conntainer {
    position: relative;
}

.images {
    position: relative; /* Optional if absolute is not working */
}

.images-container {
    position: absolute;
    top: 200px;
    /* inset: 0; This sets top, right, bottom, and left to 0 */
    display: flex;
    justify-content: center;
}
</style>
