import React, { useEffect, useState } from 'react';
import { StyledPlagiarismCheck } from './plagiarismChecker.Styles';
import { useFileUpload } from '../../../../services/Api Hooks/useFileUpload';
import PlagiarismResults from './Report/Report';
import { arrowBtnLeft, arrowBtnRight, trashIcon } from '../../../../assets';
import SecondaryButton from './partials/ButtonTemplate';
import FileUploadButton from './text area/FileUploadBtn';
import TextArea from './text area/partials/TextArea';

export interface Match {
  startIndex: number;
  endIndex: number;
}

const PlagiarismChecker: React.FC = () => {
  const {
    handleFileUpload,
    uploadedFiles,
    results,
    setUploadedFiles,
    sendToBackend,
  } = useFileUpload();
  const [displayedResults, setDisplayedResults] = useState(results);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  const [highlightedContent, setHighlightedContent] = useState<string>('');

  useEffect(() => {
    setDisplayedResults(results);
  }, [results]);

  const isSentencePlagiarized = (
    sentence: string,
    matches: string[] | undefined
  ) => {
    if (matches) {
      const lowerCaseSentence = sentence.toLowerCase();
      return matches.some((match) =>
        lowerCaseSentence.includes(match.toLowerCase())
      );
    }
    return false;
  };

  const highlightPlagiarizedSentences = (
    content: string,
    matches: string[]
  ) => {
    const sentences = content.split('.');
    return sentences.map((sentence, index) => (
      <span
        key={index}
        style={{
          backgroundColor: isSentencePlagiarized(sentence, matches)
            ? '#b3b3ff'
            : 'transparent',
        }}
      >
        {sentence.trim() + '.'}
      </span>
    ));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedContent = e.target.value;

    const updatedUploadedFiles = [...uploadedFiles];

    if (
      currentFileIndex >= 0 &&
      currentFileIndex < updatedUploadedFiles.length
    ) {
      updatedUploadedFiles[currentFileIndex].content = updatedContent;

      setUploadedFiles(updatedUploadedFiles);
    }
  };

  const handleNextFile = () => {
    if (currentFileIndex < uploadedFiles.length - 1) {
      setCurrentFileIndex(currentFileIndex + 1);
    }
  };

  const handlePreviousFile = () => {
    if (currentFileIndex > 0) {
      setCurrentFileIndex(currentFileIndex - 1);
    }
  };

  const handleClear = () => {
    window.location.reload();
  };

  useEffect(() => {
    setDisplayedResults(results);
    setHighlightedContent(uploadedFiles[currentFileIndex]?.content || '');
  }, [results, currentFileIndex, uploadedFiles]);

  const title = uploadedFiles[currentFileIndex]?.title || '';
  const content = uploadedFiles[currentFileIndex]?.content || '';

  const handleScanClick = async () => {
    try {
      if (!title || !content) {
        console.error('Title or content is missing.');
        return;
      }

      await sendToBackend({ title, content });
      console.log('Recheck initiated successfully.');
    } catch (error) {
      console.error('Error rechecking:', error);
    }
  };

  return (
    <StyledPlagiarismCheck>
      <div className="main">
        <div className="bars">
          <div className="bar">
            <div className="description">
              <h1>Plagiarism checker</h1>
              <p>Verify Originality of Your Content</p>
            </div>
            <div className="settings">
              <SecondaryButton
                title="Clear"
                handleClick={handleClear}
                imgSrc={trashIcon}
              />
            </div>
          </div>
          <div className="content">
            <img
              src={arrowBtnLeft}
              alt=""
              className="content-arrows"
              onClick={handlePreviousFile}
            />
            <div className="content-name">
              <h3 className="filename">
                Title: {uploadedFiles[currentFileIndex]?.title}
              </h3>
              <p className="filecount">
                Content items: {currentFileIndex + 1}/{uploadedFiles.length}
              </p>
            </div>
            <img
              src={arrowBtnRight}
              alt=""
              className="content-arrows"
              onClick={handleNextFile}
            />
          </div>
        </div>
        <div className="checker-field">
          <div className={`textarea ${results.length > 0 ? 'reduce' : ''}`}>
            {highlightedContent.length <= 0 && (
              <TextArea
                value={uploadedFiles[currentFileIndex]?.content || ''}
                onChange={handleTextAreaChange}
                placeholder="Type or upload pdf, txt, doc or docx here"
              />
            )}

            {highlightedContent.length > 0 && (
              <div className="highlighted-content">
                {highlightPlagiarizedSentences(
                  uploadedFiles[currentFileIndex]?.content || '',
                  results[0]?.detail[0]?.matches as unknown as string[]
                )}
              </div>
            )}

            <FileUploadButton
              onFileChange={handleFileUpload}
              title={uploadedFiles[currentFileIndex]?.title || ''}
              content={uploadedFiles[currentFileIndex]?.content || ''}
              handleScan={handleScanClick}
            />
          </div>
          {/* {results.length > 0 && (
            <div className="highlighted-content">
              {highlightPlagiarizedSentences(uploadedFiles[currentFileIndex]?.content || '', results[0]?.detail[0]?.matches || [])}
            </div>
          )}  */}
          {results.length > 0 && (
            <PlagiarismResults showcolumns={false} results={displayedResults} />
          )}
        </div>
      </div>
    </StyledPlagiarismCheck>
  );
};

export default PlagiarismChecker;
