
import { useEffect, useRef, useState } from 'react'
import { Volume2, Square } from 'lucide-react'
import './ScientificNameVoice.css'

function ScientificNameVoice({ name }) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const utteranceRef = useRef(null)

  useEffect(() => {
    return () => {
      if (
        utteranceRef.current &&
        window.speechSynthesis
      ) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const handleSpeak = () => {
    if (!name || !('speechSynthesis' in window)) {
      return
    }

    const speechSynthesis = window.speechSynthesis

    // Stop the current pronunciation if this button is active.
    if (isSpeaking) {
      speechSynthesis.cancel()
      utteranceRef.current = null
      setIsSpeaking(false)
      return
    }

    // Stop any other genus pronunciation before starting this one.
    speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(name)

    utterance.lang = 'en-US'
    utterance.rate = 0.8
    utterance.pitch = 1

    utterance.onstart = () => {
      setIsSpeaking(true)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      utteranceRef.current = null
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      utteranceRef.current = null
    }

    utteranceRef.current = utterance
    speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      className={`scientific-name-voice ${
        isSpeaking ? 'speaking' : ''
      }`}
      onClick={handleSpeak}
      aria-label={
        isSpeaking
          ? `Stop pronunciation of ${name}`
          : `Listen to the pronunciation of ${name}`
      }
      title={
        isSpeaking
          ? 'Stop pronunciation'
          : 'Listen to pronunciation'
      }
    >
      {isSpeaking ? (
        <Square size={17} />
      ) : (
        <Volume2 size={19} />
      )}
    </button>
  )
}

export default ScientificNameVoice
