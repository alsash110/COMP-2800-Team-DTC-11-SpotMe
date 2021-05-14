<template>
<div>
   <v-toolbar 
           color="blue" 
           prominent>
           <template v-slot:img="{ props }">
             <v-img v-bind="props" gradient="to bottom left, #59ABF8, #84BDF2"></v-img>
           </template>
            <img width="50px" src="https://firebasestorage.googleapis.com/v0/b/group11-spot-me.appspot.com/o/Experienced.png?alt=media&token=1a0ed8da-bb5e-4ce8-85a1-0b74d1a0d0cb" alt="">
            <h1 style="color:white">SpotMe</h1>
            <v-spacer></v-spacer>
           </v-toolbar>   
</div>
</template>

<script>
    export default {
        name: "SignupHeader",
    }
</script>

<style scoped>
 div{
     padding: 30px 0px;
 }
</style>