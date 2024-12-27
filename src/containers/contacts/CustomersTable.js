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
import { CiCircleMinus } from 'react-icons/ci';
// import { FaWhatsapp } from "react-icons/fa";
import { TbFileDownload } from 'react-icons/tb';

import {
  FaEllipsisV,
  FaWhatsapp,
  FaFileDownload,
  FaTrash,
  FaSearch,
} from 'react-icons/fa';
import Modal from './Modal';
import { Separator } from 'components/common/CustomBootstrap';
import FilterDropdown from 'components/filterDropdown';
import Switch from 'rc-switch';

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
            <tr
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
              style={{ borderBottom: '1px solid #E8E8E9' }} // Border for header
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  // {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ paddingLeft: '22px', paddingRight: '0px' }}
                >
                  {column.render('Header')}
                  {column.isSorted && (
                    <i
                      className={`ml-2 mt-1 ${
                        column.isSortedDesc
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
                    style={{ verticalAlign: 'middle' }}
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

const CustomersTable = () => {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
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
    if (
      !event.target.closest('.checkbox-container') &&
      !event.target.closest('.action-button1')
    ) {
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#667085',
              fontWeight: '500',
              fontSize: '14px',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                // Remove onChange for no functionality
                style={{
                  marginRight: '8px',
                  appearance: 'none', // Remove default styling
                  width: '20px', // Custom width
                  height: '20px', // Custom height
                  border: '2px solid #A3A9B6', // Custom border color and thickness
                  borderRadius: '6px', // Optional: Add some rounding
                  outline: 'none', // Remove default focus outline
                  cursor: 'pointer', // Change cursor to pointer
                }}
              />
              <IntlMessages id="contacts.title" />
            </div>
            <div>
              <img src="/assets/img/svg/chevron.svg" alt="chevron" />
            </div>
          </div>
        ),
        accessor: 'title',
        cellClass:"w-80",
        Cell: ({ row }) => (
          <div
            className="checkbox-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#1A1C21',
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            <input
              type="checkbox"
              checked={selectedRows.has(row.id)}
              onChange={() => toggleRowSelection(row.id)}
              style={{
                marginRight: '8px',
                appearance: 'none', // Remove default styling
                width: '20px', // Custom width
                height: '20px', // Custom height
                border: '2px solid #A3A9B6', // Custom border color and thickness
                borderRadius: '6px', // Optional: Add some rounding
                outline: 'none', // Remove default focus outline
                cursor: 'pointer', // Change cursor to pointer
              }}
            />
            {row.original.title}
          </div>
        ),
      },

    
      
     
      {
        Header: () => (
          <div
            style={{
              color: '#667085',
              // fontWeight: 'bold', // Optional: make it bold
              // fontSize: '16px', // Adjust font size if needed
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
          </div>
        ),
        accessor: 'suggestion',
        cellClass: 'w-10 text-theme-2',
        Cell: ({ value }) => (
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#86868A',
              border: '1px solid #86868A',
              borderRadius: '4px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            Impersonate
          </button>
        ),
      },
      {
        Header: () => (
          <div
            style={{
              color: '#667085',
              // fontWeight: 'bold', // Optional: make it bold
              // fontSize: '16px', // Adjust font size if needed
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
          </div>
        ),
        accessor: 'action',
        Cell: ({ row }) => (
          <Switch
            id="tooltip_switch"
            className="custom-switch custom-switch-primary custom-switch-small"
            // checked={switchChecked}
            // onChange={changeMode}
          />
        ),
      },
    ],
    [expandedRowId, selectedRows]
  );

  // Filter data based on search term
  const filteredData = products.filter(
    (product) =>
      product.title &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Card
        className="h-100"
        style={{ borderRadius: '16px', margin: '24px 24px 24px 0' }}
      >
        <CardBody style={{ padding: '0px' }}>
          <CardTitle
            className="d-flex flex-row justify-content-between mb-0"
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
            <div style={{ position: 'relative' }}>
              <Badge
                color=""
                className="mb-1 border border-theme-4"
                style={{ cursor: 'pointer', padding: '10px 15px' }}
                onClick={toggleFilterDropdown}
              >
                <BsSliders2 className="mr-2" size={15} />
                <IntlMessages id="dashboards.filters" />
              </Badge>
              {filterDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 1000,
                    right: '-10px',
                    top: '-15px',
                  }}
                >
                  <FilterDropdown />
                </div>
                // <div
                //   className="filter-dropdown"
                //   style={{
                //     position: 'absolute',
                //     background: 'white',
                //     border: '1px solid #ddd',
                //     padding: '15px',
                //     borderRadius: '8px',
                //     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                //     zIndex: 10,
                //     top: '40px',
                //     right: '0px',
                //     maxWidth: '300px',
                //     minWidth: '300px',
                //   }}
                // >
                //   <div className="d-flex justify-content-between align-items-center mb-3">
                //     <h6
                //       style={{
                //         color: '#1A1C21',
                //         fontWeight: '600px',
                //         fontsize: '20px',
                //         lineHeight: '30px',
                //       }}
                //     >
                //       Filter
                //     </h6>
                //     <button
                //       type="button"
                //       className="close"
                //       onClick={toggleFilterDropdown}
                //     >
                //       <span
                //         style={{
                //           color: '#0DAC8A',
                //           fontWeight: '700px',
                //           fontsize: '14px',
                //           lineHeight: '20px',
                //         }}
                //       >
                //         &times; Reset
                //       </span>
                //     </button>
                //   </div>
                //   <div className="filter-options">
                //     {/* <div className="filter-option">
                //                             <div className="filter-option-title" onClick={() => toggleFilterOption('status')}>
                //                                 Status
                //                             </div>
                //                             {filterStates.status && (
                //                                 <div className="filter-option-content">
                //                                     <div className="custom-control custom-checkbox">
                //                                         <input
                //                                             type="checkbox"
                //                                             className="custom-control-input"
                //                                             id="checkbox-lead"
                //                                             checked={checkboxStates.status.lead}
                //                                             onChange={() => toggleCheckbox('status', 'lead')}
                //                                         />
                //                                         <label className="custom-control-label" htmlFor="checkbox-lead">Lead</label>
                //                                     </div>
                //                                     <div className="custom-control custom-checkbox">
                //                                         <input
                //                                             type="checkbox"
                //                                             className="custom-control-input"
                //                                             id="checkbox-customer"
                //                                             checked={checkboxStates.status.customer}
                //                                             onChange={() => toggleCheckbox('status', 'customer')}
                //                                         />
                //                                         <label className="custom-control-label" htmlFor="checkbox-customer">Customer</label>
                //                                     </div>
                //                                 </div>
                //                             )}
                //                         </div> */}
                //     <div className="filter-option">
                //       <div
                //         className="filter-option-title"
                //         onClick={() => toggleFilterOption('satisfied')}
                //       >
                //         Satisfied
                //       </div>
                //       {filterStates.satisfied && (
                //         <div className="filter-option-content">
                //           <div className="custom-control custom-checkbox">
                //             <input
                //               type="checkbox"
                //               className="custom-control-input"
                //               id="checkbox-satisfied-yes"
                //               checked={checkboxStates.satisfied.yes}
                //               onChange={() =>
                //                 toggleCheckbox('satisfied', 'yes')
                //               }
                //             />
                //             <label
                //               className="custom-control-label"
                //               htmlFor="checkbox-satisfied-yes"
                //             >
                //               Yes
                //             </label>
                //           </div>
                //           <div className="custom-control custom-checkbox">
                //             <input
                //               type="checkbox"
                //               className="custom-control-input"
                //               id="checkbox-satisfied-no"
                //               checked={checkboxStates.satisfied.no}
                //               onChange={() => toggleCheckbox('satisfied', 'no')}
                //             />
                //             <label
                //               className="custom-control-label"
                //               htmlFor="checkbox-satisfied-no"
                //             >
                //               No
                //             </label>
                //           </div>
                //         </div>
                //       )}
                //     </div>
                //     <div className="filter-option">
                //       <div
                //         className="filter-option-title"
                //         onClick={() => toggleFilterOption('reviewLinkClicked')}
                //       >
                //         Review Link Clicked
                //       </div>
                //       {filterStates.reviewLinkClicked && (
                //         <div className="filter-option-content">
                //           <div className="custom-control custom-checkbox">
                //             <input
                //               type="checkbox"
                //               className="custom-control-input"
                //               id="checkbox-review-yes"
                //               checked={checkboxStates.reviewLinkClicked.yes}
                //               onChange={() =>
                //                 toggleCheckbox('reviewLinkClicked', 'yes')
                //               }
                //             />
                //             <label
                //               className="custom-control-label"
                //               htmlFor="checkbox-review-yes"
                //             >
                //               Yes
                //             </label>
                //           </div>
                //           <div className="custom-control custom-checkbox">
                //             <input
                //               type="checkbox"
                //               className="custom-control-input"
                //               id="checkbox-review-no"
                //               checked={checkboxStates.reviewLinkClicked.no}
                //               onChange={() =>
                //                 toggleCheckbox('reviewLinkClicked', 'no')
                //               }
                //             />
                //             <label
                //               className="custom-control-label"
                //               htmlFor="checkbox-review-no"
                //             >
                //               No
                //             </label>
                //           </div>
                //         </div>
                //       )}
                //     </div>
                //     <div className="filter-option">
                //       <div
                //         className="filter-option-title"
                //         onClick={() =>
                //           toggleFilterOption('suggestionImprovement')
                //         }
                //       >
                //         Suggestion for Improvement
                //       </div>
                //       {filterStates.suggestionImprovement && (
                //         <div className="filter-option-content">
                //           <div className="custom-control custom-checkbox">
                //             <input
                //               type="checkbox"
                //               className="custom-control-input"
                //               id="checkbox-suggestion-yes"
                //               checked={checkboxStates.suggestionImprovement.yes}
                //               onChange={() =>
                //                 toggleCheckbox('suggestionImprovement', 'yes')
                //               }
                //             />
                //             <label
                //               className="custom-control-label"
                //               htmlFor="checkbox-suggestion-yes"
                //             >
                //               Yes
                //             </label>
                //           </div>
                //           <div className="custom-control custom-checkbox">
                //             <input
                //               type="checkbox"
                //               className="custom-control-input"
                //               id="checkbox-suggestion-no"
                //               checked={checkboxStates.suggestionImprovement.no}
                //               onChange={() =>
                //                 toggleCheckbox('suggestionImprovement', 'no')
                //               }
                //             />
                //             <label
                //               className="custom-control-label"
                //               htmlFor="checkbox-suggestion-no"
                //             >
                //               No
                //             </label>
                //           </div>
                //         </div>
                //       )}
                //     </div>
                //   </div>
                // </div>
              )}
            </div>
          </CardTitle>
          <Separator className=" separator-class" />
          <Table
            columns={cols}
            data={filteredData}
            onRowClick={handleRowClick}
          />
        </CardBody>
      </Card>
      {selectedCustomer && (
        <Modal
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        /> // Modal
      )}
    </>
  );
};

export default CustomersTable;
