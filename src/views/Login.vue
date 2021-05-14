<template>
    <div class="login">
        <h1>This is a login page</h1>
        <SignupHeader/>
        <div class="btns">
            <LoginForm loginWith="Google"/>
            <LoginForm loginWith="Facebook"/>
            <LoginForm loginWith="Email"/>
        <a href="./Signup"><b><i>Sign up for an account now!</i></b></a>
        </div>
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
    width: 45vw;
    height: 45vw;
    }
     .btns{
        display: block;
        padding: 5px 0px;
    margin-left: auto;
    margin-right: auto;
    width: 20vw;
    height: 20vw;
    }
</style>