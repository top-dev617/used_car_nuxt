<template>
  <div class="calculator">
    <div class="display">{{ display }}</div>
    <div class="buttons">
      <button @click="clear">C</button>
      <button @click="appendNumber('7')">7</button>
      <button @click="appendNumber('8')">8</button>
      <button @click="appendNumber('9')">9</button>
      <button @click="setOperation('/')">/</button>
      <button @click="appendNumber('4')">4</button>
      <button @click="appendNumber('5')">5</button>
      <button @click="appendNumber('6')">6</button>
      <button @click="setOperation('*')">*</button>
      <button @click="appendNumber('1')">1</button>
      <button @click="appendNumber('2')">2</button>
      <button @click="appendNumber('3')">3</button>
      <button @click="setOperation('-')">-</button>
      <button @click="appendNumber('0')">0</button>
      <button @click="calculate">=</button>
      <button @click="setOperation('+')">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "",
      currentNumber: "",
      operator: null,
      previousNumber: null,
    };
  },
  methods: {
    appendNumber(number) {
      this.currentNumber += number;
      this.updateDisplay();
    },
    setOperation(operator) {
      if (this.currentNumber === "") return;
      this.operator = operator;
      this.previousNumber = this.currentNumber;
      this.currentNumber = "";
    },
    calculate() {
      let result;
      const prev = parseFloat(this.previousNumber);
      const current = parseFloat(this.currentNumber);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = prev / current;
          break;
        default:
          return;
      }
      this.currentNumber = result.toString();
      this.operator = null;
      this.previousNumber = null;
      this.updateDisplay();
    },
    clear() {
      this.currentNumber = "";
      this.operator = null;
      this.previousNumber = null;
      this.updateDisplay();
    },
    updateDisplay() {
      this.display = this.currentNumber;
    },
  },
};
</script>

<style scoped>
.calculator {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.display {
  font-size: 2em;
  margin-bottom: 10px;
  height: 50px;
  text-align: right;
  border: 1px solid #ccc;
  padding: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.buttons button {
  padding: 20px;
  font-size: 1.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>
