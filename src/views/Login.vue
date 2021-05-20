<template>
    <div class="login">
        <SignupHeader/>
        <LoginForm/>
    </div>
</template>

<script>
  import LoginForm from '../components/LoginForm'
  import SignupHeader from '../components/SignupHeader'
//   import SignupFooter from '../components/SignupFooter'
  export default {
    name: "Login",
    components: {
        LoginForm,
        SignupHeader 
        // SignupFooter
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