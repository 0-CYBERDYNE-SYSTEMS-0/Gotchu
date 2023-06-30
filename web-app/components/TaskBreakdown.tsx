import React from 'react';
import { Box, List, ListItem, Text } from '@chakra-ui/react';

interface Task {
  id: string;
  objective: string;
  steps: string[];
  status: string;
}

interface TaskBreakdownProps {
  tasks: Task[];
}

const TaskBreakdown: React.FC<TaskBreakdownProps> = ({ tasks }) => {
  return (
    <Box id="task-list">
      {tasks.map((task) => (
        <Box key={task.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Text
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {task.objective}
              </Text>
            </Box>

            <Box>
              <List spacing={3}>
                {task.steps.map((step, index) => (
                  <ListItem key={index}>
                    <Text>{step}</Text>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box d="flex" mt="5">
              <Box color="gray.500" fontWeight="semibold" letterSpacing="wide">
                Status: {task.status}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TaskBreakdown;