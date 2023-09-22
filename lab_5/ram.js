const { Component } = require('./component')

class RAM extends Component {
  constructor(name, manufacturer, price, capacity) {
    super(name, manufacturer, price)
    this._capacity = capacity
  }

  capacity() {
    return this._capacity
  }

  price() {
    return super.price()
  }

  getDetails() {
    return super.getDetails() + `, Capacity: ${this.capacity()} GB`
  }
}

module.exports = {
  RAM,
}
