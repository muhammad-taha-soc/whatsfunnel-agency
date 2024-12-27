/* eslint-disable */

import React, { useState } from 'react';
import {
    CardBody, Row, Input
} from 'reactstrap'; //
import { Colxx } from 'components/common/CustomBootstrap';

const ProfileSetting = () => {

    return (
        <CardBody className='card' style={{ borderRadius: "16px" }}>
            <h2 className='text-t1' style={{ fontSize: '24px', fontWeight: '500' }}>Password</h2>
            <Row>
                <Colxx
                    md="12"
                    lg="12"
                    xl="12"
                    className="mb-4"
                >
                    <div>
                        <p className="text-muted mb-0"
                            style={{ fontSize: '14px', fontWeight: '400', color: '#667085' }}>Current Password</p>
                        <div className='form-inp-box'>
                            <Input type='password' className='w-100 rounded-sm' placeholder={"passwors"}
                                style={{ border: "none" }}
                            />
                            <i className='simple-icon-eye' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                        </div>
                    </div>

                </Colxx>
            </Row>
            <Row>
                <Colxx
                    md="12"
                    lg="12"
                    xl="12"
                    className="mb-4"
                >
                    <div>
                        <p className="text-muted mb-0"
                            style={{ fontSize: '14px', fontWeight: '500', color: '#667085' }}>New Password</p>
                        <div className='form-inp-box'>
                            <Input type='password' className='w-100 rounded-sm' placeholder={"passwors"}
                                style={{ border: "none" }}
                            />
                            <i className='simple-icon-eye' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                        </div>
                    </div>

                </Colxx>
            </Row>
            <Row>
                <Colxx
                    md="12"
                    lg="12"
                    xl="12"
                    className="mb-4"
                >
                    <div>
                        <p className="text-muted mb-0"
                            style={{ fontSize: '14px', fontWeight: '400', color: '#667085' }}>Confirm Password</p>
                        <div className='form-inp-box'>
                            <Input type='password' className='w-100 rounded-sm' placeholder={"passwors"}
                                style={{ border: "none" }}
                            />
                            <i className='simple-icon-eye' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                        </div>
                    </div>

                </Colxx>
            </Row>
        </CardBody>
    );
};
export default ProfileSetting;
