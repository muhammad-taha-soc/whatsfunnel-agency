import React from 'react';
import { Card, CardBody } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
// import imgaee from "../../assets/icons/link.png"

const IconCard = ({ className = 'mb-4', icon,title, value }) => {
  // const imgURL = icon
  return (
    <div className={`icon-row-item ${className}`}>
      <Card>
        <CardBody className="text-center">
          {/* <img src={icon} alt={title} width={20} height={20} /> */}
          <div className="text-primary">
            {/* <i className={`${icon} `} /> */}
            {icon}
          </div>
          <p className="lead text-center mt-3">{value}</p>
          <p className="card-text mt-3 font-weight-semibold mb-0">
            <IntlMessages id={title} />
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default React.memo(IconCard);
