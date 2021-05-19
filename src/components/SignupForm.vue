<template>
    <div>
  <v-stepper v-model="e1" class="elevation-0">
    
    <h1> </h1>
    <v-stepper-header  class="elevation-0">

      <v-row justify="space-around" align-content="center">

        <v-stepper-step step="1" :complete="e1 > 1"  editable>
          <!-- Email -->
        </v-stepper-step>

        
        <v-stepper-step step="2"  :complete="e1 > 2" editable>
          <!-- Phone Number -->
        </v-stepper-step>

        <v-stepper-step step="3"  :complete="e1 > 3" editable>
          <!-- Password -->
        </v-stepper-step>
      </v-row>

        <v-row justify="space-around" align-content="center">

        <v-stepper-step  step="4" :complete="e1 > 4" editable>
          <!-- Name -->
        </v-stepper-step>

        <v-stepper-step step="5" :complete="e1 > 5" editable>
          <!-- Birthday -->
        </v-stepper-step>

        <v-stepper-step step="6" :complete="e1 > 6" editable>
          <!-- Sex -->
        </v-stepper-step>

        <v-stepper-step step="7" :complete="e1 > 7"  editable >
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

        <v-stepper-step step="10" editable> 
          Review
        </v-stepper-step>

      </v-row>

    </v-stepper-header>
    <br/>    <br/>
    <br/>
    <br/>
    <br/>

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


        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>


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

        


        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>


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

        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>


      </v-stepper-content>

      <v-stepper-content step="4">

           <h1 style="text-align: center">My name is...</h1>
        <v-text-field
        rounded
      v-model="name"
      label="Full Name (First Name Followed by Last Name)"
      required
    ></v-text-field>

        <v-btn
          color="primary"
          @click="e1 = 5"
        >
          Continue
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="5">
        <v-container id="bday">
        <h1 style="text-align: center">My Birthday is...</h1>
        <br/>
        
        <v-row justify="center">
           <v-date-picker rounded v-model="picker" :rules="ageRules"></v-date-picker>
        </v-row>

        <br/>
        <v-btn
          color="primary"
          @click="e1 = 6"
        >
          Continue
        </v-btn>
        </v-container>
 
      </v-stepper-content>

      <v-stepper-content step="6">

        <h1 style="text-align: center">My sex is...</h1>
            <v-select rounded
            v-model="sex"
          :items='["Male", "Female"]'
          required
          filled
          label="Sex"
        ></v-select>

        <v-btn
          color="primary"
          @click="e1 = 7"
        >
          Continue
        </v-btn>

 
      </v-stepper-content>

      <v-stepper-content step="7">

        <h1 style="text-align: center">My level of experience is...</h1>
<v-divider></v-divider><br/>
          <v-row justify="space-around" >
            <v-radio-group v-model="radioGroup">
              <v-row justify="space-between">
              <div>
                <v-img
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Beginner.png?alt=media&token=162e6a3d-04b1-40da-9e9a-b26bd2b45a9e"
                  max-height="150"
                  max-width="250"
                  src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Beginner.png?alt=media&token=162e6a3d-04b1-40da-9e9a-b26bd2b45a9e">
                </v-img>
                <v-radio v-model="picked" value="Beginner">Beginner
                </v-radio>
              </div>

              <div>
                <v-img
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb"
                  max-height="150"
                  max-width="250"
                  src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb">
                </v-img>
                <v-radio v-model="picked" value="Experienced">Experienced
                </v-radio>
              </div>

              <div>
                <v-img
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Expert.png?alt=media&token=8e12810e-40dc-4646-8746-b182722a1b29"
                  max-height="150"
                  max-width="250"
                  src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Expert.png?alt=media&token=8e12810e-40dc-4646-8746-b182722a1b29">
                </v-img>
                <v-radio v-model="picked" value="Expert">
                Expert</v-radio>
              </div>
              </v-row>
            </v-radio-group>
          </v-row>

          <br/>

        <v-btn
          color="primary"
          @click="e1 = 8"
        >
          Continue
        </v-btn>

 
      </v-stepper-content>

      <v-stepper-content step="8">

        <h1 style="text-align: center">My preferences are...</h1>

          <v-select
          rounded
          v-model="e6"
          :items='["Cardio", "PPL", "Hypertrophy","Balance","Gains","Cuts","HIIT","Gymnastics"]'
          :menu-props="{ maxHeight: '400' }"
          label="Select"
          multiple
          hint="My preferences are..."
          persistent-hint
        ></v-select>

        <v-btn
          color="primary"
          @click="e1 = 9"
        >
          Continue
        </v-btn>

 
      </v-stepper-content>

      <v-stepper-content step="9">

        <h1 style="text-align: center">A little bit about me...</h1>

        <v-textarea
          solo
          rounded
          v-model="about"
          name="input-7-4"
          label="About me"
          counter="100"
          clearable
        ></v-textarea>

        <v-btn
          color="primary"
          @click="e1 = 10"
        >
          Review
        </v-btn>

 
 
      </v-stepper-content>

       <v-stepper-content step="10">

         <v-container>

            <h3>Email : {{ email }}</h3>
            <h3>Phone Number : {{ phone }}</h3>
            <h3>Password : {{ password }}</h3>
            <h3>Name : {{ name }}</h3>
            <h3>Birthday : {{ picker }}</h3>
            <h3>Sex : {{ sex }}</h3>
            <h3>Experience : {{ picked }}</h3>
            <h3>Preference : {{ preferences }}</h3>
            <h3>About me : {{ about }}</h3>

              <v-row justify="center">
                <v-btn
                  color="primary"
                  to="/mainsettings"
                  @click="submit"
                >
                  Submit
                </v-btn>
              </v-row>
         </v-container>
 
      </v-stepper-content>


    </v-stepper-items>

  </v-stepper>
    <v-footer height="80px" class="blue-rectangle" color="#97CAFA" fixed>
        </v-footer>
    </div> 
</template>


<script>

  import * as firebase from 'firebase/app'

  export default {

      data () {
      return {
        e1: 1,
        email:'',
        password:'',
        name:'',
        phone:'',
        birthday:'',
        sex:'',
        experience:'',
        preferences:'',
        about:'',
      
      
      }
    },
    
    computed: () => ({
      
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

    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
      // async submit(){
      //   try{
      //         const user = firebase.auth().createUserWithEmailAndPassword(this.email,this.password);
      //          firebase.
      //   }
      //   catch(err){
      //     alert(err.message());
      //   }
        
      }
  }
  
  //}
</script>

<style>

  

  #bday{
    height: 80vh;
  }

</style>