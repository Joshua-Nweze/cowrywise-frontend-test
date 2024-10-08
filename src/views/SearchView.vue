<template>
    <div class="relative flex flex-col min-h-fit">
        <div class="p-24 px-36 search-section">
            <div>
                <span v-if="!initialImageLoad">Searching for </span>
                <span v-else>
                    <span v-if="images.length > 0">Search Results for </span>
                    <span v-else>No Reselts to show for </span>
                </span>
                <span>"{{ $route.query.query }}"</span>
            </div>
        </div>
        <div class=" w-full images-container">
            <div class="images">
                <SkeletonLoader v-if="!initialImageLoad"/>
                <div v-else class="w-full">
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
import { useRoute } from 'vue-router';
import SpinnerLoader from '@/components/SpinnerLoader.vue';

let { searchPhotos } = api

let images = ref([])
let initialImageLoad = ref(false)

let query = useRoute().query.query
let loading = ref(false)
let page = ref(1)

onMounted(async () => {
    
    let imgReq = await searchPhotos(query.toString(), page.value)
    
    for (const image of imgReq.data.results) {
        images.value.push(image)
    }
    console.log(images.value)

    initialImageLoad.value = true
})

async function loadMore() {
    loading.value = true
    page.value++ // paginate for the next batch of images

    let imgReq = await searchPhotos(query.toString(), page.value)
    
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
