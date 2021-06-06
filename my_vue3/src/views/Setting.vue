<template>
    <h1>{{ props.msg }}</h1>
    <p>store count is: {{ count }}</p>
    <button @click="inc()">{{ btnText }}</button>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  msg: String,
});
const btnText = 'add';
const store = useStore();
const count = ref(0);
const inc = () => {
  console.log(store);
  count.value++;
};
onMounted(() => {
  console.log('props.msg');
});

</script>