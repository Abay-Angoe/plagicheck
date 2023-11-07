interface InputPropTypes {
  label: string;
  title?: string;
  placeholder: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputPropTypes> = ({
  label,
  title,
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <>
      <div className="input-box">
        <label>{label}</label>
        <input
          type={type || 'text'}
          title={title}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
