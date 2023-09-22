document.addEventListener('DOMContentLoaded', function () {
  const lastNameList = document.getElementById('lastNameList')
  const firstNameList = document.getElementById('firstNameList')
  const middleNameList = document.getElementById('middleNameList')
  const selectedNamesList = document.getElementById('selectedNamesList')
  const openDialogButton = document.getElementById('openDialogButton')
  const editDialog = document.getElementById('editDialog')
  const editField = document.getElementById('editField')
  const saveButton = document.getElementById('saveButton')
  const cancelButton = document.getElementById('cancelButton')

  openDialogButton.addEventListener('click', function () {
    editField.value = '' // Очищаем поле редактирования
    editDialog.style.display = 'block' // Показываем диалоговое окно
  })

  cancelButton.addEventListener('click', function () {
    editDialog.style.display = 'none' // Скрываем диалоговое окно при отмене
  })

  saveButton.addEventListener('click', function () {
    const inputText = editField.value.trim()
    if (inputText !== '') {
      const names = inputText.split(' ')
      if (names.length === 3) {
        // Добавляем фамилию, имя и отчество в соответствующие списки
        lastNameList.innerHTML += `<li>${names[0]}</li>`
        firstNameList.innerHTML += `<li>${names[1]}</li>`
        middleNameList.innerHTML += `<li>${names[2]}</li>`
        // Сортируем списки
        sortList(lastNameList)
        sortList(firstNameList)
        sortList(middleNameList)
        // Закрываем диалоговое окно
        editDialog.style.display = 'none'
      } else {
        alert("Введите информацию в формате 'Фамилия Имя Отчество'")
      }
    }
  })

  // Добавление выбранной фамилии в четвертый список
  lastNameList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      const selectedName = event.target.textContent
      event.target.remove() // Удаляем из первого списка
      addSelectedName(selectedName)
    }
  })

  // Функция для добавления выбранной фамилии в четвертый список
  function addSelectedName(name) {
    const listItem = document.createElement('li')
    listItem.textContent = name
    selectedNamesList.appendChild(listItem)
    sortList(selectedNamesList)
  }

  function sortList(list) {
    const items = Array.from(list.getElementsByTagName('li'))
    items.sort((a, b) => a.textContent.localeCompare(b.textContent))
    list.innerHTML = ''
    items.forEach((item) => list.appendChild(item))
  }
})
