<template>
  <div class="header">
    <div class="room-name">
      <h3>CHAT ROOM</h3>
    </div>
    <div id="user-D">
      <div class="header-user">
        <div class="user-icon">
          {{ firstLetter(store.state.username) }}
        </div>
        <h2>{{ store.state.username }}</h2>
      </div>
      <div class="header-logout" @click="logout">Logout</div>
    </div>
  </div>
</template>
<script>
import store from "../stored-data.js";

export default {
  setup() {
    const firstLetter = (user) => {
      return user.charAt(0).toUpperCase();
    };
    const logout = () => {
      store.state.username = "";
      store.state.email = "";
      store.state.token = "";
      store.state.messages = [""];
      localStorage.setItem("user", "");
      localStorage.setItem("email", "");
      localStorage.setItem("token", "");
    };
    return { logout, store, firstLetter };
  },
};
</script>

<style scoped>
.header {
  padding: 1rem;
  display: flex;
  align-items: center;
  color: #e7e6f0;
  flex-direction: column;
  justify-content: center;
}
.room-name {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  text-align: center;
}
.header h2 {
  font-size: 1.2rem;
}
.header-user {
  display: flex;
  align-items: center;
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
.header-user .user-icon {
  background-color: #fff;
  color: #7d799b;
  margin-right: 0.5rem;
  font-weight: bold;
}
#user-D {
  width: 100%;
  display: flex;
  align-items: center;
}
.header-logout {
  transition: all 0.3s;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  color: #f5e1e1;
  margin-left: auto;
}
.header-logout:hover {
  background-color: #7d799a;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
.header-logout:active {
  background-color: #5d5a72;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
</style>