<template>
    <div class="loader-container">
        <div
            v-for="i in 9"
            class="loader" :class="`${'loader-' + i}`"
        >
            <div class="loader-details w-full flex flex-col gap-3">
                <div class="w-1/2"></div>
                <div class="w-1/4"></div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.loader-container {
    columns: 1;
    gap: 30px;
    column-width: 300px;

}

// tablet view
@media (min-width: 670px) {
    .loader-container {
        columns: 2;
        column-width: 250px;
    }
}

// sm-desktop view
@media (min-width: 1000px) {
    .loader-container {
        columns: 3;
        column-width: 250px;
    }
}

// lg-desktop-view
@media (min-width: 1200px) {
    .loader-container {
        columns: 3;
        column-width: 330px;
    }
}

.loader {
    /* height: auto; */
    margin-bottom: 8px;
    background: var(--skeleton-loader-bg);
    height: 200px;
    border-radius: 10px;
    position: relative;
    animation: shimmer 1.5s infinite;
    overflow-x: hidden;
}

.loader-details {
    position: absolute;
    bottom: 20px;
    padding-left: 15px;
}

.loader-details  div {
    background-color: var(--skeleton-loader-dark);
    height: 10px;
    border-radius: 10px;
}


@keyframes shimmer {
    0% {
        background-color: var(--skeleton-loader-bg);
    }
    50% {
        background-color: #ececec;
    }
    100% {
        background-color: var(--skeleton-loader-bg);
    }
}

@for $i from 0 through 9 {
  .loader-#{$i}{
    
    @if $i % 2 != 0 {
      height: 300px;
    }
  }
}
</style>