<template>
    <div class="container">
        <div
            v-for="img in images"
            class="image"
        >
            <img
                @load="imgLoad"
                :src="img.urls.raw" 
                :alt="img.alt_description" 
                :height="img.height"
            >
            <div class="image-details text-white w-full flex flex-col gap-3">
                <div class="text-xl"> {{ img.user.first_name }} {{ img.user.last_name }} </div>
                <div> {{ img.user.location }} </div>
            </div>
        </div>
    </div>

</template>

<script setup>
defineProps(['images'])

function imgLoad() {
    console.log('loaded')
}
</script>

<style lang="scss" scoped>
.container {
    columns: 3;
    gap: 30px;
}

img {
    height: 100%;
    width: 100%;
}
    
.image {
    width: 330px;
    margin-bottom: 8px;
    background: var(--skeleton-loader-bg);
    border-radius: 10px;
    position: relative;
}

.image::after{
    background: linear-gradient(to top, #09203f 0%, #537895 100%);

}

.image-details {
    position: absolute;
    bottom: 20px;
    padding: 0 15px;
}
</style>