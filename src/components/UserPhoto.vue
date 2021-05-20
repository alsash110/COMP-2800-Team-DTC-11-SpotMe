<template>
    <div>
        <img :src="`${imgUrl}`" alt="UserPhoto">
    </div>
</template>

<script>
    export default {
        name: "UserPhoto",
        props: {
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

</style>