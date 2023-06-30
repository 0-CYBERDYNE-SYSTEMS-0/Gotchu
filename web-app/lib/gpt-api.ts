import axios from 'axios';
import { config } from 'dotenv';

config();

export const GPT_API_KEY = process.env.GPT_API_KEY;

export const getGPTResponse = async (objective: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: objective,
        max_tokens: 60,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GPT_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return null;
  }
};