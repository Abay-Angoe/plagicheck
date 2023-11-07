import React from 'react';
import { arrowBtnRight, placeholderImage } from '../../../../../assets';
import { StyledDashboardTable } from './DashboardTable_styles';
import { useNavigate } from 'react-router';
interface Department {
  departmentName?: string;
}

interface DataProps {
  id?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  staffId?: string;
  studentId?: string;
  profilePicture?: string;
  qualification?: string;
  documentTitle?: string;
  createdAt?: string;
  originality?: number;
  department?: Department;
  passed?: boolean;
}
interface UserTableProps {
  tableName: string;
  url: string;
  data: DataProps[];
  headers: string[] | Record<string, string>;
  showAll: boolean;
}

const DashboardTable: React.FC<UserTableProps> = ({
  data,
  tableName,
  headers,
  showAll,
  url,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(url);
  };
  return (
    <>
      <StyledDashboardTable>
        <div className="dashboard-table">
          <div className="title-bar">
            {tableName}
            <img
              src={arrowBtnRight}
              alt=""
              onClick={handleNavigate}
              className="view-all-button"
            />
          </div>
          <table className="user-table">
            <thead>
              <tr className="headrow">
                {Array.isArray(headers)
                  ? headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))
                  : Object.values(headers).map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((data) => (
                <tr key={data.id}>
                  <td className="name-column">
                    <img
                      src={data.profilePicture || placeholderImage}
                      alt=""
                      className="profile-pic"
                    />
                    {data.name || data.documentTitle}
                  </td>
                  <td>{data.staffId || data.studentId || data.createdAt}</td>
                  <td>
                    {data.email && data.email.length > 15 ? (
                      <>
                        <span className="truncated-email">
                          {data.email.slice(0, 15)}...
                        </span>
                      </>
                    ) : (
                      data.department?.departmentName
                    )}
                  </td>
                  <td>{data.phoneNumber || data.originality}</td>
                  {showAll && (
                    <>
                      <td>
                        {typeof data.department === 'object' ? (
                          <span>{data.department.departmentName}</span>
                        ) : (
                          <span>{data.department}</span>
                        )}
                      </td>
                      <td>{data.qualification}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </StyledDashboardTable>
    </>
  );
};

export default DashboardTable;
