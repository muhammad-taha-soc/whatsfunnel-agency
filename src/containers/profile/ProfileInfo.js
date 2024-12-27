/* eslint-disable */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import {
    Badge, Card, CardBody, CardTitle, Row, Input, Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown,
} from 'reactstrap'; //
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import SingleLightbox from 'components/pages/SingleLightbox';
import ReactCountryDropdown from "react-country-dropdown";
import "./profile.css"


const ProfileInfo = () => {
    const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);
    return (
        <Card className="mb-4" >
            <div className="account-profile-section"
            >
                <div className='profile-img-d' style={{ display: "flex" }}>
                    <div style={{ position: "relative" }}>
                        <SingleLightbox
                            thumb="/assets/img/profiles/l-1.jpg"
                            large="/assets/img/profiles/1.jpg"
                            className="account-profile-img "
                        />
                        <span
                            style={{
                                position: "absolute",
                                bottom: "6px",
                                right: "10px",
                                backgroundColor: "white",
                                padding: "5px",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                            }}>
                            <i
                                className="simple-icon-camera text-primary"
                                style={{ fontSize: "20px" }}
                            />
                        </span>
                    </div>
                    <div style={{ marginTop: "80px" }}>
                        <div>
                            <p style={{ color: '#86868A', fontWeight: '500', fontSize: '14px', marginBottom: '4px' }}>Name</p>
                            <CardTitle className="mb-0 font-weight-bold">
                                <p style={{ fontWeight: '600', fontSize: '20px', color: "#0D0D26" }}>Sam Emili</p>
                            </CardTitle>
                        </div>
                    </div>
                </div>
            </div>

            <CardBody>
                <Separator className="mb-3" />
                <h2 style={{ fontWeight: '600', fontSize: '16px', marginLeft: "8px" }}>General Information</h2>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>Company Name</p>
                            <Input className='w-100 rounded-sm' placeholder={"Name"} />
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>Address</p>
                            <Input className='w-100 rounded-sm' placeholder={"Address"} />
                        </div>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>Friendly Name</p>
                            <Input className='w-100 rounded-sm' placeholder={"Friendly Name"} />
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>E-mail address</p>
                            <Input className='w-100 rounded-sm' placeholder={"abcd@gmail.com"} />
                        </div>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>Website</p>
                            <Input className='w-100 rounded-sm' placeholder={"make.io"} />
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>Google link</p>
                            <Input className='w-100 rounded-sm' placeholder={"google.com"} />
                        </div>
                    </Colxx>

                </Row>
                {/*  */}
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>Telephone Number</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                                <div>
                                    <ReactCountryDropdown
                                        defaultCountry="US"
                                        onSelect={(country) => console.log(country.name)}
                                    />
                                </div>
                                <div style={{ width: "80%" }}>
                                    <Input className='w-100 rounded-sm' placeholder={"5415415214"} />
                                </div>
                            </div>
                        </div>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-2"
                    >
                        <div>
                            <p className="text-muted mb-0" style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}>Direct Chat WhatApp Number</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                                <div>
                                    <ReactCountryDropdown
                                        defaultCountry="US"
                                        onSelect={(country) => console.log(country.name)}
                                    />
                                </div>
                                <div style={{ width: "80%" }}>
                                    <Input className='w-100 rounded-sm' placeholder={"5415415214"} />
                                </div>
                            </div>
                        </div>

                    </Colxx>

                </Row>
                <h2 style={{ fontWeight: '600', fontSize: '16px', color: "#0D0D26", marginLeft: "8px" }}>Opening Hours</h2>
                <Row>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <Row style={{ marginLeft: "-22px" }}>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="mb-3"
                                style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}
                            >
                                Day
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"
                                className="mb-3"
                                style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}
                            >
                                Form
                            </Colxx>
                        </Row>
                        {/*  */}
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center text-t1"
                                style={{ fontSize: '14px', fontWeight: '500' }}
                            >
                                Monday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"5"}
                                        style={{ border: "none", fontSize: "14px" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center text-t1"
                                style={{ fontSize: '14px', fontWeight: '500' }}
                            >
                                Tuesday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"5"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center text-t1"
                                style={{ fontSize: '14px', fontWeight: '500' }}
                            >
                                Wednesday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"5"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center text-t1"
                                style={{ fontSize: '14px', fontWeight: '500' }}
                            >
                                Thursday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"5"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center text-t1"
                                style={{ fontSize: '14px', fontWeight: '500' }}
                            >
                                Friday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"5"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center text-t1"
                                style={{ fontSize: '14px', fontWeight: '500' }}
                            >
                                Saturaday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"5"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center text-t1"
                                style={{ fontSize: '14px', fontWeight: '500', }}
                            >
                                Sunday
                            </Colxx>

                            <Colxx
                                md="9"
                                lg="9"
                                xl="9"

                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"5"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>

                    </Colxx>
                    <Colxx
                        md="6"
                        lg="6"
                        xl="6"
                        className="mb-4"
                    >
                        <Row >
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                                className="mb-3"
                                style={{ color: '#667085', fontSize: '14px', fontWeight: '500' }}
                            >
                                Unit
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"18"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"18"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"18"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"18"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"18"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"18"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                        <Row className='mb-2'>
                            <Colxx
                                md="12"
                                lg="12"
                                xl="12"
                            >
                                <div className='form-inp-box'>
                                    <Input className='w-100 rounded-sm' placeholder={"18"}
                                        style={{ border: "none" }}
                                    />
                                    <i className='simple-icon-clock' style={{ fontSize: "12px", fontWeight: "600", color: "#86868A" }} />
                                </div>
                            </Colxx>
                        </Row>
                    </Colxx>
                </Row>
            </CardBody>
        </Card>
    );
}

export default ProfileInfo