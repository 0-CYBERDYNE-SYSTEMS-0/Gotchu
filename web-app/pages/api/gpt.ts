import { NextApiRequest, NextApiResponse } from 'next';
import { getGPTResponse } from '../../lib/gpt-api';
import { Task } from '../../server/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { objective } = req.body;
    try {
      const steps = await getGPTResponse(objective);
      const task: Task = {
        id: Date.now().toString(),
        objective,
        steps,
        status: 'pending',
      };
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Error in GPT API call' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}