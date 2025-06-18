
import React from 'react';
import { Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface MessageItemProps {
  message: Message;
}

const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <div
      className={`flex items-start space-x-3 ${
        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
      }`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        message.sender === 'user' 
          ? 'bg-gradient-to-br from-gray-600 to-gray-700' 
          : 'bg-gradient-to-br from-white to-gray-300'
      }`}>
        {message.sender === 'user' ? (
          <User className="h-5 w-5 text-white" />
        ) : (
          <Bot className="h-5 w-5 text-black" />
        )}
      </div>
      <div className={`max-w-3xl p-4 rounded-2xl ${
        message.sender === 'user'
          ? 'bg-gradient-to-br from-gray-700 to-gray-800 text-white'
          : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 text-white'
      }`}>
        <p className="text-sm leading-relaxed">{message.content}</p>
        <p className={`text-xs mt-2 ${
          message.sender === 'user' ? 'text-gray-300' : 'text-gray-400'
        }`}>
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
