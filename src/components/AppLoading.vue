<template>
    <span></span>
</template>

<script>
export default {
    name: 'AppLoading'
}
</script>

<style scoped>
span {
    width: 18px;
    height: 18px;
    border: 4px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>