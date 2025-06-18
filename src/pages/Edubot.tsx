
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
        content: `வணக்கம், நான் உங்களுக்கு எப்படி உதவ முடியும்?`,
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
        content: "தமிழ் பாடம் பற்றிய உங்கள் கேள்வியை நான் செயலாக்குகிறேன்.",
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
