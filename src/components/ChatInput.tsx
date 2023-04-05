import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  onSendMessage: (message: string) => void;
};

const ChatInput = ({ onSendMessage }: Props) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Flex>
      <Box flex={1}>
        <Input
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
        />
      </Box>
      <Button ml={2} onClick={handleSendMessage}>
        Send
      </Button>
    </Flex>
  );
};

export default ChatInput;