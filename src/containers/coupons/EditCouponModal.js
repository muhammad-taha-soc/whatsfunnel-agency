/* eslint-disable */
import React, { useState } from 'react';
import Calendar from './CalendarModal';
import { LuPenLine } from "react-icons/lu";
import { RiCalendar2Line } from "react-icons/ri";


const EditCoupon = ({ isOpen, onClose }) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    if (!isOpen) return null;

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        content: {
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            maxWidth: '400px',
            width: '90%',
            position: 'relative',
        },
        header: {
            marginBottom: '15px',
        },
        couponGraphic: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            gap: '12px',

        },
        changeButton: {
            backgroundColor: 'white',
            border: 'none',
            padding: '8px 1px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.3s',
            color: '#0DAC8A',
        },
        formGroup: {
            marginBottom: '20px',
            position: 'relative',
        },
        label: {
            fontWeight: 'bold',
            color: '#667085',
            marginBottom: '1px',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            color: '#667085'
        },
        textarea: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            resize: 'none',
            height: '80px',
            color: '#667085'
        },
        modalFooter: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '15px',
        },
        cancelButton: {
            backgroundColor: 'white',
            color: '#86868A',
            border: '1px solid #86868A',
            padding: '10px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
            marginRight: '10px',
            position: 'absolute',
            left: '20px',

        },
        saveButton: {
            backgroundColor: '#0DAC8A',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
        },
        icon: {
            // marginLeft: '5px',
            // marginRight: '5px',
            color: '#0DAC8A',
            cursor: 'pointer', // Indicate that it's clickable
        },
        imageClass: {
            width: '64px',
            height: '64px',
            borderRadius: '8px',
            // overflow: 'hidden',
            border: '1.33px solid #EEEEEE',
        },
    };

    const style = {
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.005em',
        textAlign: 'left',
        color: '#667085',
        marginBottom: '4px',

    };
    return (
        <>
            <div style={modalStyles.overlay} onClick={onClose}>
                <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
                    <header className="modal-header" style={{ color: '#1A1C21', fontSize: '20px', fontWeight: '600px', padding: 0, marginBottom: '24px' }}>
                        <h2 style={{ margin: 0, fontWeight: '600', fontSize: '20px', color: "#1A1C21" }}>Edit Coupon</h2>
                        <img src={'/assets/img/modals/cross.svg'} style={{ width: '16px', height: '16px' }} alt='Visa' onClick={onClose} />
                    </header>
                    <p style={style}>Current coupon graphic</p>
                    <div style={modalStyles.couponGraphic}>

                        <div style={modalStyles.imageClass}>
                            <img
                                src="../../assets/img/blog/coupon.svg"
                                alt="Coupon"
                                style={{ width: '64px', height: '64px' }}
                            />
                        </div>
                        <div style={modalStyles.changeButton}>
                            <img src={'/assets/img/modals/edit.svg'} style={{ width: '20px', height: '20px', marginRight: '4px' }} alt='Visa' />
                            <span style={{ fontSize: '14px', fontWeight: "600" }}>
                                Change
                            </span>
                        </div>
                    </div>
                    <div style={modalStyles.formGroup}>
                        <label style={style}>Action name</label>
                        <input
                            type="text"
                            defaultValue="20% on my products"
                            style={modalStyles.input}
                        />
                    </div>
                    <div style={modalStyles.formGroup}>
                        <label style={style}>Effective date</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                defaultValue="01.01.2024 - 31.12.2024"
                                style={modalStyles.input}
                            />
                            <RiCalendar2Line size={22} style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                color: '#667085',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                                onClick={() => setIsCalendarOpen(true)} />
                        </div>
                    </div>
                    <div style={{ ...modalStyles.formGroup, marginBottom: "24px" }}>
                        <label style={style}>Condition</label>
                        <textarea
                            defaultValue="Lorem ipsum dolor sit amet, consectetur..."
                            style={modalStyles.textarea}
                        />
                    </div>
                    <div style={modalStyles.modalFooter}>
                        <button style={{ backgroundColor: 'white', color: '#86868A', border: "1px solid #86868A", borderRadius: '8px', padding: "10px 14px", fontSize: "14px", fontWeight: "600" }} onClick={onClose}>Cancel</button>
                        <button style={{ backgroundColor: '#0dac8a', color: 'white', border: "1px solid #0dac8a", borderRadius: '8px', padding: "10px 14px", fontSize: "14px", fontWeight: "600" }} onClick={onClose}>Save Change</button>
                    </div>
                </div>
            </div>

            {isCalendarOpen && (
                <Calendar
                    isOpen={isCalendarOpen}
                    onClose={() => setIsCalendarOpen(false)} // Close Calendar Modal
                />
            )}
        </>
    );
};

export default EditCoupon;
