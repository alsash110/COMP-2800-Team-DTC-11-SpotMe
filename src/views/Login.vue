<template>
    <div class="login">
        <SignupHeader/>
        <LoginForm/>
    </div>
</template>

<script>
  import LoginForm from '../components/LoginForm'
  import SignupHeader from '../components/SignupHeader'
  export default {
    name: "Login",
    components: {
        LoginForm,
        SignupHeader
    }
  }
</script>

<style>

    .login{
        display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    height: 100vw;
    }
</style>