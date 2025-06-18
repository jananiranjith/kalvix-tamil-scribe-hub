
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Send, Bot, User, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

  if (!chatStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Header */}
        <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-6 w-6 text-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-black" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Edubot
                </h1>
              </div>
            </Link>
          </div>
        </header>

        {/* Class Selection */}
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
          <Card className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-10 w-10 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome to Edubot</h2>
                <p className="text-gray-300 text-lg">Your AI-powered Tamil subject assistant</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold text-white mb-4 block">
                    Select your class:
                  </Label>
                  <RadioGroup value={selectedClass} onValueChange={setSelectedClass} className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
                      <RadioGroupItem value="10" id="class-10" className="border-gray-400" />
                      <Label htmlFor="class-10" className="text-white text-lg cursor-pointer flex-1">
                        Class 10 - Secondary School Tamil
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
                      <RadioGroupItem value="11" id="class-11" className="border-gray-400" />
                      <Label htmlFor="class-11" className="text-white text-lg cursor-pointer flex-1">
                        Class 11 - Higher Secondary Tamil
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
                      <RadioGroupItem value="12" id="class-12" className="border-gray-400" />
                      <Label htmlFor="class-12" className="text-white text-lg cursor-pointer flex-1">
                        Class 12 - Higher Secondary Tamil
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  onClick={handleStartChat}
                  disabled={!selectedClass}
                  className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Start Learning with Edubot
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setChatStarted(false)}
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
            <div
              key={message.id}
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
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-800 bg-black/50 backdrop-blur-md p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Tamil subject..."
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 pr-12 py-3 text-sm resize-none min-h-[48px]"
                multiline
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-white text-black hover:bg-gray-200 px-4 py-3 disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edubot;
