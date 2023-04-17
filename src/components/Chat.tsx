import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import api from '../api';

type Message = {
    id: number;
    message: string;
    sender: string;
};

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await api.post<Message[]>('/message');
            setMessages(response.data);
            scrollToBottom();
        };

        fetchMessages();
    }, []);

    const handleSendMessage = async (message: string) => {
        const response = await api.post<Message>('/message', {
            message
        });
        setMessages([...messages, response.data]);
        scrollToBottom();

    };

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box flex={1} p={4}>
            <Box flex={1} overflowY="auto">
                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message.message}
                        sender={message.sender}
                    />
                ))}
                <div ref={chatEndRef} />
            </Box>
            <ChatInput onSendMessage={handleSendMessage} />
        </Box>
    );
};

export default Chat;