import { AcademicBar } from './AcademicBar';
import { AcademicTable } from './AcademicUnitTable';

const AcademicUnit = () => {
  return (
    <>
      <div className="academic-unit">
        <AcademicBar />
        <div className="content">
          <AcademicTable id="" />
        </div>
      </div>
    </>
  );
};

export default AcademicUnit;
