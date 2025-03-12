import './SubmitButton.css';

interface SubmitButtonProps {
  label: string;
  isDisabled?: boolean;
}

function SubmitButton({ label, isDisabled = false }: SubmitButtonProps) {
  return (
    <button className="SubmitButton" type="submit" disabled={isDisabled}>
      {label}
    </button>
  );
}

export { SubmitButton };
