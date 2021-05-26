<template>
  <div>
    <v-stepper v-model="e1" class="elevation-0">
      <h1></h1>
      <v-stepper-header class="elevation-0">
        <v-row justify="space-around" align-content="center">
          <v-stepper-step step="1" :complete="e1 > 1" editable>
            <!-- Email -->
          </v-stepper-step>

          <v-stepper-step step="2" :complete="e1 > 2" editable>
            <!-- Phone Number -->
          </v-stepper-step>

          <v-stepper-step step="3" :complete="e1 > 3" editable>
            <!-- Password -->
          </v-stepper-step>
        </v-row>

        <v-row justify="space-around" align-content="center">
          <v-stepper-step step="4" :complete="e1 > 4" editable>
            <!-- Name -->
          </v-stepper-step>

          <v-stepper-step step="5" :complete="e1 > 5" editable>
            <!-- Birthday -->
          </v-stepper-step>

          <v-stepper-step step="6" :complete="e1 > 6" editable>
            <!-- Sex -->
          </v-stepper-step>

          <v-stepper-step step="7" :complete="e1 > 7" editable>
            <!-- Experience -->
          </v-stepper-step>

          <v-stepper-step step="8" :complete="e1 > 8" editable>
            <!-- Preference -->
          </v-stepper-step>
        </v-row>
        <v-row justify="space-around" align-content="center">
          <v-stepper-step step="9" :complete="e1 > 9" editable>
            <!-- About me -->
          </v-stepper-step>

          <v-stepper-step step="10" editable> Review </v-stepper-step>
        </v-row>
      </v-stepper-header>
      <br />
      <br />
      <br />
      <br />
      <br />

      <v-divider></v-divider>

      <v-stepper-items>
        <v-stepper-content step="1">
          <h1 style="text-align: center">My email is...</h1>
          <v-text-field
            rounded
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <h1 style="text-align: center">My phone number is...</h1>
          <v-text-field
            rounded
            v-model="phone"
            :rules="phoneRules"
            label="Phone number"
            required
          ></v-text-field>

          <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <h1 style="text-align: center">I want my password to be...</h1>
          <v-text-field
            rounded
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>

          <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <h1 style="text-align: center">My name is...</h1>
          <v-text-field
            rounded
            v-model="name"
            :rules="nameRules"
            label="Enter your first name"
            required
          ></v-text-field>

          <v-btn color="primary" @click="e1 = 5" :disabled="valid">
            Continue
          </v-btn>
        </v-stepper-content>
        <v-container id="bday">
          <v-stepper-content step="5">
            <h1 style="text-align: center" :show-current="false">
              My Birthday is...
            </h1>
            <br />

            <v-row justify="center">
              <v-date-picker
                rounded
                v-model="age"
                :rules="ageRules"
                :max="new Date().toISOString().substr(0, 10)"
              ></v-date-picker>
            </v-row>

            <br />
            <v-btn color="primary" @click="e1 = 6"> Continue </v-btn>
          </v-stepper-content>
        </v-container>
        <v-stepper-content step="6">
          <h1 style="text-align: center">My sex is...</h1>
          <v-select
            rounded
            v-model="sex"
            :items="['Male', 'Female']"
            required
            filled
            label="Sex"
          ></v-select>

          <v-btn color="primary" @click="e1 = 7"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="7">
          <h1 style="text-align: center">My level of experience is...</h1>
          <v-divider></v-divider><br />
          <v-row justify="space-around">
            <v-radio-group
              v-model="experience"
              mandatory
              :rules="experienceRules"
            >
              <v-row justify="space-between">
                <div>
                  <v-img
                    lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Beginner.png?alt=media&token=162e6a3d-04b1-40da-9e9a-b26bd2b45a9e"
                    max-height="150"
                    max-width="250"
                    src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Beginner.png?alt=media&token=162e6a3d-04b1-40da-9e9a-b26bd2b45a9e"
                  >
                  </v-img>
                  <v-radio value="Beginner">Beginner </v-radio>
                </div>

                <div>
                  <v-img
                    lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb"
                    max-height="150"
                    max-width="250"
                    src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb"
                  >
                  </v-img>
                  <v-radio value="Experienced">Experienced </v-radio>
                </div>

                <div>
                  <v-img
                    lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Expert.png?alt=media&token=8e12810e-40dc-4646-8746-b182722a1b29"
                    max-height="150"
                    max-width="250"
                    src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Expert.png?alt=media&token=8e12810e-40dc-4646-8746-b182722a1b29"
                  >
                  </v-img>
                  <v-radio value="Expert"> Expert</v-radio>
                </div>
              </v-row>
            </v-radio-group>
          </v-row>

          <br />

          <v-btn color="primary" @click="e1 = 8"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="8">
          <h1 style="text-align: center">My preferences are...</h1>

          <v-select
            rounded
            v-model="preferences"
            :items="[
              'Cardio',
              'PPL',
              'Hypertrophy',
              'Balance',
              'Gains',
              'Cuts',
              'HIIT',
              'Yoga',
            ]"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="My preferences are..."
            persistent-hint
          ></v-select>

          <v-btn color="primary" @click="e1 = 9"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="9">
          <h1 style="text-align: center">A little bit about me...</h1>

          <v-textarea
            solo
            rounded
            v-model="about"
            name="input-7-4"
            label="About me"
            counter="30"
            clearable
          ></v-textarea>

          <v-btn color="primary" @click="e1 = 10"> Review </v-btn>
        </v-stepper-content>

        <v-stepper-content step="10">
          <v-container>
            <h3>Email : {{ email }}</h3>
            <h3>Phone Number : {{ phone }}</h3>
            <h3>Password : {{ password }}</h3>
            <h3>Name : {{ name }}</h3>
            <h3>Birthday : {{ age }}</h3>
            <h3>Sex : {{ sex }}</h3>
            <h3>Experience : {{ experience }}</h3>
            <h3>Preferences : {{ preferences }}</h3>
            <h4>About me : {{ about }}</h4>
            <br />
            <br />
            <br />

            <v-row justify="center">
              <v-btn color="primary" @click="submit"> Submit </v-btn>
            </v-row>
          </v-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>


