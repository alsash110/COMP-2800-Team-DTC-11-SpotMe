<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

     <v-text-field
      v-model="password"
      :rules="nameRules"
      label="Password"
      required
    ></v-text-field>

    <v-btn
    :disabled="!valid"
      color="primary"
      class="mr-4"
      @click="validate"
      to="/displaymatches"
    >
      Login
    </v-btn>

    <v-btn
      color="teal"
      class="mr-4"
      to="/Signup"
    >
      Signup
    </v-btn>

  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      password: '',
      nameRules: [
        v => !!v || 'Password is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      }
    },
  }
</script>
