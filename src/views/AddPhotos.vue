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
            <h1 style="color:white">Add Photos</h1>
            <v-spacer></v-spacer>
            <v-btn class="nav-btn" color="primary" rounded to="/mainsettings">Done</v-btn>
           </v-toolbar>   
         </div>
           <div class="Mid-Section">
            <div class="usersettings">
                <h1>Let's make yourself look good for others!</h1>
            </div>
           </div> 
             <div>
    <v-row justify="center" no-gutters>
    <div >
      <input type="file" @change="previewImage" accept="image/*" ref="fileInput" style="display: none">
      <v-btn color="primary" rounded @click="onPickFile">Choose an Image</v-btn>
    </div>  
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress></p>
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
      <v-btn @click="onUpload" color="primary">Upload and Preview</v-btn>
    </div>
    </v-row>
  </div>  
    <div class="footer">
          <v-footer color="primary lighten-3" padless fixed>
            <v-row justify="center" no-gutters>
            <v-col class="primary lighten-3 py-4 text-center white--text" cols="12">
              {{ new Date().getFullYear() }} — <strong>SpotMe</strong>
            </v-col>
            </v-row>
          </v-footer>
        </div>
        </div>
</template>

<script>
import firebase from 'firebase';
import { auth } from '@/main';
import { db } from '@/main';

export default {
  name: 'Upload',
  data(){
	return{
      photos: [],
      imageData: null,
      picture: null,
      uploadValue: 0
	  }
  },
  created() {
    this.getUserPhotos();
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    getUserPhotos(){
      auth.onAuthStateChanged(loggedInUser => {
        db.collection('users').doc(loggedInUser.uid)
        .get()
        .then(doc=> {
          this.photos = doc.data().photos
        })
        .catch(err => console.log(err))
      })
    },
    onUpload(){
      this.picture=null;

      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);

      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;

        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          this.photos.push(this.picture)
          auth.onAuthStateChanged(loggedInUser => {
            db.collection('users').doc(loggedInUser.uid)
            .update({
              "photos": this.photos
            })
          })
        });
      }
      );
    },
    onPickFile() {
      this.$refs.fileInput.click()
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

.PhotoList img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 12em;

}

img.preview {
    width: 200px;
}

</style>