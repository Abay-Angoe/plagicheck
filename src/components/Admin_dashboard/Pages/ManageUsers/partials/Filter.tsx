import { StyledManageUsers } from '../ManageUsers_styles';

const Filter = () => {
  return (
    <>
      <StyledManageUsers>
        <div className="filter">
          <select name="filter" title="filter" id="filter">
            <option value="">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </StyledManageUsers>
    </>
  );
};

export default Filter;
