<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { login } from "@/config/apis/login.js";
defineProps({
  msg: String,
});
const count = ref(0);

// * 生命周期
onMounted(() => {
  console.log("env", import.meta.env);

  console.log(useStore().state.user.name, "store");
  // login();
  console.log("mounted");
});
</script>

<template>
  <h1>我是首页</h1>
  <el-button type="primary">Primary</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
