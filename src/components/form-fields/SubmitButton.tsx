import './SubmitButton.css';

interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
}

function SubmitButton({ label, disabled }: SubmitButtonProps) {
  return (
    <button className="SubmitButton" type="submit" disabled={disabled}>
      {label}
    </button>
  );
}

export { SubmitButton };
