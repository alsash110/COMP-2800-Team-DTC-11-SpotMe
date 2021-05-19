<template>
<div>
  
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">

<v-container fluid id="box">
<validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Password"
        rules="required"
      >
        <v-text-field
          v-model="password"
          type="password"
          :error-messages="errors"
          label="Password"
          required
        ></v-text-field>
      </validation-provider>
      
            <v-btn
        class="mr-4"
        type="submit"
        color="primary"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn
      color="success"
      to="/signup"

      >
        Signup
      </v-btn>
   </v-container >
    </form>
    
 </validation-observer>
 
<v-footer height="80px" class="blue-rectangle" color="#97CAFA" fixed>
        </v-footer>
          </div>

</template>

<script>
  import { required, email } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import firebase from "firebase/app"


  
  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      password: '',
      email: '',
    }),

    methods: {
     async submit () {
        this.$refs.observer.validate()
        try{
          const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
          console.log(val);
          this.$router.push({name:"mainsettings"});
        }
        catch(err){
          console.log(err);
        }
        
      }
    },
  }
</script>

<style scoped>

  #box{
    margin: auto;
    width: 80vw;
    justify-content: center;
      }
</style>