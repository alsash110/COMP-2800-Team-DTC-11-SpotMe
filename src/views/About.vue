<template>
  <div class="about">
    <div class="Top-Section">
             <div class="navbar">
           <v-toolbar 
           color="blue" 
           prominent>
           <template v-slot:img="{ props }">
             <v-img v-bind="props" gradient="to bottom left, #59ABF8, #84BDF2"></v-img>
           </template>
            <img class="navbar-img" width="50px" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb" alt="">
            <h1 style="color:white">SpotMe</h1>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <v-navigation-drawer
      v-model="drawer"
      absolute
      clipped
      right
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-btn elevation="0" plain to="/">Home</v-btn>
          <v-btn elevation="0" plain to="/login">Login</v-btn>
          <v-btn elevation="0" plain to="signup">Sign Up</v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
           </v-toolbar>   
         </div>
    <h1>What We Are About</h1>
    <img class="company-logo" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fsuccess.png?alt=media&token=69d0e010-9474-4cd2-81aa-87c9d8f3a920" alt="Company Logo">
    <p>
      Find the people who match your routine, experience, schedule and other preferences and train together.
      In <i>SpotMe</i>, we want people who train their physique to find friends to become better with. 
      Are you just about to begin your work out journey? Or you are a professional bodybuilder? No matter what 
      your level of experience is, the team at <i>SpotMe</i> has your back, <i><b>sheeeeesh</b> harmonized</i>. 
    </p>
    <h1>How Do We Do It?</h1>
    <p>We have created a mobile web app that allows our targetted audience to have the utmost freedom and control
      to match and partner with similar health training individuals. We make sure that at SpotMe, we want <b>you</b> to have
      the freedom of choice.
    </p>
    </div>
    <div class="Bottom-Section">
      <v-parallax height="700" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <h1>The Team</h1>
    <div class="grid-container">
      <div class="person-1">
        <DevProfile name="Alberto" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/alberto-spotme1%20(2).PNG?alt=media&token=9eb460a7-6d9f-459d-9ca5-3a5a19896e4b"/>
      </div>
      <div class="person-2">
        <DevProfile name="Eric" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ricky.png?alt=media&token=410c0936-29c9-4dbe-be1f-eb1f02c657eb"/>
      </div>
      <div class="person-3">
        <DevProfile name="Ivan" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ivan_profile.jpg?alt=media&token=4a34c75f-0a01-41fc-bdb2-ceaa16b6d644"/>
      </div>
      <div class="person-4">
        <DevProfile name="Justin" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/1123123123123.png?alt=media&token=ffda3882-b6c2-4f8b-a9dc-05d2f608efdc"/>
      </div>
      <div class="person-5">
        <DevProfile name="Ross" imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/ross_doria.jpg?alt=media&token=cdbe3d39-b12d-422b-aa37-501d8a2efce5"/>
      </div>
    </div>
    </v-parallax>
    <div class="footer">
          <v-footer class="blue-rectangle" color="primary lighten-3" padless>
            <v-row justify="center" no-gutters >
              <v-btn to="/" text color="white">Home</v-btn>
              <v-col class="primary lighten-3 py-4 text-center white--text" cols="12">
                  {{ new Date().getFullYear() }} — <strong>SpotMe</strong>
              </v-col>
             </v-row>
        </v-footer>
        </div>
        </div>
  </div>
</template>

<script>
  import DevProfile from '../components/DevProfile'
  export default {
    name: "About",
    components: {
      DevProfile
    },


        data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }

</script>

<style>

  .Bottom-Section {
    background-color: rgb(188, 209, 241);
  }

  h1 {
    text-align: center;
  }

  p {
    margin: 10px;
    text-align: center;
  }

  .company-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 64vw;
    height: 65vw;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 40px 0px;
    grid-template-areas:
      "person-1 person-2"
      "person-3 person-4"
      "person-5 person-5";
  }

  .person-1 { grid-area: person-1; }

  .person-2 { grid-area: person-2; }

  .person-3 { grid-area: person-3; }

  .person-4 { grid-area: person-4; }

  .person-5 { grid-area: person-5; }

  .navbar-img {
    margin-top: 15px;
}

.navbar h1 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
}
</style>
