<template>
    <div class="container">
        <div
            v-for="(img, index) in images"
            :key="index"
            class="image hover:cursor-pointer"
            @click="openModal(img)"
        >
            <img
                @loadstart=""
                :src="img.urls.raw" 
                :alt="img.alt_description"
                :height="img.height"
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

.image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-radius: 6px;
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