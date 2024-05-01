<template>
  <form @submit.prevent="sendMessage" class="send-message">
    <input v-model="message" />
    <button type="submit">Send</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export default {
  props: {
    scroll: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const message = ref('');

    const sendMessage = async () => {
      if (message.value.trim() === '') {
        alert('Enter valid message');
        return;
      }
      const { uid, displayName, photoURL } = auth.currentUser;
      await addDoc(collection(db, 'messages'), {
        text: message.value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      });
      message.value = '';
      props.scroll.scrollIntoView({ behavior: 'smooth' });
    };

    return { message, sendMessage };
  }
};
</script>
