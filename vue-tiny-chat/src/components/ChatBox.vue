<template>
  <main class="chat-box">
    <div class="messages-wrapper">
      <Message v-for="message in messages" :key="message.id" :message="message" />
    </div>
    <!-- when a new message enters the chat, the screen scrolls down to the scroll div -->
    <span ref="scroll"></span>
    <SendMessage :scroll="scroll" />
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, orderBy, query, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Message from './Message.vue';
import SendMessage from './SendMessage.vue';

export default {
  components: {
    Message,
    SendMessage,
  },
  setup() {
    const messages = ref([]);
    const scroll = ref(null);

    onMounted(() => {
      const q = query(
        collection(db, 'messages'),
        orderBy('createdAt', 'desc'),
        limit(50)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedMessages = [];
        querySnapshot.forEach((doc) => {
          fetchedMessages.push({ ...doc.data(), id: doc.id });
        });
        const sortedMessages = fetchedMessages.sort(
          (a, b) => a.createdAt - b.createdAt
        );
        messages.value = sortedMessages;
      });

      return unsubscribe;
    });

    return { messages, scroll };
  },
};
</script>