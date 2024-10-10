<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full min-w-full items-end justify-center md:p-4 text-center sm:items-center p-2">
                <div class="relative md:w-[60%] transform rounded-lg text-left transition-all flex-col justify-center my-5">
                    <div class="flex justify-end mb-5">
                        <i class="bi bi-x-lg text-white hover:cursor-pointer close" @click="$emit('closeModal')"></i>
                    </div>
                    <div class="imageAndProp">
                        <img :src="imgDetails.urls.raw" :alt="imgDetails.alt_description">
                        <div class="bg-white p-6">
                            <div class="text-xl">{{ imgDetails.user.first_name }} {{ imgDetails.user.last_name }}</div>
                            <div class="text-gray-500">{{ imgDetails.user.location }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['imgDetails'])
defineEmits(['closeModal'])
</script>

<style scoped>
.close {
    position: absolute;
    top: -20px;
}

@media (min-width: 768px) {
    .close {
        right: -60px;
    }
}

.imageAndProp img {
    border-radius: 10px 10px 0 0;
}

.imageAndProp div {
    border-radius: 0 0 10px 10px;
}
</style>