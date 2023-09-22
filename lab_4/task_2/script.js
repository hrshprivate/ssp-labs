document.addEventListener('DOMContentLoaded', function () {
  const ledLight = document.querySelector('.light')
  const toggleButton = document.getElementById('toggleButton')
  let isOn = false

  toggleButton.addEventListener('click', function () {
    isOn = !isOn // Переключаем состояние (Вкл/Выкл)

    if (isOn) {
      turnOnLed()
    } else {
      turnOffLed()
    }
  })

  function turnOnLed() {
    ledLight.style.backgroundColor = '#ff0000' // Включаем светодиод (красный свет)
  }

  function turnOffLed() {
    ledLight.style.backgroundColor = '#000' // Выключаем светодиод (черный цвет)
  }
})
