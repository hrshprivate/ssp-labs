class Component {
  constructor(name, manufacturer, price) {
    this._name = name
    this._manufacturer = manufacturer
    this._price = price
  }

  name() {
    return this._name
  }

  manufacturer() {
    return this._manufacturer
  }

  price() {
    return this._price
  }

  getDetails() {
    return `Name: ${this.name()}, Manufacturer: ${this.manufacturer()}, Price: $${this.price()}`
  }
}

module.exports = {
  Component,
}
