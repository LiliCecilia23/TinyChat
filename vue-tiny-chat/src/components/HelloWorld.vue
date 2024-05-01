<template>
  <main class="welcome">
    <div class="pixel-box">
      <h2>Welcome to TinyChat!</h2>
      <i class="devicon-react-original" style="font-size: 50px;"></i>
      <p>Sign in with Google to chat with your fellow Vue Developers.</p>
      <button class="sign-in" @click="googleSignIn">
        <img :src="GoogleSignin" alt="sign in with google" />
      </button>
    </div>
  </main>
</template>

<script>
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleSignin from '../img/gsignbtn.png';

export default {
  setup() {
    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    };

    return { GoogleSignin, googleSignIn };
  }
};
</script>
