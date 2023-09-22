const { CPU } = require('./cpu')
const { HDD } = require('./hdd')
const { RAM } = require('./ram')
const { Computer } = require('./pc')

// Создаем комплектующие
const cpu1 = new CPU('Intel Core i7', 'Intel', 300.0, 3.5)
const ram1 = new RAM('Kingston 16GB', 'Kingston', 80.0, 16)
const hdd1 = new HDD('Seagate 1TB', 'Seagate', 50.0, 1000)

const cpu2 = new CPU('AMD Ryzen 5', 'AMD', 250.0, 3.0)
const ram2 = new RAM('Corsair 8GB', 'Corsair', 40.0, 8)
const hdd2 = new HDD('Western Digital 500GB', 'WD', 40.0, 500)

// Создаем компьютеры
const computer1 = new Computer(cpu1, ram1, hdd1)
const computer2 = new Computer(cpu2, ram2, hdd2)

// Находим компьютер с наибольшей частотой процессора
let computerWithHighestFrequency = computer1
if (cpu2.frequency() > cpu1.frequency()) {
  computerWithHighestFrequency = computer2
}

// Выводим информацию о компьютерах
console.log('Computer 1:')
console.log(computer1.cpu.getDetails())
console.log(computer1.ram.getDetails())
console.log(computer1.hdd.getDetails())
console.log(`Price: $${computer1.getTotalPrice()}`)

console.log('\nComputer 2:')
console.log(computer2.cpu.getDetails())
console.log(computer2.ram.getDetails())
console.log(computer2.hdd.getDetails())
console.log(`Price: $${computer2.getTotalPrice()}`)

console.log('\nComputer with Highest CPU Frequency:')
console.log(computerWithHighestFrequency.cpu.getDetails())
console.log(computerWithHighestFrequency.ram.getDetails())
console.log(computerWithHighestFrequency.hdd.getDetails())

console.log(`Total Price: $${computerWithHighestFrequency.getTotalPrice()}`)
