<template>
  <div class="footer">
    <form @submit.prevent="sendMessage">
      <input
        type="text"
        placeholder="Write a message..."
        v-model="inputMassage"
      />
      <button type="submit">send</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import db from "../db.js";
import store from "../stored-data";
export default {
  setup() {
    const inputMassage = ref("");
    const sendMessage = () => {
      const massagesRef = db.database().ref("messages");
      if (inputMassage.value === "" || inputMassage.value === null) {
        return;
      }
      const massage = {
        username: store.state.username,
        body: inputMassage.value,
      };
      massagesRef.push(massage);
      inputMassage.value = "";
    };
    return {
      sendMessage,
      inputMassage,
    };
  },
};
</script>

<style scoped>
.footer {
  background: #fff;
}
.footer form {
  background: #7d799b;
  padding: 1rem;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
}
.footer button {
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  background: #fea9aa;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 10rem;
  color: #fff;
  cursor: pointer;
}
.footer input {
  flex-grow: 1;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
}
</style>