<template>
  <v-stepper v-model="e1" class="elevation-0">
    
    
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

        <v-stepper-step step="10" :complete="e1 > 10" editable>
          <!-- Pictures -->
        </v-stepper-step>

        <v-stepper-step step="11"> 
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
        
        <h1 style="text-align: center">My Birthday is...</h1>
        <br/>
        
        <v-row justify="center">
           <v-date-picker v-model="picker"></v-date-picker>
        </v-row>

        <br/>
        <v-btn
          color="primary"
          @click="e1 = 6"
        >
          Continue
        </v-btn>
 
      </v-stepper-content>

      <v-stepper-content step="6">

        <h1 style="text-align: center">My sex is...</h1>
            <v-select
          :items='["Male", "Female"]'
          filled
          label="Filled style"
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
            
              <div>
                <v-img
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Beginner.png?alt=media&token=162e6a3d-04b1-40da-9e9a-b26bd2b45a9e"
                  max-height="150"
                  max-width="250"
                  src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Beginner.png?alt=media&token=162e6a3d-04b1-40da-9e9a-b26bd2b45a9e">
                </v-img>
                <v-radio>
                Beginner</v-radio>
              </div>

              <div>
                <v-img
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb"
                  max-height="150"
                  max-width="250"
                  src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb">
                </v-img>
                <v-radio>
                Experienced</v-radio>
              </div>

              <div>
                <v-img
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Expert.png?alt=media&token=8e12810e-40dc-4646-8746-b182722a1b29"
                  max-height="150"
                  max-width="250"
                  src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Expert.png?alt=media&token=8e12810e-40dc-4646-8746-b182722a1b29">
                </v-img>
                <v-radio>
                Expert</v-radio>
              </div>

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

        <h1 style="text-align: center">Here's a little bit about me...</h1>

        <v-textarea
          solo
          name="input-7-4"
          label="About me"
        ></v-textarea>

        <v-btn
          color="primary"
          @click="e1 = 10"
        >
          Continue
        </v-btn>

 
 
      </v-stepper-content>

      <v-stepper-content step="10">

        <h1 style="text-align: center">My pictures...</h1>

          <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Avatar"
  ></v-file-input>

        <v-btn
          color="primary"
          @click="e1 = 11"
        >
          Continue
        </v-btn>

 
      </v-stepper-content>

       <v-stepper-content step="11">

         <v-container>

              <v-row justify="center">
                <v-btn
                  color="primary"
                  @click="submit"
                >
                  Submit
                </v-btn>
              </v-row>
         </v-container>
 
      </v-stepper-content>


    </v-stepper-items>

  </v-stepper>
</template>


<script>
  export default {
    data () {
      return {
        e1: 1
      }
    },

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
    },
  }
</script>

<style>

  

  .step{
    width: 5%;
  }

</style>