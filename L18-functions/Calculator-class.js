class Calculator {
  #state = 0

  sum(a) {
    this.#state += a
  }

  sub(a) {
    this.#state -= a
  }

  mul(a) {
    this.#state *= a
  }

  div(a) {
    this.#state /= a
  }
  
  state() {
    return this.#state
  }
}

const calculator = new Calculator();
calculator.sum(2)
calculator.sum(5)
calculator.sub(1)
calculator.div(2)
calculator.state()