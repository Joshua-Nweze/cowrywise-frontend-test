<template>
    <div class="loader-container">
        <div
            v-for="i in 9"
            class="loader" :class="`${'loader-' + i}`">
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
    columns: 3;
    /* margin: 20px; */
  /* display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-flow: row;
  grid-template-rows: repeat(3);
  grid-auto-rows: 5px; */
  gap: 30px;
}

.loader {
    width: 330px;
    /* height: auto; */
    margin-bottom: 8px;
    background: var(--skeleton-loader-bg);
    height: 200px;
    border-radius: 10px;
    position: relative;
    animation: shimmer 1.5s infinite;
}

.loader-details {
    position: absolute;
    bottom: 20px;
    padding-left: 15px;
    /* animation: shimmer 1.5s infinite; */

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