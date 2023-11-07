import React, { useState } from 'react';
import { StyledAddUsers } from './Add-users';
import '../../index.css';
import DepartmentSelect from './partials/DepartmentSelect';
import { closeIcon } from '../../assets/index';
import {
  validateForm,
  ValidationErrors,
} from '../../services/formValidation/FormValidation';
import { useAddUser } from '../../services/Api Hooks/useAddUser';
import 'react-toastify/dist/ReactToastify.css';
import useFetchUserData from '../../services/Api Hooks/useFetchLecturerData';
import { toast } from 'react-toastify';

export interface AddUsersProps {
  closeModal: () => void;
  title: string;
  endpoint: string;
  showOptionalFields?: boolean;
}

export const AddLecturers: React.FC<AddUsersProps> = ({
  closeModal,
  title,
  endpoint,
  showOptionalFields,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [department, setDepartment] = useState<string | number | undefined>(
    undefined
  );
  const [qualification, setQualification] = useState<string | undefined>(
    undefined
  );
  const [isFormSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    qualification: '',
    department: '',
    form: '',
  });

  const { addUser } = useAddUser(endpoint);
  const { fetchData, data } = useFetchUserData(endpoint);

  const handleFormValidation = () => {
    const validationErrors: ValidationErrors = validateForm(
      name,
      email,
      number,
      qualification || ''
      //department || ''
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors({ ...errors, ...validationErrors });
      return false;
    }

    setErrors({
      name: '',
      email: '',
      number: '',
      qualification: '',
      department: '',
      form: '',
    });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleFormValidation()) {
      return;
    }

    // const result = await addUser(
    //   name,
    //   email,
    //   number,
    //   department,
    //   qualification
    // );

    let result;

    if (showOptionalFields) {
      result = await addUser(name, email, number, department, qualification);
      console.log(result);
    } else {
      result = await addUser(name, email, number);
      console.log(result);
    }
    if (result.success) {
      toast('Added successful', {
        type: 'success',
      });
      console.log('result');
      closeModal();
      console.log(result);
      fetchData();
      console.log(data);
    } else {
      toast(result.error || 'An error occurred while adding the user', {
        type: 'error',
      });
    }
  };

  return (
    <StyledAddUsers>
      <section id="modal">
        <div className="add-users">
          <div className="title">
            <h1>{title}</h1>
            <img src={closeIcon} alt="" onClick={closeModal} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label>Full name *</label>
              <input
                type="text"
                title="firstname"
                placeholder="Enter first name here"
                onChange={(e) => setName(e.target.value)}
                className={`${errors.name ? 'error' : ''} ${
                  isFormSubmitted ? 'success' : ''
                }`}
              />
              {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>

            <div className="form-input">
              <label>Email address *</label>
              <input
                type="email"
                title="email"
                placeholder="Eg. johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className={`${errors.email ? 'error' : ''} ${
                  isFormSubmitted ? 'success' : ''
                }`}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            <div className="form-input">
              <label>Phone number *</label>
              <input
                type="text"
                title="number"
                placeholder="Eg. +475 23 409 7399"
                onChange={(e) => setNumber(e.target.value)}
                className={`${errors.number ? 'error' : ''} ${
                  isFormSubmitted ? 'success' : ''
                }`}
              />
              {errors.number && (
                <div className="error-message">{errors.number}</div>
              )}
            </div>

            {showOptionalFields && (
              <>
                <div className="form-input department">
                  <label>Department *</label>
                  <DepartmentSelect
                    endpoint="/department"
                    onDepartmentSelect={setDepartment}
                  />
                  {errors.department && (
                    <div className="error-message">{errors.department}</div>
                  )}
                </div>

                <div className="form-input qualification">
                  <label>Qualification *</label>
                  <input
                    type="text"
                    title="qualification"
                    placeholder="Enter qualification"
                    onChange={(e) => setQualification(e.target.value)}
                    className={`${errors.qualification ? 'error' : ''} ${
                      isFormSubmitted ? 'success' : ''
                    }`}
                  />
                  {errors.qualification && (
                    <div className="error-message">{errors.qualification}</div>
                  )}
                </div>
              </>
            )}

            <div className="form-error">
              {errors.form && (
                <div className="error-message">
                  Please fill in all the required fields and ensure that the
                  information is accurate.
                </div>
              )}
            </div>

            <div className="buttons">
              <button onClick={closeModal} className="btn-secondary">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="btn-primary"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </section>
    </StyledAddUsers>
  );
};
