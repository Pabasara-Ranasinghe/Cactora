import { useTheme } from './context/ThemeContext.jsx'
import Button from './components/ui/Button.jsx'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cactora</h1>

      <p>Discover. Learn. Grow.</p>

      <Button onClick={toggleTheme} variant="primary">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </Button>

      <Button variant="secondary">
        Secondary Button
      </Button>

      <Button variant="outline">
        Outline Button
      </Button>
    </div>
  )
}

export default App