const crypto = require("crypto")
const users = [];
let upgrades = [
  {
    id: 1,
    name: "Click Accelerator",
    description: "speed of earning x10",
    price: 40000
  },
  {
    id: 2,
    name: "Coin Multiplier",
    description: "coins per click x2",
    price: 25000
  },
  {
    id: 3,
    name: "Power Tap",
    description: "special ability every 30 seconds",
    price: 75000
  }
];


function encodePassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function generateToken(email) {
  const timestamp = Date.now().toString();
  return crypto
    .createHash("sha256")
    .update(email + timestamp)
    .digest("hex");
}

module.exports = { encodePassword, generateToken };
