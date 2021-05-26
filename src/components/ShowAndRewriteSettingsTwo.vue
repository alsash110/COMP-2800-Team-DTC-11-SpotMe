<template>
    
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main";
import { auth } from "@main"
import "firebase/firestore";
export default {
    name: "ShowAndRewriteSettingsTwo",
    props: {
        userInfo: Object
    },
    methods: {
        setPhone() {
            auth.onAuthStateChanged(LoggedInUser => {
                db.collection('users').doc(loggedInUser.uid).update({
                    phone_number: this.phone_number
                })
                .catch(err => console.log(err))
            })
        },
        setEmail() {
            auth.onAuthStateChanged(LoggedInUser => {
                db.collection('users').doc(loggedInUser.uid).update({
                    email: this.email
                })
                .catch(err => console.log(err))
            })
        },
    }
}
</script>