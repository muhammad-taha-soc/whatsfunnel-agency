/* eslint-disable */

import React, { useState, useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import { Card, CardBody, CardTitle, Input, Badge } from 'reactstrap';
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import products from 'data/products';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { BsSliders2 } from 'react-icons/bs';
import {
  FaEllipsisV,
  FaWhatsapp,
  FaFileDownload,
  FaTrash,
  FaSearch,
} from 'react-icons/fa';

import Modal from './Modal';
import OverviewModal from './OverviewModal';

import Calendar from './CalendarModal';
import { Separator } from 'components/common/CustomBootstrap';

function Table({ columns, data, onRowClick }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className="r-table r1-table table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}
              style={{ borderBottom: '1px solid #E8E8E9' }} // Border for header
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  // {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ padding: '12px 22px 18px 22px' }}
                >
                  {column.render('Header')}
                  {column.isSorted && (
                    <i
                      className={`ml-2 mt-1 ${column.isSortedDesc
                        ? 'simple-icon-arrow-up'
                        : 'simple-icon-arrow-down'
                        }`}
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                onClick={(event) => onRowClick(event, row.original)}
              >
                {row.cells.map((cell) => (
                  <td
                    key={cell.column.id}
                    {...cell.getCellProps({ className: cell.column.cellClass })}
                    style={{ verticalAlign: "middle" }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        defaultPageSize={pageSize}
        onPageChange={gotoPage}
        onPageSizeChange={setPageSize}
      />
    </>
  );
}
const sampleCoupons = [
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
  {
    id: '112366',
    actionName: 'List',
    status: 'On',
    sourceOfOrigin: 'Demo',
    issueDate: '10/12/2024',
    redemptionDate: '10/12/2024',
    name: 'Linda Blair',
    telephoneNo: '+4919284434403',
  },
];

const CouponsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer

  const [filterStates, setFilterStates] = useState({
    status: false,
    satisfied: false,
    reviewLinkClicked: false,
    suggestionImprovement: false,
  });

  const [checkboxStates, setCheckboxStates] = useState({
    status: { lead: false, customer: false },
    satisfied: { yes: false, no: false },
    reviewLinkClicked: { yes: false, no: false },
    suggestionImprovement: { yes: false, no: false },
  });
  const resetFilters = () => {
    setFilterStates({
      status: false,
      satisfied: false,
      reviewLinkClicked: false,
      suggestionImprovement: false,
    });
    // Reset checkbox states if needed
  };
  const handleRowClick = (event, customer) => {
    // Check if the clicked element is part of the checkboxes or action button
    if (!event.target.closest('.action-button1')) {
      setSelectedCustomer(customer); // Set the selected customer if the conditions are met
    }
  };

  const handleActionToggle = (id) => {
    setExpandedRowId((prevId) => (prevId === id ? null : id));
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownOpen(!filterDropdownOpen);
  };

  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const toggleFilterOption = (option) => {
    setFilterStates((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const toggleCheckbox = (category, option) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [category]: { ...prev[category], [option]: !prev[category][option] },
    }));
  };

  const cols = useMemo(
    () => [
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: '500', fontSize: '14px' }}>
              <IntlMessages id="coupons.id" />
              <img src='/assets/img/svg/chevron.svg'
                alt='chevron'
              />
            </div>
          </div >
        ),
        accessor: 'id',
        // cellClass: 'font-weight-bold',
        Cell: ({ value }) => (
          <div
            style={{
              cursor: 'pointer',
              fontWeight: '500', fontSize: '14px',
              color: '#1A1C21'
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.status" />
          </div>
        ), accessor: 'status',
        cellClass: 'text-muted',
        Cell: ({ value }) => (
          <div
            className="status-indicator"
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor:
                value === 'On' || value === 'on' ? '#0DAC8A' : 'red',
              borderRadius: '20px', // More rounded corners
              padding: '5px 13px 5px 13px',
              color: 'white',
              textAlign: 'center',
              position: 'relative', // For positioning the dot correctly
              width: '55px', // Set a fixed width for consistency
              height: '26px', // Set a fixed height for consistency
              bottom: '2px',
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
            <div
              style={{
                top: '50%',
                transform: 'translateY(3%)',
                marginLeft: '9px',
                width: '20px',
                height: '17px',
                fontWeight: '500px',
                fontalign: 'center',
                fontSize: '14px',
                lineHeight: '16.94px',
              }}
            >
              {value}
            </div>
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.actionName" />
          </div>
        ), accessor: 'actionName',
        // cellClass: 'font-weight-bold',
        Cell: ({ value }) => (
          <div
            style={{
              cursor: 'pointer',
              color: '#667085',
              fontWeight: '500', fontSize: '14px'
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.sourceofOrigin" />
          </div>
        ), accessor: 'sourceOfOrigin',
        // cellClass: 'font-weight-bold',
        Cell: ({ value }) => (
          <div
            style={{
              cursor: 'pointer',
              color: '#667085',
              fontWeight: '500', fontSize: '14px'
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.issue-date" />
          </div>
        ), accessor: 'issueDate',
        // cellClass: 'font-weight-bold',
        Cell: ({ value }) => (
          <div
            style={{
              cursor: 'pointer',
              color: '#667085',
              fontWeight: '500', fontSize: '14px'
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.redemption-date" />
          </div>
        ), accessor: 'redemptionDate',
        // cellClass: 'font-weight-bold',
        Cell: ({ value }) => (
          <div
            style={{
              cursor: 'pointer',
              color: '#667085',
              fontWeight: '500', fontSize: '14px'
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.name" />
          </div>
        ), accessor: 'name',
        // cellClass: 'font-weight-bold',
        Cell: ({ value }) => (
          <div
            style={{
              cursor: 'pointer',
              color: '#667085',
              fontWeight: '500', fontSize: '14px'
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.telephone" />
          </div>
        ), accessor: 'telephoneNo',
        // cellClass: 'font-weight-bold',
        Cell: ({ value }) => (
          <div
            style={{
              cursor: 'pointer',
              color: '#667085',
              fontWeight: '500', fontSize: '14px'
            }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{
            color: '#667085',
            // fontWeight: 'bold', // Optional: make it bold
            // fontSize: '16px', // Adjust font size if needed
            fontWeight: '500', fontSize: '14px'
          }}>
            <IntlMessages id="coupons.action" />
          </div>
        ), accessor: 'action',
        Cell: ({ row }) => (
          <div
            className="position-relative action-button1"
            style={{ cursor: 'pointer', bottom: '12px' }}
          >
            <button
              type="button"
              // onClick={() => handleActionToggle(row.id)}
              className="btn btn-link"
              aria-expanded={expandedRowId === row.id}
              aria-haspopup="true"
              style={{ cursor: 'pointer', color: "#858D9D", width: '24px', height: '24px' }}
            >
              <FaEllipsisV />
            </button>
            {expandedRowId === row.id && (
              <div
                className="dropdown-menu show"
                style={{ position: 'absolute', zIndex: 1000 }}
              >
                <div className="dropdown-item">
                  <AiFillCloseCircle className="mr-2" />{' '}
                  <IntlMessages id="Unsubscribe from Account" />
                </div>
                <div className="dropdown-item">
                  <FaWhatsapp className="mr-2" />{' '}
                  <IntlMessages id="Unsubscribe from Whatsapp" />
                </div>
                <div className="dropdown-item">
                  <FaFileDownload className="mr-2" />{' '}
                  <IntlMessages id="Download Contact Data" />
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-item text-danger">
                  <FaTrash className="mr-2" />{' '}
                  <IntlMessages id="Delete Contact" />
                </div>
              </div>
            )}
          </div>
        ),
      },
    ],
    [expandedRowId, selectedRows]
  );

  // Filter data based on search term
  const filteredData = useMemo(() => {
    // Use sampleCoupons as the dummy data
    return sampleCoupons
      .filter(
        (item) =>
          (!filterStates.status || item.status === 'On') &&
          (!filterStates.satisfied || item.satisfied === true) &&
          (!filterStates.reviewLinkClicked || item.reviewLink === true) &&
          (!filterStates.suggestionImprovement || item.suggestion === true)
      )
      .filter((item) =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, filterStates]);

  return (
    <>
      <Card className="h-100" style={{ borderRadius: '16px' }}>
        <CardBody style={{ padding: '0px' }}>
          <CardTitle className="d-flex flex-row justify-content-between font-weight-bold mb-0"
            style={{ padding: '20px 22px' }}
          >
            <div
              className="input-group"
              style={{ width: '300px', position: 'relative' }}
            >
              <Input
                type="text"
                placeholder="Search Customer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '30px', borderRadius: '8px' }}
              />
              <IoSearchOutline
                className="search-icon"
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  color: '#888',
                }}
              />
            </div>
            <div>
              <Badge
                color=""
                className="mb-1 border border-theme-4"
                style={{ cursor: 'pointer', padding: '10px 15px' }}
              >
                <BsSliders2 className="mr-2" size={17} />

                <IntlMessages id="dashboards.filters" />
              </Badge>
              {filterDropdownOpen && (
                <div
                  className="filter-dropdown"
                  style={{
                    position: 'absolute',
                    background: 'white',
                    border: '1px solid #ddd',
                    padding: '15px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    zIndex: 10,
                    top: '40px',
                    right: '0px',
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6>Filter</h6>
                    <button
                      type="button"
                      className="close"
                      onClick={toggleFilterDropdown}
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="filter-options">
                    <div className="filter-option">
                      <div
                        className="filter-option-title"
                        onClick={() => toggleFilterOption('status')}
                      >
                        Status
                      </div>
                      {filterStates.status && (
                        <div className="filter-option-content">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-lead"
                              checked={checkboxStates.status.lead}
                              onChange={() => toggleCheckbox('status', 'lead')}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-lead"
                            >
                              Lead
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-customer"
                              checked={checkboxStates.status.customer}
                              onChange={() =>
                                toggleCheckbox('status', 'customer')
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-customer"
                            >
                              Customer
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="filter-option">
                      <div
                        className="filter-option-title"
                        onClick={() => toggleFilterOption('satisfied')}
                      >
                        Satisfied
                      </div>
                      {filterStates.satisfied && (
                        <div className="filter-option-content">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-satisfied-yes"
                              checked={checkboxStates.satisfied.yes}
                              onChange={() =>
                                toggleCheckbox('satisfied', 'yes')
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-satisfied-yes"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-satisfied-no"
                              checked={checkboxStates.satisfied.no}
                              onChange={() => toggleCheckbox('satisfied', 'no')}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-satisfied-no"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="filter-option">
                      <div
                        className="filter-option-title"
                        onClick={() => toggleFilterOption('reviewLinkClicked')}
                      >
                        Review Link Clicked
                      </div>
                      {filterStates.reviewLinkClicked && (
                        <div className="filter-option-content">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-review-yes"
                              checked={checkboxStates.reviewLinkClicked.yes}
                              onChange={() =>
                                toggleCheckbox('reviewLinkClicked', 'yes')
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-review-yes"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-review-no"
                              checked={checkboxStates.reviewLinkClicked.no}
                              onChange={() =>
                                toggleCheckbox('reviewLinkClicked', 'no')
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-review-no"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="filter-option">
                      <div
                        className="filter-option-title"
                        onClick={() =>
                          toggleFilterOption('suggestionImprovement')
                        }
                      >
                        Suggestion for Improvement
                      </div>
                      {filterStates.suggestionImprovement && (
                        <div className="filter-option-content">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-suggestion-yes"
                              checked={checkboxStates.suggestionImprovement.yes}
                              onChange={() =>
                                toggleCheckbox('suggestionImprovement', 'yes')
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-suggestion-yes"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-suggestion-no"
                              checked={checkboxStates.suggestionImprovement.no}
                              onChange={() =>
                                toggleCheckbox('suggestionImprovement', 'no')
                              }
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-suggestion-no"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardTitle>
          <Separator className=" separator-class" />
          <Table
            columns={cols}
            data={sampleCoupons}
            onRowClick={handleRowClick}
          />
        </CardBody>
      </Card>
      {selectedCustomer && (
        <OverviewModal
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        /> // Modal
      )}
      {/* {selectedCustomer && (

                <Calendar customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} /> // Modal


            )} */}
    </>
  );
};

export default CouponsTable;
