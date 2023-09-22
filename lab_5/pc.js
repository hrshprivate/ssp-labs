class Computer {
  constructor(cpu, ram, hdd) {
    this.cpu = cpu
    this.ram = ram
    this.hdd = hdd
  }

  getTotalPrice() {
    return this.cpu.price() + this.ram.price() + this.hdd.price()
  }
}

module.exports = {
  Computer,
}
