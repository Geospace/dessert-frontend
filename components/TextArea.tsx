import styles from './TextArea.module.css'

// A very global input component

interface Props {
  value?: string
  placeholder?: string
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ value, onChange, placeholder }: Props): JSX.Element => (
  <textarea
    onChange={onChange}
    className={styles.input}
    autoCapitalize='off'
    autoCorrect='off'
    value={value}
    placeholder={placeholder}
  />
)

TextArea.defaultProps = {
  inputType: 'text',
  value: '',
  placeholder: ''
}

export default TextArea
