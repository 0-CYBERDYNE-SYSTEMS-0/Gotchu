import { Box } from "@chakra-ui/react";
import { SYSTEM_MESSAGE } from "../lib/system-message";

interface SystemMessageProps {
  message: string;
}

const SystemMessage: React.FC<SystemMessageProps> = ({ message }) => {
  return (
    <Box id="system-message" bg="tomato" w="100%" p={4} color="white">
      {SYSTEM_MESSAGE[message] || message}
    </Box>
  );
};

export default SystemMessage;