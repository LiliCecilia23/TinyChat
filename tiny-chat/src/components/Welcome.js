import React from "react";
import GoogleSignin from "../img/gsignbtn.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
        console.log(auth);
    };

  return (
    <main className="welcome">
        <div className="pixel-box">
            <h2>Welcome to TinyChat!</h2>
            <i style={{fontSize: 50}} className="devicon-react-original"></i>
            <p>Sign in with Google to chat with with your fellow React Developers.</p>
            <button className="sign-in">
                <img
                onClick={googleSignIn}
                src={GoogleSignin}
                alt="sign in with google"
                type="button"
                />
            </button>
      </div>
    </main>
  );
};

export default Welcome;