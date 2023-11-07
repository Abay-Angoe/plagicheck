import React, { useState } from 'react';
import { closeIcon } from '../../assets';
import { StyledModal } from './Modal_styles';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import {
  ScheduleItem,
  createSchedule,
} from '../../services/Api Hooks/useSchedule';

interface ModalProps {
  content?: string;
  closeModal: () => void;
}

export const ScheduleModal: React.FC<ModalProps> = ({
  closeModal,
  content,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>('00:00');

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time || '00:00');
  };

  const departmentId = localStorage.getItem('department') || '';
  const facultyId = localStorage.getItem('selectedOptions');

  const parsedFaculty = facultyId !== null ? JSON.parse(facultyId) : [];

  const handleSchedule = () => {
    const scheduleData: ScheduleItem[] = [
      {
        title: 'Schedule Title',
        content: content || '',
        threshold: 0,
        facultyIds: parsedFaculty,
        scheduleTime: selectedDate?.toISOString() || '2023-10-14T00:00:00.000Z',
      },
    ];

    createSchedule(departmentId, scheduleData);

    closeModal();
  };

  return (
    <>
      <StyledModal>
        <div className="modal">
          <div className="modal-tile">
            <div className="title">
              <h1>Schedule Check</h1>
              <img src={closeIcon} alt="" onClick={closeModal} />
            </div>
            <div className="modal-content">
              <p>Schedule a date and time for the Uploaded documents</p>
              <div className="check">
                <label htmlFor="" className="set-date">
                  Set Date{' '}
                </label>
                <br></br>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  className="date"
                />
              </div>
              <div className="check">
                <label htmlFor="" className="set-date">
                  Set Time{' '}
                </label>
                <TimePicker
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="time"
                />
              </div>
            </div>
            <div className="modal-buttons schedule-modal">
              <button
                onClick={closeModal}
                className="btn btn-secondary btn-schedule"
              >
                Cancel
              </button>
              <button
                onClick={handleSchedule}
                className="btn btn-schedule btn-primary"
              >
                Schedule check
              </button>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};
