<script setup>
import useCounter from "../composables/useCounter";

const { counter, inputValue, setValue, increment, decrement, reset } =
  useCounter();
</script>

<template>
  <div class="container">
    <main>
      <h1>{{ counter }}</h1>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>

      <div>
        <input type="number" v-model="inputValue" />
        <button :disabled="inputValue === null" @click="setValue">
          SetValue
        </button>

        <button @click="reset">Reset</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  color: black;
  background-color: whitesmoke;
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
h1 {
  color: black;
  font-size: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  color: black;
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
  width: 50%;
  margin: 20px;
  border-color: ghostwhite;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  color: black;
  cursor: pointer;
}
</style>
