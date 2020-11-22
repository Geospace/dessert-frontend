import styles from './Input.module.css'

// A very global input component

interface Props {
  inputType?: string
  value?: string
  placeholder?: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({
  inputType,
  value,
  onChange,
  placeholder
}: Props): JSX.Element => (
  <input
    onChange={onChange}
    className={styles.input}
    type={inputType}
    autoCapitalize='off'
    autoCorrect='off'
    value={value}
    placeholder={placeholder}
  />
)

Input.defaultProps = {
  inputType: 'text',
  value: '',
  placeholder: ''
}

export default Input
