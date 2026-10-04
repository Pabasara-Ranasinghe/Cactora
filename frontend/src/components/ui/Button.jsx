function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
}) {
  const baseStyles = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  `

  const variants = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--color-white)',
    },
    secondary: {
      backgroundColor: 'var(--surface-secondary)',
      color: 'var(--text-primary)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border)',
    },
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        ...variants[variant],
        ...Object.fromEntries(
          baseStyles
            .trim()
            .split('\n')
            .map((line) => {
              const [property, value] = line.split(':').map((item) => item.trim())
              const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) =>
                letter.toUpperCase(),
              )

              return [camelCaseProperty, value.replace(';', '')]
            }),
        ),
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  )
}

export default Button