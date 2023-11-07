import { StyleModal } from './ModalsForm.Styles';

interface InputProps {
  src?: string;
  name?: string;
  id: string;
  value?: string;
  styles?: string;
  placeholder?: string;
  required?: boolean;
  iconStyles?: string;
  type: React.HTMLInputTypeAttribute;
  onChange?: () => void;
}

export const Input = (props: InputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>Set Time</label>
      <label htmlFor="time" className="icon-style">
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          className={props.styles}
          required={props.required}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

const ModalsForm = () => {
  return (
    <StyleModal>
      <form className="form">
        <div className="form-group">
          <label htmlFor="date">Set Date</label>
          <label htmlFor="date" className="icon-style">
            <input
              type="date"
              id="date"
              name="Set Date"
              className="input-field"
              required
              placeholder="Eg 12 Sept 1993"
            />
          </label>
        </div>
        <Input
          type="time"
          id="time"
          value="time"
          placeholder="Enter time"
          styles="input-field"
        />
      </form>
    </StyleModal>
  );
};

export default ModalsForm;
