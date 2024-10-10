<template>
    <div class="relative flex flex-col min-h-fit">
        <div class="p-6 py-20 lg:p-24 lg:px-36 search-section">
            <div>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-6">
                        <span class="text-black sm:text-sm z-90">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                    <input
                        v-model="searchQuery"
                        @keyup.enter="search"
                        type="text"
                        class="block w-full h-14 rounded border-1 py-1.5 pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black sm:text-sm sm:leading-6"
                        placeholder="Search for photo"
                    />
                </div>
            </div>
        </div>
        <div class="w-full images-container">
            <div class="images ">
                <SkeletonLoader v-if="!initialImageLoad"/>
                <div v-else>
                    <ImagesGrid
                      :images="images"
                    />

                    <div class="w-full flex justify-center" v-if="images.length > 0">
                        <button class="w-fit mt-10 px-10 py-4 rounded flex" @click="loadMore">
                            Load more
                            <SpinnerLoader v-if="loading"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import ImagesGrid from '@/components/ImagesGrid.vue';
import { onMounted, ref } from 'vue';
import api from '@/api'
import router from '@/router';
import SpinnerLoader from '@/components/SpinnerLoader.vue';

let { getInitialPhotos } = api

let images = ref([])
let initialImageLoad = ref(false)

let searchQuery = ref('')
let page = ref(1)
let loading = ref(false)

onMounted(async () => {
    let imgReq = await getInitialPhotos()
    
    for (const image of imgReq.data.results) {
        images.value.push(image)
    }
    initialImageLoad.value = true
})

function search() {
    router.push(`/search?query=${searchQuery.value}`)
}

async function loadMore() {
    loading.value = true
    page.value++ // paginate for the next batch of images

    let imgReq = await getInitialPhotos(page.value)
    
    for (const image of imgReq.data.results) {
        images.value.push(image)
    }

    loading.value = false
}
</script>

<style scoped>
.conntainer {
    position: relative;
}

.images-container {
    position: relative;
    top: -50px;
    display: flex;
    justify-content: center;
}

button {
    background-color: var(--skeleton-loader-dark);
}
</style>
