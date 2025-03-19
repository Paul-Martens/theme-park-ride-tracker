import { useState } from 'react';

import './EmailField.css';

interface EmailFieldProps {
  label: string;
  name: string;
  value?: string;
}

function EmailField({ label, name, value }: EmailFieldProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function onInvalid(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setErrorMessage(event.currentTarget.validationMessage);
  }

  return (
    <div className="EmailField">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        defaultValue={value}
        onInvalid={onInvalid}
        type="email"
        required
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export { EmailField };
