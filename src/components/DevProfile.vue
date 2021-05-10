<template>
    <div>
        <img :src="`${imgUrl}`" alt="DevPhoto">
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name: "DevProfile",
        props: {
            name: String,
            imgUrl: String
        }
    }
</script>

<style scoped>

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 9em;
        height: 9em;
        border-radius: 50%;
    }

    h2 {
        text-align: center;
    }
</style>