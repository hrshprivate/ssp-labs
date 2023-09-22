const { Component } = require('./component')

class HDD extends Component {
  constructor(name, manufacturer, price, storageCapacity) {
    super(name, manufacturer, price)
    this._storageCapacity = storageCapacity
  }

  storageCapacity() {
    return this._storageCapacity
  }

  price() {
    return super.price()
  }

  getDetails() {
    return (
      super.getDetails() + `, Storage Capacity: ${this.storageCapacity()} GB`
    )
  }
}

module.exports = {
  HDD,
}
