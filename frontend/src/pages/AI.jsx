import { useEffect, useRef, useState } from 'react'
import './AI.css'
import ReactMarkdown from 'react-markdown'

const API_URL = 'http://localhost:8081/api/ai/chat'

const suggestedQuestions = [
  'How often should I water my cactus?',
  'Why is my cactus turning yellow?',
  'What is the best soil for cacti?',
  'How can I propagate a cactus?',
]

function AI() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hello! 🌵 I'm Cactora AI, your cactus companion. Ask me anything about cactus species, care, watering, sunlight, or growing conditions.",
    },
  ])

  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [messages, isLoading])

  async function sendMessage(messageText = input) {
    const message = messageText.trim()

    if (!message || isLoading) return

    if (message.length > 2000) {
      setError('Please keep your message under 2000 characters.')
      return
    }

    setError('')
    setInput('')
    setIsLoading(true)

    setMessages((previous) => [
      ...previous,
      { role: 'user', content: message },
    ])

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        let errorMessage = 'Unable to get a response from Cactora AI.'

        if (response.status === 400) {
          errorMessage = 'Please check your message and try again.'
        } else if (response.status === 429) {
          errorMessage =
            'Too many requests. Please wait a moment and try again.'
        } else if (response.status >= 500) {
          errorMessage =
            'The AI service is temporarily unavailable. Please try again.'
        }

        throw new Error(errorMessage)
      }

      const data = await response.json()

      if (!data.answer || typeof data.answer !== 'string') {
        throw new Error('Cactora AI returned an empty response.')
      }

      setMessages((previous) => [
        ...previous,
        { role: 'assistant', content: data.answer },
      ])
    } catch (err) {
      setError(
        err instanceof TypeError
          ? 'Unable to connect to Cactora AI. Please check that the backend is running.'
          : err.message,
      )
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage()
  }

  return (
    <section className="page cactora-ai-page">
      <div className="page-content cactora-ai-content">
        <header className="ai-header">
          <div className="ai-icon" aria-hidden="true">
            🌵
          </div>

          <p className="page-label">MEET YOUR PLANT COMPANION</p>

          <h1 className="page-title">
            Cactora <span>AI</span>
          </h1>

          <p className="page-description">
            Your intelligent cactus companion. Get helpful guidance on
            cactus care, species, growing conditions, and more.
          </p>

          <div className="ai-status">
            <span className="ai-status-dot" />
            Ready to help you grow
          </div>
        </header>

        <div className="ai-chat-card">
          <div className="ai-chat-heading">
            <div>
              <h2>Ask Cactora</h2>
              <p>Your personal cactus care assistant</p>
            </div>

            <span className="ai-chat-emoji" aria-hidden="true">
              🌱
            </span>
          </div>

          <div
            className="ai-messages"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((message, index) => (
              <div
                className={`ai-message-row ${
                  message.role === 'user' ? 'user-message-row' : ''
                }`}
                key={`${message.role}-${index}`}
              >
                {message.role === 'assistant' && (
                  <div className="ai-message-avatar" aria-hidden="true">
                    🌵
                  </div>
                )}

                <div
                  className={`ai-message ${
                    message.role === 'user'
                      ? 'user-message'
                      : 'assistant-message'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  ) : (
                    message.content
                  )}
                </div>

                {message.role === 'user' && (
                  <div className="user-message-avatar" aria-hidden="true">
                    You
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="ai-message-row">
                <div className="ai-message-avatar" aria-hidden="true">
                  🌵
                </div>

                <div
                  className="ai-message assistant-message ai-typing"
                  role="status"
                  aria-label="Cactora AI is thinking"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="ai-suggestions">
              <p>Not sure what to ask? Try one of these:</p>

              <div className="ai-suggestion-list">
                {suggestedQuestions.map((question) => (
                  <button
                    className="ai-suggestion"
                    key={question}
                    type="button"
                    disabled={isLoading}
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                    <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="ai-error" role="alert">
              <span>{error}</span>
              <button type="button" onClick={() => setError('')}>
                Dismiss
              </button>
            </div>
          )}

          <form className="ai-input-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="cactora-ai-input">
              Ask Cactora AI a question
            </label>

            <textarea
              ref={inputRef}
              id="cactora-ai-input"
              className="ai-input"
              placeholder="Ask anything about your cactus..."
              value={input}
              onChange={(event) => {
                setInput(event.target.value)

                if (error) setError('')
              }}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' &&
                  !event.shiftKey &&
                  !event.nativeEvent.isComposing
                ) {
                  event.preventDefault()
                  handleSubmit(event)
                }
              }}
              maxLength={2000}
              rows={1}
              disabled={isLoading}
            />

            <button
              className="ai-send-button"
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              title="Send message"
            >
              {isLoading ? '…' : '➤'}
            </button>
          </form>

          <p className="ai-input-hint">
            Press Enter to send · Shift + Enter for a new line
          </p>
        </div>

        <p className="ai-disclaimer">
          Cactora AI can occasionally make mistakes. Verify important
          plant-care advice when needed.
        </p>
      </div>
    </section>
  )
}

export default AI