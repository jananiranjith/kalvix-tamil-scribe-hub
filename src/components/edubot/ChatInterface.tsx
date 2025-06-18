
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import MessageItem from './MessageItem';
import ChatInput from './ChatInput';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatInterfaceProps {
  selectedClass: string;
  messages: Message[];
  inputMessage: string;
  setInputMessage: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onBackToSelection: () => void;
}

const ChatInterface = ({ 
  selectedClass, 
  messages, 
  inputMessage, 
  setInputMessage, 
  onSendMessage, 
  onKeyPress, 
  onBackToSelection 
}: ChatInterfaceProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackToSelection}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center">
              <Bot className="h-5 w-5 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Edubot</h1>
              <p className="text-sm text-gray-300">Class {selectedClass} Tamil Assistant</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-white hover:text-black">
              Exit Chat
            </Button>
          </Link>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      </div>

      {/* Input Area */}
      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        onSendMessage={onSendMessage}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default ChatInterface;
