<template>
    <div class="login">
        <SignupHeader/>
        <SignupForm/>
    </div>
</template>

<script>
  import SignupForm from '../components/SignupForm'
  import SignupHeader from '../components/SignupHeader'
  export default {
    name: "Signup",
    components: {
        SignupForm,
        SignupHeader
    }
  }
</script>

<style>

    #login {
        align-content: center;
        width: 45vw;
        height: 45vw;
    }

</style>