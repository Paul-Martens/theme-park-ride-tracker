import './TextField.css';

interface TextFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
  defaultValue: string;
}

function TextField({
  label,
  name,
  type = 'text',
  defaultValue,
}: TextFieldProps) {
  return (
    <div className="TextField">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
}

export { TextField };
