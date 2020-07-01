import styles from './Input.module.css';

interface Props {
  inputType?: string;
  value?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ inputType, value, onChange }: Props): JSX.Element => (
  <input
    onChange={onChange}
    className={styles.input}
    type={inputType}
    autoCapitalize="off"
    autoCorrect="off"
    value={value}
  />
);

Input.defaultProps = {
  inputType: 'text',
  value: '',
};

export default Input;
