import { useState, useEffect } from 'react';
import { useFetchDepartments } from '../../../services/Api Hooks/useFetchDepartments';
import { StyledSelect } from './SelectStyles';

interface DepartmentSelectProps {
  onDepartmentSelect: (selectedDepartmentId: number) => void;
  endpoint: string;
}

function DepartmentSelect({
  onDepartmentSelect,
  endpoint,
}: DepartmentSelectProps) {
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  useEffect(() => {
    onDepartmentSelect(selectedDepartment);
  }, [selectedDepartment, onDepartmentSelect]);

  const { departments } = useFetchDepartments(endpoint);

  return (
    <StyledSelect>
      <select
        title="department"
        id="department"
        name="department"
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(parseInt(e.target.value))}
      >
        <option value="">Select an option</option>
        {Array.isArray(departments) && departments.length > 0 ? (
          departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.departmentName || dept.facultyName}
            </option>
          ))
        ) : (
          <option value="" disabled>
            Loading...
          </option>
        )}
      </select>
    </StyledSelect>
  );
}

export default DepartmentSelect;
