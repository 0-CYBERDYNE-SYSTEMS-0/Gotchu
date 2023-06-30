import { NextApiRequest, NextApiResponse } from 'next';

const SYSTEM_MESSAGE = {
  TASK_CREATED: 'Task has been created successfully.',
  TASK_UPDATED: 'Task has been updated successfully.',
  TASK_DELETED: 'Task has been deleted successfully.',
  SYSTEM_ERROR: 'An error occurred. Please try again.',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;

  if (!message || !SYSTEM_MESSAGE[message]) {
    return res.status(400).json({ error: 'Invalid system message.' });
  }

  return res.status(200).json({ message: SYSTEM_MESSAGE[message] });
}