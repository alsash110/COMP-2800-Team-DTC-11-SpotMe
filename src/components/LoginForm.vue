<template>
  <form>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="nameErrors"
      :counter="10"
      label="Password"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
  </form>
</template>

<script>
 import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, password } from 'vuelidate/lib/validators'
    export default {
         
        name: "LoginForm",
        mixins: [validationMixin],
        validations: {
        password: { required },
        email: { required, email }
      
    },

    data: () => ({
      email: '',
      password: '',
    }),

    computed: {

      passwordErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },

      methods: {
      submit () {
        this.$v.$touch()
      }
    },

    }
    }
</script>