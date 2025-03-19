import { useState } from 'react';

import './PasswordField.css';

interface PasswordFieldProps {
  label: string;
  name: string;
  value?: string;
}

function PasswordField({ label, name, value }: PasswordFieldProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function onInvalid(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setErrorMessage(event.currentTarget.validationMessage);
  }

  return (
    <div className="PasswordField">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        defaultValue={value}
        onInvalid={onInvalid}
        type="password"
        required
        minLength={6}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export { PasswordField };
