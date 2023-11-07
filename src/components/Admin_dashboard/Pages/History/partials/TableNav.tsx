import React from 'react';
import PrimaryButton from '../../plagiarism-check/partials/PrimaryButton';
import { exportIcon } from '../../../../../assets';
import { StyledTableNav } from './TableNav_Styles';
import Filter from '../../ManageUsers/partials/Filter';
import useDeleteSchedule from '../../../../../services/Api Hooks/useClearSchedule';
import { toast } from 'react-toastify';

interface UserBarProps {
  title: string;
  subTitle: string;
  showButton: boolean;
  tableRef?: React.RefObject<HTMLTableElement | null>;
}

const TableNav: React.FC<UserBarProps> = ({
  title,
  subTitle,
  showButton,
  tableRef,
}) => {
  const { deleteSchedule } = useDeleteSchedule();

  const handleClearSchedule = async () => {
    try {
      await deleteSchedule();
      toast('Cleared successful', {
        type: 'success',
      });
    } catch (err) {
      toast('Could not clear schedule', {
        type: 'error',
      });
    }
  };

  const print = () => {
    const table = tableRef?.current;
    if (table) {
      const printWindow = window.open('', '', 'width=600,height=600');
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Print Table</title>
            </head>
            <body>
              ${table.outerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }
  };
  return (
    <>
      <StyledTableNav>
        <div className="bars">
          <div className="bar">
            <div className="left">
              <h1>{title}</h1>
              <span>{subTitle}</span>
            </div>
            <div className="right">
              <Filter />
              <div className="buttons">
                {showButton && (
                  <PrimaryButton
                    title="Export"
                    imgSrc={exportIcon}
                    handleClick={print}
                  />
                )}
                {!showButton && (
                  <PrimaryButton
                    title={`Clear ${title}`}
                    imgSrc=""
                    handleClick={handleClearSchedule}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </StyledTableNav>
    </>
  );
};

export default TableNav;
