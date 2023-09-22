document.addEventListener('DOMContentLoaded', function () {
  const redButton = document.getElementById('redButton')
  const yellowButton = document.getElementById('yellowButton')
  const greenButton = document.getElementById('greenButton')
  const trafficLight = document.getElementById('traffic-light')

  redButton.addEventListener('click', function () {
    changeLightColor('red')
  })

  yellowButton.addEventListener('click', function () {
    changeLightColor('yellow')
  })

  greenButton.addEventListener('click', function () {
    changeLightColor('green')
  })

  function changeLightColor(color) {
    const lights = trafficLight.querySelectorAll('.light')
    lights.forEach((light) => (light.style.backgroundColor = '#000'))
    trafficLight.querySelector(`.${color}`).style.backgroundColor = color
  }
})
