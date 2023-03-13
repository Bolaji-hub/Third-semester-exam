import { ref } from "vue";
export default function useCounter(initialValue = 0) {
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    counter.value--;
  };
  const counter = ref(initialValue);
  const inputValue = ref(null);

  const setValue = () => {
    counter.value = inputValue.value;
    inputValue.value = null;
  };

  const reset = () => {
    counter.value = initialValue;
  };

  return {
    counter,
    inputValue,
    setValue,
    increment,
    decrement,
    reset,
  };
}
