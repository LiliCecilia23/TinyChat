<template>
  <div :class="['chat-bubble', message.uid === user.uid ? 'right' : '']">
    <img class="chat-bubble__left" :src="message.avatar" alt="user avatar" />
    <div class="chat-bubble__right">
      <p class="user-name">{{ message.name }}</p>
      <p class="user-message">{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { ref, watchEffect } from 'vue';
import { useAuthState } from 'react-firebase-hooks/auth';

export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  setup() {
    const [user] = useAuthState(auth);

    // Since we cannot directly use useEffect in Vue, we use watchEffect to
    // listen to changes in the user variable.
    watchEffect(() => {
      // The logic dependent on the user variable can be placed here
    });

    return { user };
  }
};
</script>
