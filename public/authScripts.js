const button = document.getElementById('signUpButton')
const enableEye = document.getElementById('showPassword')
const disableEye = document.getElementById('password')
const password = document.getElementById(elementId)
const loginInfo = { email: '', password: '' }

const userList = [
  {
    userId: 1,
    username: 'alexRud',
    password: 'admin',
    param: {
      coins: 100,
      clicks: 100,
      upgrade: {
        autoClicker: false,
        autoClicker1: false,
      }
    }
  },
  {
    userId: 2,
    username: 'parrotKeshajan',
    password: '2099954890', // Пароль перетворено в рядок для консистентності
    param: {
      coins: 100,
      clicks: 100,
      upgrade: {
        autoClicker: false,
        autoClicker1: false,
      }
    }
  },
  {
    userId: 3,
    username: 'konovalovDan',
    password: 'spiderMAN',
    param: {
      coins: 100,
      clicks: 100,
      upgrade: {
        autoClicker: false,
        autoClicker1: false,
      }
    }
  }
];

// Робота з глазикомо
enableEye.addEventListener('click', function () {
  if (disableEye.type === 'password') {
    enableEye.src = './img/Show.png'
    disableEye.type = 'text'
  } else {
    enableEye.src = './img/Hide.png'
    disableEye.type = 'password'
  }
})

emailInput.addEventListener('input', function () {
  info.email = this.value
  console.log(`${info} - обект`)
  console.log(`${username} - логин`)
})

passwordInput.addEventListener('input', function () {
  info.password = this.value
  console.log(`${info} - обект `)
  console.log(`${password} - пароль`)
})


button.addEventListener('click', function () {
  event.preventDefault()
  console.log(emailInput.value)
  console.log(passwordInput.value)
})

// Проверка користувача
// --exit нада доделать 
