interface ButtonProps {
  label: string
  handleClick?: () => void
}

export const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button className="primary-button" onClick={handleClick}>
      {label}
    </button>
  )
}
