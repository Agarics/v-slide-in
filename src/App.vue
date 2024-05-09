<script setup lang="ts">
</script>

<template>
  <h1>基于@vueuse/core相关Api实现的slide-in指令</h1>
  <div v-for="index in 10" v-slide-in class="color-block">{{ index }}</div>
</template>

<style lang="less">
.color-block{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 500px;
  margin: 20px auto;
  color: #fff;
  font-size: 36px;
  font-weight: 700;

  &:nth-child(3n) {
    background: blue;
  }
  &:nth-child(3n+1) {
    background: green;
  }
  &:nth-child(3n+2) {
    background: red;
  }
  &:nth-child(1) {
    background: blue;
  }
}
</style>
