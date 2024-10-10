<template>
    <div class="image-container">
        <div
            v-for="(img, index) in images"
            :key="index"
            class="image hover:cursor-pointer"
            @click="openModal(img)"
            :class="`h-[${img.height}px]`"
        >
            <img
                @loadstart="loadingImage(index)"
                :src="img.urls.raw" 
                :alt="img.alt_description"
                :height="img.height"
                loading="lazy"
            >
            <div class="image-details text-white w-full flex flex-col gap-3">
                <div class="text-xl"> {{ img.user.first_name }} {{ img.user.last_name }} </div>
                <div> {{ img.user.location }} </div>
            </div>
        </div>

        <transition name="fade">
            <Modal 
                v-if="showImageModal"
                :imgDetails="selectedImage"
                @closeModal="closeModal"
            />
        </transition>

    </div>

</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

defineProps(['images'])

let showImageModal = ref(false)

const selectedImage = ref(null);

function openModal(image) {
  selectedImage.value = image;
  showImageModal.value = true;
}

function closeModal() {
    selectedImage.value = null
    showImageModal.value = false
}
</script>

<style lang="scss" scoped>
.image-container {
    columns: 1;
    gap: 30px;
    column-width: 300px;
    margin: 0 40px;
}

// tablet view
@media (min-width: 600px) {
    .image-container {
        columns: 2;
        column-width: 200px;
        margin: 0;
    }

    .image {
        width: 230px;
    }
}

// sm-desktop view
@media (min-width: 1000px) {
    .image-container {
        columns: 3;
        margin: 0;
        column-width: 250px;
    }

    .image {
        width: 250px;
    }
}

// lg-desktop-view
@media (min-width: 1200px) {
    .image-container {
        columns: 3;
        margin: 0;
        column-width: 330px;
    }

    .image {
        width: 330px;
    }
}

img {
    height: 100%;
    border-radius: 10px;
}
    
.image {
    margin-bottom: 8px;
    background: var(--skeleton-loader-bg);
    border-radius: 10px;
    position: relative;
}

.image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 10px;
}

.image-details {
    position: absolute;
    bottom: 20px;
    padding: 0 15px;
    z-index: 2;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>