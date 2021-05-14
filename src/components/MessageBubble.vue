<template>
<div class="container">
    <div v-for="(message, index) in messages" :key="index">
        <p
            v-if="message.user == user"
            class="user-message">
        hello
        {{message.content}}
        </p>
        <p
            v-else
            class="partner-message">
        {{message.content}}
        </p>
        <br>
    </div>
</div>
</template>

<script>
export default {
    props: {
        user: String,
        messages: Array,
        partner: String,
    },
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
.partner-message{
    background-color: #D8D8D8;
    max-width: 50%;
    padding: 3px 10px;
    display: inline-block;
    border-radius: 25px;
    float: left;
}

.user-message{
    background-color: #97CAFA;
    max-width: 50%;
    padding: 3px 10px;
    display: inline-block;
    border-radius: 25px;
    float: right;
}
</style>