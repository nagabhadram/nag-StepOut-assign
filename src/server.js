const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
const PORT = 8000

app.use(cors())
app.use(bodyParser.json())

// Mock user data
const mockUser = {
  username: 'testuser',
  password: 'password123',
}

// Login route
app.post('/api/login', (req, res) => {
  const {username, password} = req.body
  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign({username}, 'secret-key', {expiresIn: '1h'})
    res.json({token})
  } else {
    res.status(400).json({error: 'Invalid credentials'})
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