<script>
import firebase from "firebase/app";
import { db } from "@/main";
import "firebase/firestore";

export default {
  data: () => ({
    e1: 1,
    valid: false,
    email: "",
    password: "",
    phone: "",
    name: "",
    age: "2000-01-01",
    sex: "Male",
    experience: "",
    preferences: [],
    about: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 6 || "Password must be at least 6 characters long",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phoneRules: [
      (v) => !!v || "Phone number is required",
      (v) => v.length == 10 || "Phone number must be exactly 10 digits long",
    ],
    nameRules: [(v) => !!v || "Name is required"],
    ageRules: [
      (v) => !!v || "Date of birth is required",
      (v) =>
        int(v.substring(0, 5) - new Date().getUTCFullYear()) > 2002 ||
        "You must be over 19 years old to register",
    ],
    aboutRules: [(v) => v.length > 30 || "About section has over 30 chars"],
    experienceRules: [(v) => !!v || "Experience entry required"],
  }),

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },

    submit() {
      if (
        this.validateInfo(
          this.email,
          this.password,
          this.phone,
          this.name,
          this.age,
          this.preferences,
          this.about
        )
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCred) => {
            db.collection("users")
              .doc(userCred.user.uid)
              .set({
                email: this.email,
                password: this.password,
                phone_number: this.phone,
                name: this.name,
                sex: this.sex,
                age: this.age,
                matched: [],
                rejected: [],
                preferences: this.arrayToMap(this.preferences),
                experience: this.experienceToString(this.experience),
                quote: this.about,
                photos: [],
              });
            try {
              firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password);
              this.$router.replace({ name: "mainsettings" });
            } catch (err) {
              alert(err.message);
            }
          })

          .catch((err) => {
            alert(err.message);
          });
      } else {
        console.log("Validation error");
      }
    },

    arrayToMap(array) {
      let newMap = {
        cardio: false,
        ppl: false,
        hypertrophy: false,
        balance: false,
        gains: false,
        cuts: false,
        hiit: false,
        yoga: false,
      };
      array.forEach((element) => {
        newMap[element] = !newMap[element];
      });
      console.log(newMap);
      return newMap;
    },

    experienceToString(exp) {
      if (exp == 0 || exp == null) {
        return "Beginner";
      } else if (exp == 1) {
        return "Experienced";
      } else {
        return "Expert";
      }
    },

    getAge(str) {
      let yob = str.split("-");
      let currentYear = new Date().getFullYear();
      let currentMonth = new Date().getMonth() + 1;
      let currentDay = new Date().getDate();
      let user_age = currentYear - Number(yob[0]) - 1;
      if (currentMonth < Number(yob[1])) {
        return String(user_age);
      } else if (currentMonth > Number(yob[1])) {
        return String(user_age + 1);
      } else {
        if (currentDay >= yob[2]) {
          return String(user_age + 1);
        } else {
          return String(user_age);
        }
      }
    },

    validateInfo(email, password, phone, name, age, preferences, about) {
      if (email.length < 3) {
        alert("Invalid email");
        return false;
      }
      if (password.length < 6) {
        alert("Invalid password");
        return false;
      }
      if (phone.length != 10 || this.isNumber(phone)) {
        alert("Invalid phone number");
        return false;
      }
      if (name.length > 20 || !this.isAllLetter(name)) {
        alert("Invalid name");
        return false;
      }
      if (this.getAge(age) < 19) {
        alert("You must be over 19 to use the app");
        return false;
      }
      if (preferences.length == 0) {
        alert("Please choose at least one workout preference");
        return false;
      }
      if (about.length > 30) {
        alert("The about me section should be shorter than 30 characters.");
        return false;
      }
      return true;
    },

    isNumber(n) {
      return /^-?[\d.]+(?:e-?\d+)?$/.test(n.value);
    },
    isAllLetter(str) {
      var letters = /^[A-Za-z]+$/;
      return str.match(letters);
    },
  },
};
</script>
