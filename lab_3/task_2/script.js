document.addEventListener('DOMContentLoaded', function () {
  const oddCheckbox = document.getElementById('oddCheckbox')
  const evenCheckbox = document.getElementById('evenCheckbox')
  const list = document.getElementById('list')
  const dropdownButton = document.getElementById('dropdownButton')
  const dropdownContent = document.getElementById('dropdownContent')

  oddCheckbox.addEventListener('change', function () {
    toggleSelection('odd')
  })

  evenCheckbox.addEventListener('change', function () {
    toggleSelection('even')
  })

  dropdownButton.addEventListener('click', function () {
    moveSelectedItemsToDropdown()
  })

  function toggleSelection(type) {
    const listItems = list.querySelectorAll('li')

    listItems.forEach((item, index) => {
      if (
        (type === 'odd' && index % 2 === 0) ||
        (type === 'even' && index % 2 !== 0)
      ) {
        item.classList.toggle('selected')
      }
    })
  }

  function moveSelectedItemsToDropdown() {
    if (oddCheckbox.checked || evenCheckbox.checked) {
      const selectedItems = list.querySelectorAll('.selected')

      selectedItems.forEach((item) => {
        const clonedItem = item.cloneNode(true)
        dropdownContent.appendChild(clonedItem)
        item.classList.remove('selected')
      })
    }
  }
})
