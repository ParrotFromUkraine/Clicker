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

// Обробка форми
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігає перезавантаженню сторінки

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Перевірка користувача
  const user = userList.find(u => u.username === username && u.password === password);

  const messageElement = document.getElementById('message');
  if (user) {
    messageElement.textContent = `Ласкаво просимо, ${user.username}!`;
    messageElement.style.color = 'green';

    // Перенаправлення на clicker.html
    window.location.href = './clicker/clicker.html';
  } else {
    messageElement.textContent = 'Невірні ім\'я користувача або пароль!';
    messageElement.style.color = 'red';
  }
});
