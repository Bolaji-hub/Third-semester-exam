<script setup>
import useCounter from "../composables/useCounter";

const { counter, inputValue, setValue, increment, decrement, reset } =
  useCounter();
</script>

<template>
  <div class="container">
    <main>
      <h1>{{ counter }}</h1>
      <div>
        <button class="increment" @click="increment">+</button>
        <button class="decrement" @click="decrement">-</button>
      </div>

      <div class="setvalue">
        <input type="number" v-model="inputValue" />
        <button :disabled="inputValue === null" @click="setValue">
          SetValue
        </button>
      </div>
      <button class="reset" @click="reset">Reset</button>
    </main>
  </div>
</template>

<style scoped>
.container {
  color: black;
  background-color: whitesmoke;
  /* width: 100%; */
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

.setvalue button {
  margin: 0;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: black;
  font-size: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  color: rgba(0, 0, 0, 0.593);
  border: none;
  margin: 15px;
  font-size: large;
  padding: 20px;
  border-radius: 8px;
  background-color: grey;
  width: 100px;
  cursor: pointer;
}

input {
  /* min-width: 50%; */
  /* margin: 20px; */
  border-color: ghostwhite;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  color: black;
  cursor: pointer;
}
</style>
