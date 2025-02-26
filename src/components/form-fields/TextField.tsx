import { useState } from 'react';

import './TextField.css';

interface TextFieldProps {
  label: string;
  name: string;
  value?: string;
  type?: 'email' | 'password';
  required?: boolean;
  minLength?: number;
}

function TextField({
  label,
  name,
  value,
  type,
  required,
  minLength,
}: TextFieldProps) {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="TextField">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        defaultValue={value}
        type={type}
        required={required}
        minLength={minLength}
        onInput={(_) => {
          setError(null);
        }}
        onInvalid={(e) => {
          e.preventDefault();

          if (required && !e.currentTarget.value) {
            setError('This is a required field');
            return;
          }

          if (minLength && e.currentTarget.value.length < minLength) {
            setError(`Value has to be ${minLength} characters or longer`);
            return;
          }

          if (type === 'email') {
            setError('Not a valid email address');
            return;
          }

          setError('UNSPECIFIED ERROR');
        }}
      />

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export { TextField };
