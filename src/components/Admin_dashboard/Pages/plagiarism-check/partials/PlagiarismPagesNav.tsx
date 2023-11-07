import { useNavigate } from 'react-router';
import { arrowBtnLeft, exportBlack, shareIcon } from '../../../../../assets';
import { StyledPlagiarismCheck } from '../plagiarismChecker.Styles';
import SecondaryButton from './ButtonTemplate';
import ShareModal from '../../../../modals/ShareModal';
import { useState } from 'react';

interface PlagiarismNavProps {
  showButtons: boolean;
  tableRef?: React.RefObject<HTMLTableElement | null>;
}

const PlagiarismPagesNav: React.FC<PlagiarismNavProps> = ({
  showButtons,
  tableRef,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('../checker');
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

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StyledPlagiarismCheck>
        <div className="bars">
          <div className="bar">
            <div className="back">
              <img
                src={arrowBtnLeft}
                alt=""
                className="content-arrows"
                onClick={handleNavigate}
              />

              <div className="description">
                <h1>Plagiarism checker</h1>
                <p>Verify Originality of Your Content</p>
              </div>
            </div>
            {showButtons && (
              <div className="settings">
                <SecondaryButton
                  title="Export"
                  handleClick={print}
                  imgSrc={exportBlack}
                />
                <SecondaryButton
                  title="Share"
                  handleClick={() => {
                    setModalOpen(true);
                  }}
                  imgSrc={shareIcon}
                />
              </div>
            )}
          </div>
          {modalOpen && (
            <ShareModal
              handleModal={() => {}}
              closeModal={() => {
                setModalOpen(false);
              }}
            />
          )}
        </div>
      </StyledPlagiarismCheck>
    </>
  );
};

export default PlagiarismPagesNav;
