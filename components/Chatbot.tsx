'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send, X } from 'lucide-react'
import Image from 'next/image'

const fetchChatbotResponse = async (input: string) => {
  try {
    const response = await fetch('http://127.0.0.1:3002/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors', // Ensures CORS handling
      body: JSON.stringify({ query: input }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    return 'Sorry, I am having trouble connecting to the server.';
  }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    setIsTyping(true);

    try {
      const botResponse = await fetchChatbotResponse(input);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: botResponse }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: 'Error fetching response. Please try again later.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (isFirstOpen) {
      setMessages([{ role: 'assistant', content: "Welcome to CSUSB Parking Assistant! How can I help you today?" }]);
      setIsFirstOpen(false);
    }
  }, [isFirstOpen]);

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 shadow-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Image src="/images/PAWS.png" alt="Chat Icon" width={48} height={48} />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-96 h-[32rem] flex flex-col shadow-xl border rounded-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-lg">
              <Image src="/images/PAWS.png" alt="CSUSB Paw" width={24} height={24} />
              CSUSB Parking Assistant
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-grow p-4 overflow-y-auto">
            <ScrollArea className="h-full">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start mb-4 ${message.role === 'assistant' ? 'text-blue-600' : 'text-gray-800'}`}>
                  {message.role === 'assistant' ? (
                    <div className="flex items-center">
                      <Image src="/images/bot-icon.png" alt="Bot" width={30} height={30} className="rounded-full mr-2" />
                      <div className="p-3 rounded-lg bg-blue-100 max-w-[80%]">{message.content}</div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-end w-full">
                      <div className="p-3 rounded-lg bg-gray-100 max-w-[80%] ml-auto">{message.content}</div>
                      <Image src="/images/user-icon.png" alt="User" width={30} height={30} className="rounded-full ml-2" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator ml-2">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}
            </ScrollArea>
          </CardContent>

          <CardFooter className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex w-full">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about parking, permits, etc..." className="flex-grow mr-2 rounded-lg" />
              <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700 rounded-full p-2">
                <Send className="w-5 h-5 text-white" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}

      <style jsx>{`
        .typing-indicator {
          display: flex;
          justify-content: flex-start;
          gap: 5px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #007bff;
          animation: typing 1s infinite ease-in-out;
        }
        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.3s; }
        .dot:nth-child(3) { animation-delay: 0.6s; }
        @keyframes typing {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
