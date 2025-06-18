
import React, { useState } from 'react';
import ClassSelection from '@/components/edubot/ClassSelection';
import ChatInterface from '@/components/edubot/ChatInterface';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Edubot = () => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatStarted, setChatStarted] = useState(false);

  const handleStartChat = () => {
    if (selectedClass) {
      setChatStarted(true);
      const welcomeMessage: Message = {
        id: '1',
        content: `Hello! I'm your Tamil subject assistant for Class ${selectedClass}. I'm here to help you with Tamil literature, grammar, poetry, and any other Tamil subject questions. How can I assist you today?`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm processing your question about Tamil subject. This is a demo response - in the actual implementation, I would provide detailed assistance with your Tamil studies including explanations, examples, and practice questions.",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage, botResponse]);
      setInputMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBackToSelection = () => {
    setChatStarted(false);
    setMessages([]);
    setInputMessage('');
  };

  if (!chatStarted) {
    return (
      <ClassSelection
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        onStartChat={handleStartChat}
      />
    );
  }

  return (
    <ChatInterface
      selectedClass={selectedClass}
      messages={messages}
      inputMessage={inputMessage}
      setInputMessage={setInputMessage}
      onSendMessage={handleSendMessage}
      onKeyPress={handleKeyPress}
      onBackToSelection={handleBackToSelection}
    />
  );
};

export default Edubot;
