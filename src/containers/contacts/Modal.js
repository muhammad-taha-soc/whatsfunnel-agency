/* eslint-disable */
import React from 'react';
import './modal.css';
import { FaRegCopy, FaRegTrashCan, FaWhatsapp } from 'react-icons/fa6';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { CiCircleMinus } from 'react-icons/ci';
import { LuFileDown } from 'react-icons/lu';
import { RiCalendar2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { Colxx, Separator } from 'components/common/CustomBootstrap';

const Modal = ({ customer, onClose }) => {
  if (!customer) return null;

  // Dummy data for testing
  const dummyCustomer = {
    title: 'Linda Blair',
    email: 'lindablair@mail.com',
    phone: '050 414 8788',
    date: '12 December 2022',
    coupons: ['Action name 1, Action name 2'],
    suggestionSubmitted: 'Lorem ipsum  dolor sit amet consectetur. Eget hac faucibus at in. Sed pharetra nunc pellentesque ante adipiscing sit turpis lacus. Scelerisque pellentesque sed auctor sem.',
    reasonDissatisfaction: 'Lorem ipsum dolor sit amet consectetur. Eget hac faucibus at in. Sed pharetra nunc pellentesque ante adipiscing sit turpis lacus. Scelerisque pellentesque sed auctor sem.',
    notes: 'Lorem ipsum dolor sit amet consectetur. Eget hac faucibus at in. Sed pharetra nunc pellentesque ante adipiscing sit turpis lacus. Scelerisque pellentesque sed auctor sem.',
  };

  const data = customer || dummyCustomer;

  return (
    <div className="card modal-overlay">
      <div className="c-modal-content" style={{ maxWidth: '850px' }}>
        <header className="c-modal-header" style={{ color: 'black', borderBottom: 'none' }}>
          <h2 style={{ fontWeight: '600', fontSize: '20px', lineHeight: '23.5px', color: '#1A1C21' }}>
            Customer Details
          </h2>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </header>

        <div className="c-modal-body mt-0 p-0">
          <div className="bordered-container">
            <div className="left-column">
              <Colxx className="customer-name p-0" xxs="12" lg="12" md="12" xl="12" style={{ color: 'black' }}>
                <div className="bg-theme-1 account-profile-background-layer-btn p-4">
                  <h3 className="text-left" style={{ fontWeight: '600', fontSize: '20px' }}>{dummyCustomer.title}</h3>
                  <div
                    style={{
                      fontWeight: '500',
                      fontSize: '14px',
                      borderRadius: '20px',
                      backgroundColor: 'white',
                      color: '#FF8E0D',
                      padding: '7px',
                      width: '30%',
                      textAlign: 'center',
                    }}
                  >
                    customer
                  </div>
                </div>
              </Colxx>

              <div className="customer-info">
                <div className="d-flex justify-content-between align-items-center">
                  <p style={{ fontWeight: '500', fontSize: '14px', color: '#667085' }}>
                    {/* <i
                      className="iconsminds-envelope-2"
                    
                    /> */}
                    {/* <HiOutlineMail style={{
                      fontWeight: '500',
                      fontSize: '14px',
                      marginRight: '8px',
                      width: '22px',
                      height: '22px',
                      color: '#5C5C78',
                    }} /> */}
                    <img src='/assets/img/svg/envelope (1) 1.svg' style={{
                      fontWeight: '500',
                      fontSize: '14px',
                      marginRight: '8px',
                      width: '22px',
                      height: '22px',
                      color: '#5C5C78',
                    }} alt='email' />

                    Email:
                    <br />
                    <span style={{ marginLeft: '29px', color: 'black', fontWeight: '500', fontSize: '14px' }}>
                      {dummyCustomer.email}
                    </span>
                  </p>
                  <FaRegCopy style={{ width: '20px', height: '20px', color: '#86868A' }} />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p style={{ fontWeight: '500', fontSize: '14px', color: '#667085' }}>
                    {/* <i
                      className="simple-icon-phone"
                     
                    /> */}
                    {/* <BsTelephone style={{
                      marginRight: '8px',
                      width: '22px',
                      height: '22px',
                      color: '#5C5C78',
                      fontWeight: '500',
                      fontSize: '14px',
                    }} /> */}

                    <img src='/assets/img/svg/phone-flip 1.svg' style={{
                      fontWeight: '500',
                      fontSize: '14px',
                      marginRight: '8px',
                      width: '22px',
                      height: '22px',
                      color: '#5C5C78',
                    }} alt='email' />

                    Telephone Number:
                    <br />
                    <span style={{ marginLeft: '29px', color: 'black', fontWeight: '500', fontSize: '14px' }}>
                      {dummyCustomer.phone}
                    </span>
                  </p>
                  <FaRegCopy style={{ width: '20px', height: '20px', color: '#86868A' }} />
                </div>
                <p style={{ fontWeight: '500', fontSize: '14px', color: '#667085' }}>
                  {/* <i
                    className="iconsminds-calendar-4"
                  
                  /> */}
                  {/* <RiCalendar2Line style={{
                    marginRight: '8px',
                    width: '22px',
                    height: '22px',
                    color: '#5C5C78',
                    fontWeight: '500',
                    fontSize: '14px',
                  }} /> */}

                  <img src='/assets/img/svg/calendar (1) 1.svg' style={{
                    fontWeight: '500',
                    fontSize: '14px',
                    marginRight: '8px',
                    width: '22px',
                    height: '22px',
                    color: '#5C5C78',
                  }} alt='email' />

                  Date:
                  <br />
                  <span style={{ marginLeft: '29px', color: 'black', fontWeight: '500', fontSize: '14px' }}>
                    {dummyCustomer.date}
                  </span>
                </p>
              </div>
              <Separator className="ml-4 mr-4" />
              <div className="modal-actions">
                <button className="action-button">
                  <CiCircleMinus style={{ marginRight: '2px' }} size={25} />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Unsubscribe from Account</span>
                </button>
                <button className="action-button">
                  <FaWhatsapp style={{ marginRight: '2px' }} size={25} />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Unsubscribe from WhatsApp</span>
                </button>
                <button className="action-button">
                  <LuFileDown style={{ marginRight: '8px' }} size={25} />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Download Contact Data</span>
                </button>
                <button className="delete-button">
                  <FaRegTrashCan style={{ marginRight: '8px' }} size={20} />
                  <span style={{ fontWeight: '500', fontSize: '14px' }}>Delete Contact</span>
                </button>
              </div>
            </div>

            <div className="right-column" style={{ position: 'relative', paddingLeft: '10px', paddingTop: '12px' }}>
              <div className="status" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="status-item satisfied">
                  <span style={{ fontWeight: '500', fontSize: '16px', color: '#0D0D26' }}>Satisfied</span>
                  <AiFillCheckCircle style={{ position: 'absolute', right: '15px', color: '#0DAC8A', width: '24px', height: '24px' }} />
                </div>
                <div className="status-item">
                  <span style={{ fontWeight: '500', fontSize: '16px', color: '#0D0D26' }}>Review link clicked</span>
                  <AiFillCheckCircle style={{ position: 'absolute', right: '15px', color: '#0DAC8A', width: '24px', height: '24px' }} />
                </div>
                <div className="status-item dissatisfied">
                  <span style={{ fontWeight: '500', fontSize: '16px', color: '#0D0D26' }}>Suggestion for improvement</span>
                  <AiFillCloseCircle style={{ position: 'absolute', right: '15px', color: '#F5430B', width: '24px', height: '24px' }} />
                </div>
              </div>
              <Separator className="ml-2 mr-2 mt-4" />
              <div className="customer-details mt-4">
                <div className="coupons">
                  <h4 style={{ fontWeight: '500', fontSize: '16px', color: '#0D0D26' }}>Coupons</h4>
                  <p style={{ color: '#5C5C78', fontWeight: '400', fontSize: '14px' }}>
                    {Array.isArray(dummyCustomer.coupons) ? dummyCustomer.coupons.join(', ') : 'No coupons available'}
                  </p>
                </div>
                <Separator className="ml-2 mr-2 mt-4" />
                <div className="suggestions mt-4">
                  <h4 style={{ fontWeight: '500', fontSize: '16px', color: '#0D0D26' }}>Suggestion for Improvement Submitted</h4>
                  <p style={{ color: '#5C5C78', fontWeight: '400', fontSize: '14px' }}>{dummyCustomer.suggestionSubmitted}</p>
                </div>
                <Separator className="ml-2 mr-2 mt-4" />
                <div className="reason mt-4">
                  <h4 style={{ fontWeight: '500', fontSize: '16px', color: '#0D0D26' }}>Reason for Dissatisfaction</h4>
                  <p style={{ color: '#5C5C78', fontWeight: '400', fontSize: '14px' }}>{dummyCustomer.reasonDissatisfaction}</p>
                </div>
                <div className="notes mt-3">
                  <h4 style={{ fontWeight: '500', fontSize: '16px', color: '#0D0D26' }}>Note Field</h4>
                  <p style={{ color: '#5C5C78', fontWeight: '400', fontSize: '14px' }}>{dummyCustomer.notes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;