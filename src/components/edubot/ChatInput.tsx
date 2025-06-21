
import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

const ChatInput = ({ inputMessage, setInputMessage, onSendMessage, onKeyPress }: ChatInputProps) => {
  return (
    <div className="border-t border-gray-800 bg-black/50 backdrop-blur-md p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={onKeyPress}
              placeholder="Ask me anything about Tamil subject..."
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 pr-12 py-3 text-sm resize-none min-h-[48px]"
            />
          </div>
          <Button
            onClick={onSendMessage}
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
  );
};

export default ChatInput;
