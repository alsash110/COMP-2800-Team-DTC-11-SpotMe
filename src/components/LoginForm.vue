<template>
  <div>
    <validation-observer ref="observer" v-slot="{ invalid }">
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

          <v-btn class="mr-4" type="submit" color="primary" :disabled="invalid">
            submit
          </v-btn>
          <v-btn color="success" to="/signup"> Signup </v-btn>
        </v-container>
      </form>
    </validation-observer>

    <v-footer
      height="80vw"
      class="blue-rectangle"
      color="primary lighten-3"
      fixed
      padless
    >
      <v-row justify="space-around" no-gutters>
        <v-btn to="/" rounded text color="white">Home</v-btn>
        <v-btn to="/support" rounded text color="white">Support</v-btn>
        <v-btn to="/about" rounded text color="white" depressed>About</v-btn>
        <v-col class="primary lighten-3 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>SpotMe</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import firebase from "firebase/app";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    password: "",
    email: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.$store.commit("setUid");
          this.$router.replace({ name: "mainsettings" });
        })
        .catch((err) => {
          this.error = err.message;
          alert(err.message);
        });
    },
  },
};
</script>

<style scoped>
#box {
  margin: auto;
  width: 80vw;
  justify-content: center;
}
</style>