/* eslint-disable */
import React, { useState } from 'react';
import './modal.css'; // Importing updated CSS
import { FaEnvelope, FaPhone, FaDownload, FaTrash, FaWhatsapp, FaCheck, FaTimes } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'; // Import success and failure icons
import { Colxx } from 'components/common/CustomBootstrap';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    InputGroup,
    InputGroupAddon,
    Input,
    InputGroupText,
    Button,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    CustomInput,
    UncontrolledDropdown,
} from 'reactstrap';
import { RiCalendar2Line } from "react-icons/ri";
import Calendar from './CalendarModal';

const CreateModal = ({ customer, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('Newsletters');
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    // if (!isOpen) return null;



    const modalStyles = {
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        label: {
            fontWeight: 'bold',
            color: '#667085',
            marginBottom: '4px',
            marginTop: '20px',
            fontSize: "14px",
            fontWeight: "500"

        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            // marginBottom: '4px'
        },
        textarea: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            resize: 'none',
            height: '80px',
            marginBottom: '20px'
        },

    };


    // Dummy data for testing
    const dummyCustomer = {
        // title: "John Doe",
        // email: "john.doe@example.com",
        // phone: "+123456789",
        // date: "2024-10-12",
        // coupons: ["10% off", "Free shipping"],
        // suggestionSubmitted: "Add more payment options.",
        // reasonDissatisfaction: "Slow customer service.",
        // notes: "Follow up in a week."
    };

    const data = customer || dummyCustomer; // Use dummy data if customer is not available

    return (
        <div className="modal-overlay">
            <div className="create-modal">
                <header className="modal-header" style={{ color: '#1A1C21', height: '30px', fontSize: '20px', fontWeight: '600px', padding: 0 }}>
                    <h2 style={{ fontWeight: '600px', fontSize: '20px', margin: 0 }}>Create Coupon</h2>
                    <img src={'/assets/img/modals/cross.svg'} style={{ width: '16px', height: '16px' }} alt='Visa' onClick={onClose} />
                </header>

                <div className="modal-body" style={{ padding: 0 }}>
                    <div className="">
                        <div className="left-column">
                            <Colxx className='customer-name' xxs='12' lg='12' md='12' xl='12' style={{ color: 'black', padding: 0 }}>
                                <div style={{ color: "#667085", marginTop: '20px', fontSize: "14px", fontWeight: "500", marginBottom: "4px" }}>Coupon Image </div>
                                <div className="avatar-container">
                                    <div className="avatar-box"></div>
                                    <div className="upload-icon" style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 0, marginLeft: "10px" }}>
                                        <img src={'/assets/img/modals/upload.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                                        <div style={{ color: "#0DAC8A", fontSize: "14px", fontWeight: "600" }}>
                                            upload image
                                        </div>
                                    </div>

                                </div>

                                <div style={{ color: "#667085", fontWeight: '500', fontSize: '14px', marginBottom: '12px' }}>Choose one of the Following </div>
                                {/* <Colxx style={{ padding: 0 }}>
                                    <div className="flex-container">
                                        <Input
                                            addon
                                           
                                            type="radio"
                                            name="reviews"
                                            id="googleReviews"
                                            aria-label="Radio for Google Reviews"
                                            onChange={handleRadioChange}
                                        />
                                        <label
                                            style={{
                                                margin: '0px',
                                                color: selectedReview === 'googleReviews' ? '#0DAC8A' : 'black', // Change color if selected
                                            }}
                                            htmlFor="googleReviews"
                                        >
                                            Google Reviews
                                        </label>
                                    </div>
                                </Colxx> */}
                                {/* <Colxx style={{ padding: 0 }}>
                                    <div className="flex-container">
                                        <Input
                                            addon
                                            type="radio"
                                            name="reviews"
                                            id="newsletter"
                                            aria-label="Radio for Newsletter"
                                            onChange={handleRadioChange}
                                            checked={selectedReview === 'newsletter'} 
                                            color='green'
                                        />
                                        <label
                                            style={{
                                                margin: '0px',
                                                color: selectedReview === 'newsletter' ? '#0DAC8A' : 'black',
                                            }}
                                            htmlFor="newsletter"
                                        >
                                            Newsletter
                                        </label>
                                    </div>
                                </Colxx>
                                <Colxx style={{ padding: 0 }}>
                                    <div className="flex-container">
                                        <Input
                                            addon
                                            type="radio"
                                            name="reviews"
                                            id="promotions"
                                            aria-label="Radio for Promotions"
                                            onChange={handleRadioChange}
                                        />
                                        <label
                                            style={{
                                                margin: '0px',
                                                color: selectedReview === 'promotions' ? '#0DAC8A' : 'black',
                                            }}
                                            htmlFor="promotions"
                                        >
                                            Promotions
                                        </label>
                                    </div>
                                </Colxx> */}
                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="marketing-preference"
                                            value="google-reviews"
                                            className="radio-input newsletter"
                                        />
                                        <span className="radio-custom"></span>
                                        <span>Google Reviews</span>
                                    </label>

                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="marketing-preference"
                                            value="newsletters"
                                            className="radio-input newsletter"
                                            defaultChecked
                                        />
                                        <span className="radio-custom"></span>
                                        Newsletters
                                    </label>

                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="marketing-preference"
                                            value="promotions"
                                            className="radio-input newsletter"
                                        />
                                        <span className="radio-custom"></span>
                                        Promotions
                                    </label>
                                </div>


                                <label style={modalStyles.label}>Action name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    style={modalStyles.input}
                                />
                                <label style={modalStyles.label}>Effective Date</label>

                                {/* <Input type='date' placeholder="Enter Name" className="custom-input" /> */}
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
                                {isCalendarOpen && (
                                    <Calendar
                                        // isOpen={isCalendarOpen}
                                        onClose={() => setIsCalendarOpen(false)} // Close Calendar Modal
                                    />
                                )}
                                <label style={modalStyles.label}>Condition</label>
                                <textarea
                                    placeholder='Write Condition...'
                                    style={modalStyles.textarea}
                                />
                                <div className="button-container">
                                    <button className="cancel-button" onClick={onClose}>
                                        Cancel
                                    </button>
                                    <button className="create-button" onClick={onClose}>
                                        Create
                                    </button>
                                </div>

                            </Colxx>
                        </div>

                    </div> {/* End of Bordered Container */}
                </div>
            </div>
        </div>
    );
};

export default CreateModal;
