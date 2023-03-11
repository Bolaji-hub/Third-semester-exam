<script setup>
import { ref } from "vue";
const initialValue = 0;
const counter = ref(initialValue);
const inputValue = ref(null);

const setValue = () => {
  counter.value = inputValue.value;
  inputValue.value = null;
};
const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
const reset = () => {
  counter.value = initialValue;
};
</script>

<template>
  <div class="container">
    <h2>Welcome To My Third Semester Exam Project</h2>
    <main>
      <h1>{{ counter }}</h1>
      <input type="number" v-model="inputValue" />

      <div>
        <button :disabled="inputValue === null" @click="setValue">
          SetValue
        </button>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  color: plum;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 10px;
}

button {
  color: blueviolet;
  border: none;
  margin: 15px;
  padding: 20px;
  border-radius: 8px;
  background-color: grey;
  width: 100px;
  cursor: pointer;
}
input {
  margin: 20px;
  width: 40%;
  margin: 20px;
  border-color: blueviolet;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  color: black;
  cursor: pointer;
}
</style>
