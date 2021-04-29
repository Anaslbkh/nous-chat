<template>
  <div class="chat">
    <div
      class="message-box"
      :class="store.state.username === message.username && 'current-user'"
      v-for="message in store.state.messages"
      :key="message.id"
    >
      <div class="user-icon">
        {{ firstLetter(message.username) }}
      </div>
      <div class="message">
        {{ message.body }}
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import db from "../db.js";
import store from "../stored-data";

export default {
  setup() {
    var elem = "";
    const firstLetter = (user) => {
      return user.charAt(0).toUpperCase();
    };
    onMounted(async () => {
      elem = document.getElementsByClassName("chat");
      if (
        store.state.email !== "" ||
        (store.state.email !== null && store.state.token !== "") ||
        store.state.token !== null
      ) {
        const messagesRef = await db.database().ref("messages").limitToLast(15);
        messagesRef.on("value", (snapshot) => {
          const data = snapshot.val();
          let messages = [];
          Object.keys(data).forEach((key) => {
            messages.push({
              id: key,
              username: data[key].username,
              body: data[key].body,
            });
            scrollToBottom(200);
          });
          store.state.messages = messages;
        });
      }
    });
    scrollToBottom(2000);
    function scrollToBottom(time) {
      setTimeout(() => {
        elem[0].scrollTop = elem[0].scrollHeight;
      }, time || 2000);
    }
    return { store, firstLetter };
  },
};
</script>
<style scoped>
.chat {
  background-color: #fff;
  flex-grow: 1;
  /* border-radius:  20px; */
  /* box-shadow: -6px 0 6px rgba(0, 0, 0, 0.2); */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  max-height: calc(90vh - 130px);
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.chat::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
.chat::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
}
.chat::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(66, 69, 129, 0.3);
}

.message-box {
  max-width: 80%;
  display: flex;
  margin-bottom: 1rem;
  position: relative;
}
.message-box .message {
  background-color: #f1f0f5;
  color: #666380;
  padding: 0.5rem;
  border-radius: 7px;
}
.user-icon {
  border-radius: 10rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
}
.message-box .user-icon {
  background-color: #f1f0f5;
  color: #7d799b;
  flex-shrink: 0;
  margin-right: 0.5rem;
}
.message-box.current-user {
  align-self: flex-end;
}
.message-box.current-user .user-icon {
  background-color: #7d799b;
  color: #fff;
  order: 2;
  margin-right: 0;
  margin-left: 0.5rem;
}
.message-box.current-user .message {
  background-color: #fea9aa;
  color: #ffffff;
}
</style>