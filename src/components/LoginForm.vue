<template>
<div>
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
      :type="passwor"
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
<<<<<<< HEAD
  <v-footer color="primary lighten-3" padless fixed >
            <v-row justify="center" no-gutters>
              <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                {{ link }}
              </v-btn>
            <v-col class="primary lighten-3 py-4 text-center white--text" cols="12">
              {{ new Date().getFullYear() }} — <strong>SpotMe</strong>
            </v-col>
            </v-row>
    </v-footer>
    </div>
=======

   <v-footer height="80px" class="blue-rectangle" color="#97CAFA" fixed>
        </v-footer>
          </div>
>>>>>>> 16d19d86c329b967081f3922e3f1b5fb55326b80
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
