import React, { useEffect, useState } from 'react';
import { useFetchDepartments } from '../../../../services/Api Hooks/useFetchDepartments';

interface CheckboxDropdownProps {
  endpoint: string;
}

const CheckboxDropdown: React.FC<CheckboxDropdownProps> = ({ endpoint }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [buttonContent, setButtonContent] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const { departments } = useFetchDepartments(endpoint);

  useEffect(() => {
    const storedOptions = localStorage.getItem('');
    if (storedOptions) {
      setSelectedOptions(JSON.parse(storedOptions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  useEffect(() => {
    const selectedFacultyNames = departments
      .filter((dept) => selectedOptions.includes(dept.id))
      .map((dept) => dept.facultyName);

    if (selectedFacultyNames.length > 0) {
      setButtonContent(selectedFacultyNames.join(', '));
    } else {
      setButtonContent('Select Options');
    }
  }, [selectedOptions, departments]);

  return (
    <div className="checkbox-dropdown">
      <button onClick={toggleDropdown}>{buttonContent}</button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          {departments.map((option) => (
            <label key={option.id}>
              <input
                type="checkbox"
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
              />{' '}
              {option.facultyName}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
