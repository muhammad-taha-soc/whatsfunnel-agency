/* eslint-disable */

import React from 'react';
import {
    CardBody, Row, Input
} from 'reactstrap'; //
import { Separator } from 'components/common/CustomBootstrap';
import PaymentMethod from './PaymentMethod';
import PaymentHistory from './PaymentHistory';

const Payment = () => {

    return (
        <>
            <PaymentMethod />
            <PaymentHistory />
        </>
    );
};
export default Payment;
