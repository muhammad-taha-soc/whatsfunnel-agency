/* eslint-disable */
import React from 'react';
import './modal.css'; // Importing updated CSS
import { FaEnvelope, FaPhone, FaDownload, FaTrash, FaWhatsapp, FaCheck, FaTimes } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'; // Import success and failure icons
import { Colxx } from 'components/common/CustomBootstrap';

const Modal = ({ customer, onClose }) => {
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

    const data = customer || dummyCustomer; // Use dummy data if customer is not available

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <header className="modal-header" style={{ color: 'black' }}>
                    <h2>Customer Details</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </header>

                <div className="modal-body">
                    <div className="bordered-container">
                        <div className="left-column">
                            <Colxx className='customer-name' xxs='12' lg='12' md='12' xl='12' style={{ color: 'black' }}>
                            <div className="bg-theme-1 account-profile-background-layer account-profile-background-layer-btn p-4">

                                <h3>{dummyCustomer.title}</h3>
                            </div>
                            </Colxx>

                            <div className="customer-info" style={{ color: 'black' }}>
                                <p><FaEnvelope style={{ marginRight: '8px' }} />Email: {dummyCustomer.email}</p>
                                <p><FaPhone style={{ marginRight: '8px' }} />Telephone Number: {dummyCustomer.phone}</p>
                                <p><FaCheck style={{ marginRight: '8px' }} />Date: {dummyCustomer.date}</p>
                            </div>

                            <div className="modal-actions">
                                <button className="action-button">
                                    <FaWhatsapp /> <span> Unsubscribe from WhatsApp</span>
                                </button>
                                <button className="action-button">
                                    <FaEnvelope /> <span> Unsubscribe from Account</span>
                                </button>
                                <button className="action-button">
                                    <FaDownload /> <span> Download Contact Data</span>
                                </button>
                                <button className="delete-button">
                                    <FaTrash /> <span> Delete Contact</span>
                                </button>
                            </div>
                        </div>

                        <div className="right-column" style={{ paddingLeft: '10px', paddingTop: '6px' }}>
                            <div className="status">
                                <div className="status-item satisfied">
                                    <span>Satisfied</span>
                                    <AiFillCheckCircle style={{ color: 'green', marginLeft: '10px' }} />
                                </div>
                                <div className="status-item">
                                    <span>Review link clicked</span>
                                    <AiFillCheckCircle style={{ color: 'green', marginLeft: '10px' }} />
                                </div>
                                <div className="status-item dissatisfied">
                                    <span>Suggestion for improvement</span>
                                    <AiFillCloseCircle style={{ color: 'red', marginLeft: '10px' }} />
                                </div>
                            </div>

                            <div className="customer-details mt-5">
                                <div className="coupons">
                                    <h4>Coupons</h4>
                                    <p>{Array.isArray(dummyCustomer.coupons) ? dummyCustomer.coupons.join(', ') : 'No coupons available'}</p>
                                </div>

                                <div className="suggestions mt-5">
                                    <h4>Suggestion for Improvement Submitted</h4>
                                    <p>{dummyCustomer.suggestionSubmitted}</p>
                                </div>

                                <div className="reason mt-5">
                                    <h4>Reason for Dissatisfaction</h4>
                                    <p>{dummyCustomer.reasonDissatisfaction}</p>
                                </div>

                                <div className="notes mt-5">
                                    <h4>Note Field</h4>
                                    <p>{dummyCustomer.notes}</p>
                                </div>
                            </div>
                        </div>
                    </div> {/* End of Bordered Container */}
                </div>
            </div>
        </div>
    );
};

export default Modal;
