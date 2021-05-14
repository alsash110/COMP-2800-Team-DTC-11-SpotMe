<template>
   <body>
     <div class="container">
      <div class="Top-Section">
         <div class="navbar">
           <v-toolbar 
           color="blue" 
           prominent>
           <template v-slot:img="{ props }">
             <v-img v-bind="props" gradient="to bottom left, #59ABF8, #84BDF2"></v-img>
           </template>
            <img width="50px" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb" alt="">
            <h1 style="color:white">SpotMe</h1>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
           </v-toolbar>   
         </div>
         <div class="img-carousel">
           <div class="overlay">
            <h2>LET'S GET STARTED</h2>
            <v-btn color="primary" elevation="2" rounded>Create Account</v-btn>
           </div>
           <v-carousel cycle height="400" hide-delimiter-background :show-arrows="false">
             <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
             </v-carousel-item>
           </v-carousel>
         </div>
      </div>
      <div class="Mid-Section">
     <div class="user-cards">
        <div class="p1">
         <h1>Let us help you with your fitness needs..</h1>
         <v-btn
      class="mx-1"
      fab
      dark
      color="blue"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
       </div>   
      <v-card class="mx-auto my-15" max-width="350" max-height="400px">
        <v-img height="400" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fexperienced.png?alt=media&token=c8efd4fb-18e0-4328-bfd8-9b733abe537c"></v-img>
          <v-card-text>
          <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud."</div>
        </v-card-text>
        <v-btn rounded>Learn More</v-btn>
      </v-card>
        <!-- <div class="p2">
         <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
       </div>   -->
      <v-card class="mx-auto my-10" max-width="350" max-height="400px">
        <v-img height="400" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fbeginner.png?alt=media&token=f416de3f-8829-4da2-af5a-3416111d990f"></v-img>
                        <v-card-text>
              <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud."</div>
            </v-card-text>
            <v-btn rounded>Learn More</v-btn>
       </v-card>
        <!-- <div class="p2">
         <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
       </div>   -->
      <v-card class="mx-auto my-15" max-width="350" max-height="400px">
        <v-img height="400" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fexpert.png?alt=media&token=95a58690-b0ae-4d9c-97a1-ad940a4b335b"></v-img>
            <v-card-text>
              <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud."</div>
            </v-card-text>
            <v-btn rounded>Learn More</v-btn>
      </v-card>
     </div>
    
      </div>
      <div class="Bottom-Section">
        <div class="footer">
          <v-footer color="primary lighten-3" padless>
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
      </div>
    </div>
   </body>
</template>
<script>
   //import HelloWorld from '../components/HelloWorld'
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2FGirls%20Running.png?alt=media&token=b9e7d7a5-a3db-401e-bff7-601abc6bcb14',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fworkout-group.jpg?alt=media&token=507e68d6-6d68-4182-bd6b-4d29675f0221',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Ffriendworkingout.jpg?alt=media&token=745af7f8-fefa-4924-93db-54465c9ceac1',
          },
        ],
        links: [
        'About Us',
        'Learn',
        'Support',
      ]
      }
    },
  }

</script>
<style>


.Top-Section {
  grid-area: Top-Section;
}

.Mid-Section {
  grid-area: Mid-Section;
  /* background-color: rgb(216, 236, 245); */
}

.Mid-Section h2 {
  text-align: center;
}

.Bottom-Section {
  grid-area: Bottom-Section;
}

.Mid-Section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.1fr;
  gap: 0px 0px;
  grid-template-areas: inherit;
}

/* .container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.8fr 2fr 0.2r;
  gap: 0px 0px;
  grid-template-areas:
    "Top-Section"
    "Mid-Section"
    "Bottom-Section";
} */

.img-carousel {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 
    "."
    "overlay";
}

.overlay {
  grid-area: overlay;
}

.overlay {
  text-align: center;
  margin-top: -200px;
  z-index: 3;
}

.overlay h2 {
  font-size: 25px;
  color: white;
  font-weight: 450;
}

.p1 h1 {
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-top: 50px;
}

.p2 p {
  font-size: 20px;
  text-align: center;
}

.user-cards {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 80px 0px;
  grid-template-areas: inherit;
}

</style>