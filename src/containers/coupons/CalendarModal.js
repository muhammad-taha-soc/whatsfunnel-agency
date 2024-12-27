/* eslint-disable */
import React, { useState } from 'react';
import './CalendarModal.css'; // Ensure you have appropriate styles

const Calendar = ({ customer, onClose }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState([3, 4, 5, 6]); // Start with dates 3 and 6 selected
    console.log(selectedDates);

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const getDaysArray = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = daysInMonth(month, year);
        const firstDay = new Date(year, month, 1).getDay();

        const daysArray = [];
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(null); // Fill the start of the week with null
        }

        for (let day = 1; day <= days; day++) {
            daysArray.push(day);
        }

        return daysArray;
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const handleDateClick = (day) => {
        if (selectedDates.includes(day)) {
            // If the date is already selected, remove it
            setSelectedDates(selectedDates.filter(date => date !== day));
        } else {
            // If there are already two selected dates, replace the first one
            if (selectedDates.length < 2) {
                setSelectedDates([...selectedDates, day]);
            } else {
                setSelectedDates([selectedDates[1], day]); // Replace the first selected date
            }
        }
    };

    const handleTodayClick = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDates([today.getDate()]); // Reset to today's date
    };

    const handleApplyClick = () => {
        if (selectedDates.length) {
            console.log(`Selected dates: ${selectedDates}`);
            onClose(); // Close the modal after selection
        }
    };

    const daysArray = getDaysArray();
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    return (
        <div className="calendar-modal modal-overlay" onClick={onClose}>
            <div className="overviewmodal-content" style={{ color: 'black' }} onClick={(e) => e.stopPropagation()} >
                <h2 style={{ width: '440px', height: '30px', fontWeight: '600', lineHeight: '30px', fontSize: '20px' }}>Select Dates</h2>

                <div className="calendar-header" style={{ marginRight: '2px', marginLeft: '2px', gap: 4 }}>
                    <div>
                        <h3 style={{ width: '99px', height: '17px', fontWeight: '500', lineHeight: '16.94px', fontSize: '14px' }}>{`${monthName} ${year}`}</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <button onClick={handleTodayClick} className="today-button" style={{ border: '1px solid #0DAC8A', color: '#0DAC8A', backgroundColor: 'white', fontWeight: '400', fontSize: '14px' }}>Today</button>
                        <button onClick={handlePrevMonth} className="arrow-button" style={{ backgroundColor: '#0DAC8A', color: 'white' }}><i className="simple-icon-arrow-left"></i></button>
                        <button onClick={handleNextMonth} className="arrow-button" style={{ color: 'white', backgroundColor: '#0DAC8A' }}><i className="simple-icon-arrow-right"></i></button>
                    </div>
                </div>

                <div className="day-names">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="day-header">{day}</div>
                    ))}
                </div>

                <div className="calendar-body">
                    {/* {daysArray.map((day, index) => (
                        //  const isSelected = selectedDates.includes(day)
                        //  const isDefaultSelected = [3, 6].includes(day) && isSelected
                        // <div
                        //     key={index}
                        //     className={`day ${day === null ? 'blank' : (selectedDates.includes(day) ? 'selected' : '')}`}
                        //     onClick={() => day && handleDateClick(day)}
                        // >
                        //     {day}
                        // </div>
                        
                    // ))} */}
                    {daysArray.map((day, index) => {
                        const isSelected = selectedDates.includes(day);
                        const isDefaultSelected = [3, 6].includes(day) && isSelected; // Check if it's 3 or 6

                        return (
                            <div
                                key={index}
                                className={`day ${day === null ? 'blank' : (isSelected ? (isDefaultSelected ? 'default-selected' : 'selected') : '')}`}
                                onClick={() => day && handleDateClick(day)}
                            >
                                {day}
                            </div>
                        );
                    })}
                </div>

                <div className="calendar-footer">
                    <button className="cancel-button" style={{ fontWeight: '600', fontSize: '14px' }} onClick={onClose}>Cancel</button>
                    <button className="apply-button" style={{ fontWeight: '600', fontSize: '14px' }} onClick={handleApplyClick}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
