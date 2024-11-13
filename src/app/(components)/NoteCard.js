'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';


const NoteCard = () => {

  const [note, setNote] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem('Note');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem('Note', e.target.value);
  };

  const clear = () => {
    setNote('');
    localStorage.removeItem('Note');
  };

  return (
    <Card className="w-full h-full shadow-lg flex-col flex-grow-1">
      <CardHeader>
        <h2 className="text-lg font-bold">Notes</h2>
      </CardHeader>
      <CardContent>
        
        <div className="space-y-4">
          <Textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Write something here..."
            rows={10}
            className="w-full p-2 border rounded-md"
          />
            <Button variant="outlined" color="primary" onClick={clear}>
              Clear Note
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;