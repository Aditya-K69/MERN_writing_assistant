import { useState } from 'react'
import './global.css'

function Home() {
  const [visibility, setVisibility] = useState(false)
  const [text, setText] = useState('')

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white gap-6 p-6 text-center">
      <div>
        Welcome to Writing Assistant, an AI-powered tool that will help you quickly write and generate essays.
      </div>

      <div>
        Want to test out the website before signing up? Click the button below to preview all the features of the Assistant.
      </div>

      <button
        onClick={() => setVisibility(prev => !prev)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-3xl"
      >
        {visibility ? 'Hide Text Area' : 'Click to View Text Area'}
      </button>

{visibility && (
  <>
    <textarea
      maxLength={1000}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter a simple sentence to check for grammatical mistakes or enhance the writing style"
      className="w-full max-w-md h-32 p-3 text-black bg-white rounded resize-none mt-4"
    />
    
    <div className="flex gap-4 mt-4">
      <button className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 transition">
        Check Grammar
      </button>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-2xl hover:bg-purple-700 transition">
        Enhance Writing Style
      </button>
    </div>
  </>
)}
    </div>
  )
}

export default Home
