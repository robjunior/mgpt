import { Box, Flex, Text } from '@chakra-ui/react';

type Props = {
  message: string;
  sender: string;
};

const ChatMessage = ({ message, sender }: Props) => {
  return (
    <Flex flexDirection={sender === 'user' ? 'row-reverse' : 'row'}>
      <Box
        bg={sender === 'user' ? 'blue.500' : 'gray.200'}
        color={sender === 'user' ? 'white' : 'black'}
        borderRadius="lg"
        p={3}
        my={2}
        maxW="60%"
      >
        <Text fontSize="sm">{sender}</Text>
        <Text fontSize="md">{message}</Text>
      </Box>
    </Flex>
  );
};

export default ChatMessage;