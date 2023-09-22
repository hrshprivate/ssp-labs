const { Component } = require('./component')

class CPU extends Component {
  constructor(name, manufacturer, price, frequency) {
    super(name, manufacturer, price)
    this._frequency = frequency
  }

  frequency() {
    return this._frequency
  }

  price() {
    return super.price()
  }

  getDetails() {
    return super.getDetails() + `, Frequency: ${this.frequency()} GHz`
  }
}

module.exports = {
  CPU,
}
