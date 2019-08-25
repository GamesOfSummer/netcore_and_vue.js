<template>
  <div>
    <h1 class="mt-4">Logout</h1>

    <form class="login" @submit.prevent="logout">
      <button type="submit">Logout</button>
    </form>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../../store/actions/auth";
export default {
  name: "Logout",

  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/login/login");
      });
    }
  }
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>
