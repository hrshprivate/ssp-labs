document.addEventListener('DOMContentLoaded', function () {
  const shape = document.getElementById('shape')
  const moveLeftButton = document.getElementById('moveLeftButton')
  const moveRightButton = document.getElementById('moveRightButton')
  let currentPosition = 0

  moveLeftButton.addEventListener('click', function () {
    moveShape('left')
  })

  moveRightButton.addEventListener('click', function () {
    moveShape('right')
  })

  function moveShape(direction) {
    const step = 20
    if (direction === 'left') {
      currentPosition -= step
    } else if (direction === 'right') {
      currentPosition += step
    }

    console.log(currentPosition)

    if (currentPosition >= 0) {
      shape.style.left = currentPosition + 'px'
      shape.style.right = 'auto'
    } else {
      shape.style.left = 'auto'
      shape.style.right = -currentPosition + 'px'
    }
  }
})
