/* eslint-disable */
import React from 'react';
import './modal.css'; // Importing updated CSS
import { Separator } from 'components/common/CustomBootstrap';
import {
    Input
} from 'reactstrap';

const OverviewModal = ({ customer, onClose }) => {
    const value = 'on';
    if (!customer) return null;

    // Dummy data for testing
    const dummyCustomer = {
        title: "John Doe",
        email: "john.doe@example.com",
        phone: "+123456789",
        date: "2024-10-12",
        coupons: ["10% off", "Free shipping"],
        suggestionSubmitted: "Add more payment options.",
        reasonDissatisfaction: "Slow customer service.",
        notes: "Follow up in a week."
    };

    const data = customer || dummyCustomer;

    const stylesOnHold = {
        padding: '4px 12px',
        borderRadius: '100px',
        background: '#0DAC8A1A',
        opacity: 1, // Change to 1 so it's visible
        color: '#0DAC8A', // Adjust text color as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: ' pointer',
        width: "49px",
        height: "26px",
        fontSize: '14px',
        fontWeight: 500
    };
    const style = {
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.005em',
        textAlign: 'left',
        color: "#666571"
    };

    const style_sec = {
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.005em',
        textAlign: 'left',
        color: "#0D0D26"
    };

    return (
        <div className="modal-overlay">
            <div className="overviewmodal-content">
                <div className="d-flex justify-content-between align-items-center mb-4" style={{ color: 'black' }}>
                    <h2 style={{
                        color: "#1A1C21",
                        fontSize: '20px', fontWeight: '600', lineHeight: '30px',
                        letterSpacing: '0.005em',
                        textAlign: 'left',
                        margin: 0
                    }}>Overview</h2>
                    <img src={'/assets/img/modals/cross.svg'} style={{ width: '16px', height: '16px' }} alt='Visa' onClick={onClose} />
                </div>

                <div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "12px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/flag-alt.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Coupon ID </span>
                        </div>
                        <div style={style_sec}>111221254</div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                        <Separator />
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "12px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/user.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Action Name</span>
                        </div>
                        <div style={stylesOnHold}>list</div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                        <Separator />
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "12px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/laptop.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Source of origin</span>
                        </div>
                        <div style={style_sec}>Demo</div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                        <Separator />
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "12px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/wifi-box.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Status</span>
                        </div>
                        <div
                            className="status-indicator"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: value === 'On' || value === 'on' ? '#0DAC8A' : 'red',
                                borderRadius: '20px', // More rounded corners
                                padding: '5px 13px 5px 13px',
                                color: 'white',
                                textAlign: 'center',
                                position: 'relative', // For positioning the dot correctly
                                width: '55.8px', // Set a fixed width for consistency
                                height: '26px', // Set a fixed height for consistency
                                bottom: '2px'
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '8px', // Position the dot
                                    top: '50%', // Center vertically
                                    transform: 'translateY(-50%)', // Center adjust
                                    borderRadius: '50%',
                                    width: '10px', // Size of the dot
                                    height: '10px', // Size of the dot
                                    backgroundColor: 'white',
                                }}
                            ></div>
                            <div style={{
                                top: '50%', transform: 'translateY(3%)',
                                marginLeft: '9px', width: '20px', height: '17px',
                                fontWeight: '500px', fontalign: 'center',
                                fontSize: '14px', lineHeight: '16.94px'
                            }}>

                                {value}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                        <Separator />
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "12px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/calendar.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Issue date</span>
                        </div>
                        <div style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '20px',
                            letterSpacing: '0.005em',
                            textAlign: 'left',
                            color: "#0D0D26"
                        }}>10/12/2024</div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                        <Separator />
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "12px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/calendar.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Redemption date</span>
                        </div>
                        <div style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '20px',
                            letterSpacing: '0.005em',
                            textAlign: 'left',
                            color: "#0D0D26"
                        }}>10/12/2024</div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                        <Separator />
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "12px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/user.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Surname</span>
                        </div>
                        <div style={style_sec}>Linda Blair</div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                        <Separator />
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "20px" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <img src={'/assets/img/modals/phone-flip.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                            <span style={style}> Telephone number</span>
                        </div>
                        <div style={style_sec}>+419123456789</div>
                    </div>
                </div>
                <div>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#667085" }}>Note</span>
                    <div style={{ border: '1px solid #E8E8E9', borderRadius: '8px', padding: '16px', marginTop: "8px" }}>
                        <div style={{ overflow: 'hidden', maxHeight: '95px', }}>
                            Lorem ipsum dolor sit amet consectetur. Urna sit felis donec adipiscing
                            vitae mi. Massa mauris ultrices ipsum venenatis consectetur pharetra
                            vitae turpis nibh. Mattis neque massa in quis eget nisi.
                            Lorem ipsum dolor sit amet consectetur. Urna sit felis donec adipiscing vitae mi.
                            Massa mauris ultrices ipsum venenatis consectetur pharetra vitae turpis nibh. Mattis neque
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <button style={{ backgroundColor: 'white', color: '#86868A', border: "1px solid #86868A", borderRadius: '8px', padding: "10px 14px", fontSize: "14px", fontWeight: "600" }} onClick={onClose}>Cancel</button>
                    <button style={{ backgroundColor: '#0dac8a', color: 'white', border: "1px solid #0dac8a", borderRadius: '8px', padding: "10px 14px", fontSize: "14px", fontWeight: "600" }} onClick={onClose}>Save Change</button>
                </div>
            </div>
        </div >
    );
};

export default OverviewModal;
