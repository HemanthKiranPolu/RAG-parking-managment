'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send, X } from 'lucide-react'
import Image from 'next/image'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (!input) return
    const newMessage = { role: 'user', content: input }
    setMessages([...messages, newMessage])

    try {
      const response = await fetch('https://payload.vextapp.com/hook/UL9L93X0DI/catch/CSUSB chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Apikey': 'ghChSybx.xHZ6mdaxyU4h0C4KvTls23KnfqxtMVOg'
        },
        body: JSON.stringify({ payload: input })
      })

      if (!response.ok) {
        throw new Error('Failed to fetch response')
      }

      const data = await response.json()
      const botResponse = { role: 'assistant', content: data.text || 'No response from server' }
      setMessages((prevMessages) => [...prevMessages, botResponse])
    } catch (error) {
      console.error('Error:', error)
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: 'Error fetching response' }])
    }
    setInput('')
  }

  return (
    <>
      <Button className="fixed bottom-4 right-4 rounded-full w-16 h-16 shadow-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6 text-white" /> : <div className="w-full h-full overflow-hidden rounded-full"><Image src="/images/PAWS.png" alt="Chat Icon" fill style={{ objectFit: 'cover' }} /></div>}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-96 h-[32rem] flex flex-col shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
            <CardTitle className="flex items-center text-lg">
              <div className="w-6 h-6 overflow-hidden rounded-full mr-2">
                <Image src="/images/PAWS.png" alt="CSUSB Paw" width={24} height={24} style={{ objectFit: 'cover' }} />
              </div>
              CSUSB Parking Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow p-4 overflow-y-auto">
            <ScrollArea className="h-full">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === 'assistant' ? 'text-blue-600' : 'text-gray-800'}`}>
                  <div className={`p-3 rounded-lg ${message.role === 'assistant' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <strong>{message.role === 'assistant' ? 'AI: ' : 'You: '}</strong> {message.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex w-full">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about parking, permits, etc..." className="flex-grow mr-2" />
              <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
