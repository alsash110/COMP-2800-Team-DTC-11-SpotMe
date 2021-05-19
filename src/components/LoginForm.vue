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
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import * as firebase from "firebase/app"


  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
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
      submit () {
        this.$refs.observer.validate()
      }
    },
  }
</script>

<style scoped>

  #box{
    margin: auto;
    width: 90vw;
    justify-content: center;
      }
</style>