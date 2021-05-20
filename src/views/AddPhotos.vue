<template>
  <div class="about">
             <div class="navbar">
           <v-toolbar 
           color="blue" 
           prominent>
           <template v-slot:img="{ props }">
             <v-img v-bind="props" gradient="to bottom left, #59ABF8, #84BDF2"></v-img>
           </template>
            <img class="navbar-img" width="50px" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb" alt="">
            <h1 style="color:white">Settings</h1>
            <v-spacer></v-spacer>
            <v-btn class="nav-btn" color="primary" rounded to="/mainsettings">Done</v-btn>
           </v-toolbar>   
         </div>
           <div class="Mid-Section">
            <div class="usersettings">
                <h1>Add Photos</h1>
            </div>
           </div>
           <v-flex>
           <div class="PhotoList">
             <div class="photo1">
               <img :src="imageUrl" alt="photo1">
             </div>
             <div class="photo2">
               <UserPhoto imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed" alt="photo2"/>
             </div>
             <div class="photo3">
               <UserPhoto imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed" alt="photo2"/>
             </div>
             <div class="photo4">
               <UserPhoto imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed" alt="photo2"/>
             </div>
             <div class="photo5">
               <UserPhoto imgUrl="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Images%2Fuserprofile.png?alt=media&token=70417eff-1a9c-449d-a576-0553b7e863ed" alt="photo2"/>
             </div>
           </div>
           </v-flex>
           <v-flex>
            <div class="photos">
                <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
            </div>
           </v-flex>

    <div class="footer">
          <v-footer color="primary lighten-3" padless fixed>
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
</template>

<script>
  import UserPhoto from '../components/UserPhoto'
  export default {
    name: "Photos",
    components: {
      UserPhoto
    },
    data () {
      return {
        imageUrl: '',
        image: null
      }
    },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', ()=> {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
  }
  }
  }
</script>

<style>
.navbar h1 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
}

.navbar h1 {
    margin-left: 40px;
    margin-top: 30px;
}

.nav-btn {
    margin-top: 35px;
}

.navbar-img {
    margin-top: 15px;
}

.Mid-Section {
    background-color: rgba(196, 196, 196, 0.3);
}

.Mid-Section h1 {
    font-size: 15px;
    font-weight: normal;
    padding: 3vh;
}

.Mid-Section img {
    margin: auto;
}

.photo1 {grid-area: photo1;}

.photo2 {grid-area: photo2;}

.photo3 {grid-area: photo3;}

.photo4 {grid-area: photo4;}

.photo5 {grid-area: photo5;}

.PhotoList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px 0px;
  grid-template-areas: 
  "photo1 photo2"
  "photo3 photo4"
  "photo5 photo5";
}

.PhotoList img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 9em;
  height: 9em;
  border-radius: 50%;

}
</style>