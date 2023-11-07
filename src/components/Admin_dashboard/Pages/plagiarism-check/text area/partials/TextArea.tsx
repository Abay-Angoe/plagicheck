import React from 'react';

interface TextAreainterfaceProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextArea: React.FC<TextAreainterfaceProps> = ({
  value,
  onChange,
  placeholder,
}) => (
  <textarea
    rows={10}
    cols={40}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  ></textarea>
);

export default TextArea;
