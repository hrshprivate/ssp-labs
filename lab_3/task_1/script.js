document.addEventListener('DOMContentLoaded', function () {
  const ul1 = document.getElementById('ul1')
  const ul2 = document.getElementById('ul2')
  const ul3 = document.getElementById('ul3')
  const addBtn = document.getElementById('addBtn')
  const updateBtn = document.getElementById('updateBtn')
  const removeBtn = document.getElementById('removeBtn')

  function moveItem(fromList, toList) {
    const selectedItems = fromList.querySelectorAll('.selected')
    if (selectedItems) {
      selectedItems.forEach((item) => {
        item.classList.remove('selected')
        toList.appendChild(item)
        item.classList.add('selected')
      })
    }
  }

  ul1.addEventListener('click', function () {
    moveItem(ul1, ul2)
  })

  ul2.addEventListener('click', function () {
    moveItem(ul2, ul3)
  })

  ul3.addEventListener('click', function () {
    moveItem(ul3, ul1)
  })

  addBtn.addEventListener('click', function () {
    const newItemText = prompt('Enter a new item:')
    if (newItemText) {
      const newItem = document.createElement('li')
      newItem.classList.add('selected')
      newItem.textContent = newItemText
      ul2.appendChild(newItem)
    }
  })

  updateBtn.addEventListener('click', function () {
    const upItemText = prompt('Enter a exists item:')
    const items = ul2.querySelectorAll('.selected')

    items.forEach((element) => {
      if (element.textContent === upItemText) {
        const newItemText = prompt('Enter a new updated item:')
        element.textContent = newItemText
      } else return 'Dont have text yet'
    })
  })

  removeBtn.addEventListener('click', function () {
    const delItemText = prompt('Enter a exists item:')
    const items = ul2.querySelectorAll('.selected')

    items.forEach((element) => {
      if (element.textContent === delItemText) {
        element.remove()
      } else return 'Dont have text yet'
    })
  })
})
