/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
// import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Button, Card, CardBody, CardTitle } from 'reactstrap'; //
// import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import { GoDotFill, GoArrowRight } from 'react-icons/go';
import { FaCaretDown } from 'react-icons/fa';
import { LuCalendar } from 'react-icons/lu';
// import { GoArrowRight } from 'react-icons/go';
// import { GoArrowRight } from 'react-icons/fa6';

// import products from 'data/products';

const MakeMoney = () => {
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle className="d-flex flex-row justify-content-between align-items-center mb-1 font-weight-bold">
          <span style={{ fontSize: '28px', fontWeight: '500' }}>
            <IntlMessages id="MakeMoney" />
          </span>
          <div className="">
            <Button
              style={{ backgroundColor: '#f0f0f0' }}
              outline
              color="light"
              className=" border border-theme-4 text-dark font-weight-bold  d-flex flex-row justify-content-between"
            >
              <LuCalendar className="mr-2" size={15} />
              <IntlMessages id="15/5/24 - 15/6/24" />
              <FaCaretDown className="ml-2" size={15} />
            </Button>{' '}
          </div>
        </CardTitle>
        <span
          className="text-muted font-weight-bold"
          style={{ letterSpacing:'1px' }}
        >
          525 689 656
        </span>
        <div className="d-flex flex-row justify-content-between align-items-center mt-2">
          <Badge
            color="primary"
            className="mb-1 rounder pl-2 pr-2 badge-pill border border-theme-4 text-extra-small d-flex flex-row justify-content-between align-items-center"
          >
            <GoDotFill className="" size={12} />
            <IntlMessages id="button.active" />
          </Badge>{' '}
          <span
            className="ml-2 d-inline mb-0 text-primary"
            style={{ fontSize: '14px', fontWeight: '500' }}
          >
            <IntlMessages id="dashboards.view-profiles" />{' '}
            <GoArrowRight
              className="text-extra-small"
              size={15}
              style={{ fontSize: '14px', fontWeight: '500' }}
            />
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default MakeMoney;
