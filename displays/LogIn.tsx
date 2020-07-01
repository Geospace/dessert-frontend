import { useState } from 'react';
import Input from '../components/Input';

import styles from './LogIn.module.css';
import LargeButton from '../components/LargeButton';

const Label = ({ children }: { children: string }): JSX.Element => (
  <label className={styles.label}>{children}</label>
);

const SignIn = (): JSX.Element => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  return (
    <div className={styles.box}>
      <div className={styles.group}>
        <Label>Email address</Label>
        <Input
          value={email}
          onChange={(e): void => updateEmail(e.currentTarget.value)}
        />
      </div>

      <div className={styles.group}>
        <Label>Password</Label>
        <Input
          value={password}
          onChange={(e): void => updatePassword(e.currentTarget.value)}
          inputType="password"
        />
      </div>

      <LargeButton>Log In</LargeButton>
    </div>
  );
};

export default SignIn;
