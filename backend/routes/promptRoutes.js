import { Router } from 'express'
import axios from 'axios'

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const router = Router()

// router.get('/prompt', async (req, res) => {
//   try {
//     // text to be translated
//     const prompt = `Translate the following English text to French: "Hello"`

//     // request to OpenAI

//     const chatCompletion = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: prompt }],
//       model: 'gpt-3.5-turbo'
//     })
//     console.log(chatCompletion)

//     res.json(chatCompletion.choices[0].message.content)
//   } catch (error) {
//     console.log(error)

//     res.json({ error })
//   }
// })

router.post('/prompt', async (req, res) => {
  const { prompt } = req.body

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `You are an expert resume writer with over 20 years of experience working with job seekers trying to land a role in tech. Highlight the 3 most important responsibilities in this job and respond in json form: ${prompt}`
        }
      ],
      model: 'gpt-3.5-turbo'
    })

    res.json(chatCompletion.choices[0].message.content)
  } catch (error) {
    console.log(error)

    res.json({ error })
  }
})

export default router
