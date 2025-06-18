
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Save, FileText } from "lucide-react";

interface NotesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotesPanel = ({ isOpen, onClose }: NotesPanelProps) => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const handleSaveNote = () => {
    if (notes.trim()) {
      setSavedNotes(prev => [notes, ...prev]);
      setNotes('');
    }
  };

  const handleDeleteNote = (index: number) => {
    setSavedNotes(prev => prev.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 top-20 bottom-20 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-40 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-white" />
          <h3 className="text-white font-semibold">Notes</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 flex flex-col p-4 space-y-4">
        <div className="space-y-2">
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your notes here..."
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
          />
          <Button
            onClick={handleSaveNote}
            disabled={!notes.trim()}
            className="w-full bg-white text-black hover:bg-gray-200"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Note
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2">
          <h4 className="text-sm font-medium text-gray-300">Saved Notes</h4>
          {savedNotes.length === 0 ? (
            <p className="text-sm text-gray-400">No notes saved yet</p>
          ) : (
            savedNotes.map((note, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardContent className="p-3">
                  <p className="text-sm text-white whitespace-pre-wrap">{note}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteNote(index)}
                    className="mt-2 text-red-400 hover:text-red-300 text-xs"
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPanel;
