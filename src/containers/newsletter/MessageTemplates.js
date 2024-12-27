/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from 'reactstrap';
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import { IoSearchOutline } from 'react-icons/io5';
import { BsSliders2 } from 'react-icons/bs';
import { LuTrash2 } from 'react-icons/lu';
import { FiEdit3 } from 'react-icons/fi';

import products from 'data/products';
import { Separator } from 'components/common/CustomBootstrap';
// import { FaSearch } from 'react-icons/fa';

function Table({ columns, data }) {
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
    useSortBy,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className="r-table table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{ borderBottom: '1px solid #E8E8E9' }}
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  className="text-muted"
                  key={`th_${columnIndex}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  // className={`
                  //   ${
                  //     column.isSorted
                  //       ? column.isSortedDesc
                  //         ? 'sorted-desc'
                  //         : 'sorted-asc'
                  //       : ''
                  //   }
                  // `}
                >
                  <span style={{ marginRight: `${column.render('Header') === "Action" && '1rem'}` }}>
                    {' '}
                    {column.render('Header')}{' '}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            console.log({ row });

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ margin: '0 1rem 0.9rem 0rem' }}>
        <DatatablePagination
          page={pageIndex}
          pages={pageCount}
          canPrevious={canPreviousPage}
          canNext={canNextPage}
          pageSizeOptions={[4, 10, 20, 30, 40, 50]}
          showPageSizeOptions={false}
          showPageJump={false}
          defaultPageSize={pageSize}
          onPageChange={(p) => gotoPage(p)}
          onPageSizeChange={(s) => setPageSize(s)}
          paginationMaxSize={pageCount}
        />
      </div>
    </>
  );
}

const MessageTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());

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

  const cols = React.useMemo(
    () => [
      {
        Header: () => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#667085',
              marginLeft: '1rem',
              // marginRight: '1.75rem',
            }}
          >
            <input
              type="checkbox"
              // Remove onChange for no functionality
              style={{ marginRight: '8px' }}
            />
            <IntlMessages id="Surname" />
          </div>
        ),
        accessor: 'newsLetter',
        cellClass: 'w-40 font-weight-medium text-14px table-heading-row-color',
        Cell: ({ row }) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              padding: '0rem 0rem 0rem 1rem',
            }}
          >
            <input
              type="checkbox"
              checked={selectedRows.has(row.id)}
              onChange={() => toggleRowSelection(row.id)}
              style={{ marginRight: '8px' }}
            />
            {row.original.title}
          </div>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Category',
        accessor: 'createDate',
        cellClass: 'text-muted w-20 text-14px ',
        Cell: () => <>Marketing</>,
        sortType: 'basic',
      },
      {
        Header: 'Language',
        accessor: 'stock',
        cellClass: 'text-muted w-20 text-14px ',
        Cell: () => (
          <div>
            <img
              className="mr-1"
              alt="approved"
              src="/assets/img/newsletter/german-icon.svg"
              size={0.1}
            />
            <IntlMessages id="German" />
          </div>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Status',
        accessor: 'read',
        cellClass: 'text-primary text-14px  w-20',
        Cell: () => (
          <>
            <Badge
              // color="outline-primary"
              className="mb-1 text-primary bg-primary-opacity rounded pl-2 pr-2 text-14px "
              // style={{fontSize:"12px"}}
            >
              {/* <i className="iconsminds-record-2" /> */}
              <img
                className="mr-1"
                alt="approved"
                src="/assets/img/newsletter/check-approved-icon.svg"
                size={0.1}
              />
              <IntlMessages id="Approved" />
            </Badge>{' '}
          </>
        ),
        sortType: 'basic',
      },
      {
        Header: 'Action',
        accessor: '',
        cellClass: 'w-10 text-14px text-center',
        Cell: (props) => <ActionDropdown props={props} />,
        // sortType: 'basic',
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <Card className="h-100 p-0">
      <CardBody className="p-0">
        <CardTitle
          className="d-flex flex-row justify-content-between font-weight-bold"
          style={{ margin: '1.5rem 1.5rem 1.5rem 1.5rem' }}
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
              style={{ paddingLeft: '30px', borderRadius: '5px' }}
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
              style={{ fontWeight: '500', fontSize: '14px', color: '#0D0D26' }}
            >
              <BsSliders2 className="mr-2" size={15} />
              <IntlMessages id="dashboards.filters" />
            </Badge>{' '}
          </div>
        </CardTitle>
        <Separator className="separator-class" />
        <Table columns={cols} data={products} />
      </CardBody>
    </Card>
  );
};

const ActionDropdown = ({ props }) => {
  console.log({ props });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      className=" c-pointer"
    >
      <DropdownToggle
        className="simple-icon-options-vertical "
        tag="span"
        data-toggle="dropdown"
      />
      <DropdownMenu right className="">
        <DropdownItem
          className="text-dark"
          style={{ fontSize: '14px', color: '#0D0D26' }}
        >
          <FiEdit3 className=" mr-2" size={18} />
          Edit{' '}
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="text-theme-5 " style={{ fontSize: '14px' }}>
          <LuTrash2 className=" mr-2" size={18} /> Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MessageTemplates;
