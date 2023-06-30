import { useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { getGPTResponse } from '../lib/gpt-api';
import TaskBreakdown from '../components/TaskBreakdown';
import SystemMessage from '../components/SystemMessage';

export default function Home() {
  const [objective, setObjective] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleObjectiveChange = (event) => {
    setObjective(event.target.value);
  };

  const handleObjectiveSubmit = async () => {
    const response = await getGPTResponse(objective);
    if (response.data) {
      setTasks([...tasks, response.data]);
    }
  };

  return (
    <VStack spacing={4}>
      <Box id="system-message">
        <SystemMessage />
      </Box>
      <Box id="task-input">
        <Input
          value={objective}
          onChange={handleObjectiveChange}
          placeholder="Enter your objective"
        />
        <Button onClick={handleObjectiveSubmit}>Submit</Button>
      </Box>
      <Box id="task-list">
        {tasks.map((task, index) => (
          <TaskBreakdown key={index} task={task} />
        ))}
      </Box>
    </VStack>
  );
}