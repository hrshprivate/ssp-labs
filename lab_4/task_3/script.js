document.addEventListener('DOMContentLoaded', function () {
  const shape = document.getElementById('shape')
  const circleButton = document.getElementById('circleButton')
  const squareButton = document.getElementById('squareButton')
  const triangleButton = document.getElementById('triangleButton')

  circleButton.addEventListener('click', function () {
    changeShape('circle')
  })

  squareButton.addEventListener('click', function () {
    changeShape('square')
  })

  triangleButton.addEventListener('click', function () {
    changeShape('triangle')
  })

  function changeShape(shapeType) {
    shape.className = ''
    shape.classList.add(shapeType)
  }
})
