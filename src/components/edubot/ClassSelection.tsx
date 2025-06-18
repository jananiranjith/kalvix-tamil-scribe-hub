
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Bot, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ClassSelectionProps {
  selectedClass: string;
  setSelectedClass: (value: string) => void;
  onStartChat: () => void;
}

const ClassSelection = ({ selectedClass, setSelectedClass, onStartChat }: ClassSelectionProps) => {
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
                onClick={onStartChat}
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
};

export default ClassSelection;
