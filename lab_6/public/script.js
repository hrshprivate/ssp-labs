document.addEventListener('DOMContentLoaded', () => {
  const createUserForm = document.getElementById('createUserForm')
  const searchUserForm = document.getElementById('searchUserForm')
  const userList = document.getElementById('userList')
  const editUserForm = document.getElementById('editUserForm')
  const editEmailInput = document.getElementById('email')
  const editFullNameInput = document.getElementById('fullName')
  const editAddressInput = document.getElementById('address')
  const editUserIdInput = document.getElementById('editUserId')
  const cancelEditButton = document.getElementById('cancelEdit')

  // Функция для отправки GET-запроса к API и обновления списка пользователей
  const getUsers = async () => {
    try {
      const response = await fetch('/api/v1/users', { method: 'GET' })
      const users = await response.json()
      userList.innerHTML = '' // Очистка таблицы
      users.forEach((user) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${user.email}</td>
            <td>${user.fullName}</td>
            <td>${user.address}</td>
            <td>
              <button class="delete" data-id="${user._id}">Delete</button>
              <button class="edit" data-id="${user._id}">Edit</button>
            </td>
          `
        userList.appendChild(row)
      })
    } catch (error) {
      console.error(error)
    }
  }

  // Обработчик отправки формы создания пользователя
  createUserForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(createUserForm)
    try {
      const response = await fetch('/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      await response.json()
      createUserForm.reset()
      getUsers()
    } catch (error) {
      console.error(error)
    }
  })

  // Обработчик отправки формы поиска пользователя по имени
  searchUserForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const fullNameQuery = document.getElementById('fullNameQuery').value
    try {
      const response = await fetch(
        `/api/v1/users/search?fullName=${fullNameQuery}`
      )
      const users = await response.json()
      userList.innerHTML = '' // Очистка таблицы
      users.forEach((user) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${user.email}</td>
            <td>${user.fullName}</td>
            <td>${user.address}</td>
            <td>
              <button class="delete" data-id="${user._id}">Delete</button>
              <button class="edit" data-id="${user._id}">Edit</button>
            </td>
          `
        userList.appendChild(row)
      })
    } catch (error) {
      console.error(error)
    }
  })

  // Обработчик клика по кнопке "Delete" для удаления пользователя
  userList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete')) {
      const userId = event.target.getAttribute('data-id')
      console.log(userId)
      try {
        await fetch(`/api/v1/users/${userId}`, {
          method: 'DELETE',
        })
        getUsers()
      } catch (error) {
        console.error(error)
      }
    }
  })

  // Обработчик редактирования пользователя
  userList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('edit')) {
      console.log(event.target.classList.contains('edit'))
      const userId = event.target.getAttribute('data-id')
      try {
        const response = await fetch(`/api/v1/users/${userId}`, {
          method: 'GET',
        })
        const user = await response.json()
        editUserIdInput.value = user._id // Устанавливаем ID пользователя в скрытое поле
        editEmailInput.value = user.email
        editFullNameInput.value = user.fullName
        editAddressInput.value = user.address
        editUserForm.style.display = 'none' // Отображаем форму редактирования
      } catch (error) {
        console.error(error)
      }
    }
  })

  editUserForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(editUserForm)
    const userId = editUserIdInput.value // Получаем ID пользователя из скрытого поля
    console.log(JSON.stringify(Object.fromEntries(formData)))
    try {
      await fetch(`/api/v1/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      editUserForm.style.display = 'none' // Скрываем форму редактирования
      getUsers()
    } catch (error) {
      console.error(error)
    }
  })

  // Обработчик отмены редактировани
  cancelEditButton.addEventListener('click', (event) => {
    event.preventDefault()
    editUserForm.style.display = 'none' // Скрываем форму редактирования
  })

  getUsers()
})
