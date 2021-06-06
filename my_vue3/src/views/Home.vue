<template>
  <h1>{{ props.msg }}</h1>
  <HelloWorld msg="HelloWorld" />
  <Setting msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts" setup>
import { defineProps, onMounted } from "vue";
import Setting from "/@/views/Setting.vue";
import HelloWorld from "/@/components/HelloWorld.vue"

import { userYdStore } from "../hooks/use-store";
// import { useStore } from "vuex";
// import type { State } from "../store";
// import type { State, Gettters } from "../store";

const props = defineProps({
  msg: String,
});

// const { state, getters  } = userYdStore();
  const { state, getters } = userYdStore();

onMounted(() => {
  console.log(state.wechat.loading);
  console.log(getters);
  console.log(props.msg);
});
</script>