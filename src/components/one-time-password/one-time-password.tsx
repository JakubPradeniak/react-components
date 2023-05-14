import {
  CSSProperties,
  FocusEvent,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type OneTimePasswordProps = {
  numberOfFields: number;
  setValue: React.Dispatch<SetStateAction<string>>;
};

const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>): void => {
  const element = event.currentTarget;
  const keyPressed = event.key;

  if (keyPressed === 'Backspace' || keyPressed === 'ArrowLeft') {
    const previousInput =
      element.previousElementSibling as HTMLInputElement | null;
    previousInput?.focus();
    return;
  }

  if (keyPressed === 'ArrowRight') {
    const nextInput = element.nextElementSibling as HTMLInputElement | null;
    nextInput?.focus();
    return;
  }

  if (element.value && keyPressed !== 'Delete') {
    const nextInput = element.nextElementSibling as HTMLInputElement | null;
    nextInput?.focus();
  }
};

const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
  event.target.setSelectionRange(0, 1);
};

const inputStyle: CSSProperties = {
  width: '2rem',
  height: '2rem',
  borderRadius: '0.5rem',
  textAlign: 'center',
  lineHeight: '1.8rem',
  fontSize: '1.5rem',
};

const OneTimePassword = ({
  numberOfFields,
  setValue,
}: OneTimePasswordProps) => {
  const [otpValue, setOtpValue] = useState<string[]>(() =>
    new Array(numberOfFields).fill('')
  );

  useEffect(() => {
    setValue(otpValue.join(''));
  }, [otpValue, setValue]);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {otpValue.map((value, index) => (
        <input
          key={index}
          style={inputStyle}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(event) =>
            setOtpValue((prevState) =>
              prevState.map((v, i) => (index === i ? event.target.value : v))
            )
          }
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          autoFocus={index === 0}
        />
      ))}
    </div>
  );
};

export default OneTimePassword;
