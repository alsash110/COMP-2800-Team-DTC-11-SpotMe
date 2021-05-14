<template>
    <div class="login">
        <br/>
        <SignupHeader/>
            <LoginForm/>
        <a href="../signup"><b><i>Sign up for an account now!</i></b></a>
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
    width: 80vw;
    height: 80vw;
    }
</style>