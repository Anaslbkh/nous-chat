<template>
  <div class="container">
    <login v-if="store.state.token === '' || store.state.token === null">
    </login>
    <div class="chat-con" v-else>
      <TheHeader />
      <chat />
      <Thefooter />
    </div>
  </div>
</template>

<script>
import login from "./components/login.vue";
import chat from "./components/chat.vue";
import Thefooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import store from "./stored-data.js";

export default {
  name: "App",
  components: {
    login,
    chat,
    Thefooter,
    TheHeader,
  },
  setup() {
    return { store };
  },
};
</script>
<style>
*,
*:after,
*:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  width: 100vw;
  min-height: 95vh;
  overflow-x: hidden;
  background-color: #ffeded;
  background-image: linear-gradient(62deg, #f8d4d6 0%, #ffeded 100%);
}
.container {
  margin: 5vh auto 0;
  min-height: 90vh;
  background-color: #92829e;
  width: 320px;
  border-radius: 20px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
input {
  background-color: #f3f4f6;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
}
.chat-con {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}
.chat-con::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
.chat-con::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
}
.chat-con::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(66, 69, 129, 0.3);
}
</style>
