<template>
  <nav class="nav-bar">
    <h1>
      TinyChat
      <i class="devicon-react-original" style="font-size: 30px; margin-left: 10px;"></i>
    </h1>
    <button v-if="user" @click="signOut" class="sign-out" type="button">
      Sign Out
    </button>
    <button v-else class="sign-in">
      <img @click="googleSignIn" :src="GoogleSignin" alt="sign in with google" type="button" />
    </button>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleSignin from '../img/gsignbtn.png';

export default {
  setup() {
    const [user] = useAuthState(auth);
    
    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    };

    const signOut = () => {
      auth.signOut();
    };

    return { user, googleSignIn, signOut, GoogleSignin };
  }
};
</script>
