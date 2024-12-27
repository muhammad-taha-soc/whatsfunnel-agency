/* eslint-disable */

import React, { useState } from 'react';
import {
    CardBody,
    Input,
} from 'reactstrap'; //
import { Separator } from 'components/common/CustomBootstrap';
import { all } from 'redux-saga/effects';

const PaymentMethod = () => {
    const [selectedPayment, setSelectedPayment] = useState('visa'); // Default selected payment method

    // Handler to change selected payment method
    const handlePaymentSelect = (paymentMethod) => {
        setSelectedPayment(paymentMethod); // Set the selected payment method
    };
    return (
        <>
            <CardBody className='card rounded-md' style={{ borderRadius: "16px" }}>
                <h2 className='text-t1' style={{ fontSize: '24px', fontWeight: '500', marginBottom: "20px" }}>Payment method</h2>
                <p className='text-t1' style={{ fontSize: '16px', fontWeight: '600' }}>Card details</p>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='paymeny-card-w pr-2'>
                        <div
                            className='d-flex justify-content-between'
                            style={{
                                border: `1px solid ${selectedPayment === 'visa' ? '#0DAC8A' : '#EAECF0'}`,
                                borderRadius: '12px',
                                padding: '16px',
                                cursor: 'pointer', // Change cursor to pointer on hover
                            }}
                            onClick={() => handlePaymentSelect('visa')} // Handle card click
                        >
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex'>
                                    <div className='mr-3'>
                                        <img src={'/assets/img/payment/visa-image.png'} style={{ width: '30px', height: '30px' }} alt='Visa' />
                                    </div>
                                    <div>
                                        <p className='mb-0 text-t2' style={{ fontSize: '14px', fontWeight: '500' }}> Visa Ending in 2424</p>
                                        <p className='mb-2 text-t3' style={{ fontSize: '14px', fontWeight: '400' }}> Expiry 06/2024</p>
                                        <p className='mb-0 text-t3' style={{ fontSize: '14px', fontWeight: '600' }}> Set as default <span style={{ color: '#0DAC8A', fontWeight: '600', fontSize: "14px", marginLeft: '10px' }}>Edit</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <label className="checkbox_r">
                                    <input
                                        type="checkbox"
                                        className="checkbox__input_r"
                                        checked={selectedPayment === 'visa'}
                                        readOnly // Prevent manual checkbox toggling
                                    />
                                    <span className="checkbox__inner_r"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='paymeny-card-w pl-2'>
                        <div
                            className='d-flex justify-content-between'
                            style={{
                                border: `1px solid ${selectedPayment === 'master' ? '#0DAC8A' : '#EAECF0'}`,
                                borderRadius: '12px',
                                padding: '16px',
                                cursor: 'pointer', // Change cursor to pointer on hover
                            }}
                            onClick={() => handlePaymentSelect('master')} // Handle card click
                        >
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex'>
                                    <div className='mr-3'>
                                        <img src={'/assets/img/payment/master-image.png'} style={{ width: '30px', height: '30px' }} alt='MasterCard' />
                                    </div>
                                    <div>
                                        <p className='mb-0 text-t2' style={{ fontSize: '14px', fontWeight: '500' }}> MasterCard Ending in 1234</p>
                                        <p className='mb-2 text-t3' style={{ fontSize: '14px', fontWeight: '400' }}> Expiry 07/2024</p>
                                        <p className='mb-0 text-t3' style={{ fontSize: '14px', fontWeight: '600' }}> Set as default <span style={{ color: '#0DAC8A', fontWeight: '600', fontSize: "14px", marginLeft: '10px' }}>Edit</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <label className="checkbox_r">
                                    <input
                                        type="checkbox"
                                        className="checkbox__input_r"
                                        checked={selectedPayment === 'master'}
                                        readOnly // Prevent manual checkbox toggling
                                    />
                                    <span className="checkbox__inner_r"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ color: "#0dac8a", fontWeight: "600", fontSize: "14px" }} className='mt-3'>+ Add New PaymentMethod Method</p>
                <p style={{ fontSize: '16px', fontWeight: '600' }}>Billing Information</p>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                        <img src={'/assets/img/modals/user.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                        <p className='text-t4' style={{ fontSize: "14px", fontWeight: "500", margin: "0" }}>Surname</p>
                    </div>
                    <div className='text-t1' style={{ fontSize: "14px", fontWeight: "500" }}>mtc Business Germany GmbH</div>
                </div>
                <Separator className="mb-3" />
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                        <img src={'/assets/img/modals/location.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                        <p className='text-t4' style={{ fontSize: "14px", fontWeight: "500", margin: "0" }}>Billing Address</p>
                    </div>
                    <div className='text-t1' style={{ fontSize: "14px", fontWeight: "500" }}>Geldstrasse 1, 1111 Geldstadt</div>
                </div>
                <Separator className="mb-3" />
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                        <img src={'/assets/img/modals/phone.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                        <p className='text-t4' style={{ fontSize: "14px", fontWeight: "500", margin: "0" }}>Telephone number</p>
                    </div>
                    <div className='text-t1' style={{ fontSize: "14px", fontWeight: "500" }}>+419123456789</div>
                </div>
                <Separator className="mb-3" />
            </CardBody>
        </>
    );
};

export default PaymentMethod;
