
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Додано для роботи з абсолютними шляхами

const app = express();
const PORT = 12200;

const users = []; // Масив з користувачами

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Використовується для статичних файлів

// --get
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'auth.html')); // Використовується path.join для правильного шляху
});

// --post
app.post('/sign-up', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Будь ласка, заповніть усі поля' });
  }

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'Користувач вже існує' });
  }

  users.push({ username, password });
  res.json({ message: 'Реєстрація успішна' });
});

// Авторизація
app.post('/sign-in', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Будь ласка, заповніть усі поля' });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Невірні дані' });
  }

  const token = `fake-token-${Date.now()}`;
  res.json({ message: 'Авторизація успішна', token });
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
