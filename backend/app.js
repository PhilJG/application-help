import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// import the prompt router module
import promptRoute from './routes/promptRoutes.js'

const app = express()

app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

// Tell the app to use the router
app.use(promptRoute)

app.listen(4000, () => {
  console.log('Server running on port 4000')
})

// import http from 'http'
// const server = http.createServer(async (req, res) => {})
// server.listen(4000, () => {
//   console.log('READY!')
// })

// //routes
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/products', (req, res) => {
//   const products = [
//     { id: 1, name: 'Product A', price: 100 },
//     { id: 2, name: 'Product B', price: 150 }
//     // Add more products as needed
//   ]
//   res.send(products)
// })

// app.get('/sendPrompt', async (req, res) => {
//   const prompt = 'Say yes this is working if you see this prompt'
//   const response = prompt
//   res.json({ response })
// })

// app.listen(4000, () => {
//   console.log('READY OR NOT!')
// })
