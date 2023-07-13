<template>
  <div>HomeView</div>
  <div>{{ counter.count }}</div>
  <button @click="onCount">add</button>
  <HelloWorld msg="msg 传值"></HelloWorld>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useCounterStore } from '@/store/index';
import HelloWorld from '@/components/HelloWorld.vue';

const counter = useCounterStore();

const onCount = () => {
  counter.accumulate();
  console.log('123123', counter.gettersCount);
};

onMounted(() => {
  console.log('counter', counter.count);
});
</script>
