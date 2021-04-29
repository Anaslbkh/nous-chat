<template>
  <div class="login">
    <form @submit.prevent="handleGoogleLogin">
      <h1>NOUSCHAT</h1>
      <!-- <input
        type="text"
        placeholder="please enter your name ..."
        v-model="inputLogin"
      />-->
      <button type="submit">
        <img
          src="https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png"
          alt=""
        />
        Sing in with Google
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "../stored-data.js";
import firebase from "firebase/app";
export default {
  name: "HelloWorld",
  setup() {
    const handleGoogleLogin = (/*path, data*/) => {
      // Create an instance of the Google provider object:
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to
          //  access the Google API.
          var token = credential.accessToken;
          store.state.token = token;
          localStorage.setItem("token", token);
          // The signed-in user info, it will give you all basic info
          // of logged-in user
          var user = result.user;
          store.state.username = user.displayName;
          localStorage.setItem("user", user.displayName);
          localStorage.setItem("email", user.email);
          console.log("token" + token + "user:::::::::");
          console.log(user.displayName);
          location.reload();
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(
            "errorCode: " +
              errorCode +
              "/n errorMessage:" +
              errorMessage +
              "/n email: " +
              email +
              "/n credential: " +
              credential
          );
        });
    };

    const inputLogin = ref("");
    const login = () => {
      if (inputLogin.value !== "" || inputLogin.value !== null) {
        store.state.username = inputLogin.value;
        inputLogin.value = "";
      }
    };

    return { inputLogin, login, store, handleGoogleLogin };
  },
};
</script>

<style scoped>
.login {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
.login form {
  width: 90%;
  background-color: #f1f0f4;
  border-radius: 20px;
  padding: 3rem 1rem;
  box-shadow: 1px 1px 6px rgba(31, 32, 61, 0.1);
  color: #5d5a72;
}
.login h1 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}
.login input {
  width: 100%;
  border-radius: 10rem;
  background-color: #fff;
}
.login button {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: #feaaaa;
  cursor: pointer;
  border-radius: 10rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  color: #fff;
  position: relative;
  transition: all 0.3s;
}
.login button:hover {
  background-color: #ec9e9e;
}
button img {
  position: absolute;
  width: 24px;
  left: 18px;
  top: 6px;
}
</style>
