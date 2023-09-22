document.addEventListener('DOMContentLoaded', function () {
  const balloon = document.getElementById('ball')
  const inflateButton = document.getElementById('ballIdButton')
  let inflationSpeed = 10
  let currentHeight = 100
  let intervalId

  inflateButton.addEventListener('click', function () {
    startInflation()
  })

  function startInflation() {
    intervalId = setInterval(inflateBalloon, 10) // Интервал 300 миллисекунд (0.3 секунды)
  }

  function inflateBalloon() {
    if (currentHeight < 200) {
      currentHeight += inflationSpeed
      balloon.style.height = currentHeight + 'px'
    } else {
      clearInterval(intervalId) // Остановить интервал после достижения максимального размера
    }
  }
})
