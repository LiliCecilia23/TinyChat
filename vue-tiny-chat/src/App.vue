<template>
  <div class="App">
    <NavBar />
    <component :is="user ? ChatBox : Welcome" />
  </div>
</template>

<script>
import "./App.css";
import NavBar from "./components/NavBar.vue";
import ChatBox from "./components/ChatBox.vue";
import Welcome from "./components/Welcome.vue";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default {
  components: {
    NavBar,
    ChatBox,
    Welcome
  },
  setup() {
    const [user] = useAuthState(auth);

    return { user };
  }
};
</script>
