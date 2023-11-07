import React from 'react';
import { StyledDasboardCard } from './Dashboard-Card_styles';
interface CardProps {
  icon: string;
  title: string;
  data: number | undefined;
}

const DashboardCard: React.FC<CardProps> = ({ icon, title, data }) => {
  return (
    <>
      <StyledDasboardCard>
        <div className="dashboard-card">
          <div className="top">
            <img src={icon} alt="" />
            <p>{title}</p>
          </div>
          <div className="count">{data || '0'}</div>
        </div>
      </StyledDasboardCard>
    </>
  );
};

export default DashboardCard;
