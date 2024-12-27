/* eslint-disable */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap'; //
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import products from 'data/products';
import Calendar from './CalendarModal';
import EditCoupon from './EditCouponModal';
import {
    FaEllipsisV
} from 'react-icons/fa';

function Table({ columns, data, onEditCoupon }) {
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
                        <tr style={{ borderBottom: '1px solid #f3f3f3' }} {...headerGroup.getHeaderGroupProps()} >
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th
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
                                    {column.render('Header')}{' '}
                                    {/* {column.render('Header') !== 'AdministrationTable' && (
                                        <i
                                            className={`ml-2 mt-1 ${column.isSortedDesc
                                                ? 'simple-icon-arrow-up'
                                                : 'simple-icon-arrow-down'
                                                }`}
                                        />
                                    )} */}
                                    <span />
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
                            <tr {...row.getRowProps()}
                                onClick={() => {
                                    // If the clicked cell is not "Validity", open edit coupon modal
                                    const isValidityColumnClicked = row.cells.some(
                                        (cell) => cell.column.id === 'delivered' && cell.getCellProps().onClick
                                    );

                                    if (!isValidityColumnClicked) {
                                        onEditCoupon(row.original);
                                    }
                                }}
                            >
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
        </>
    );
}

const AdministrationTable = () => {
    const [isEditCouponOpen, setIsEditCouponOpen] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    const cols = React.useMemo(
        () => [
            {
                Header: () => (
                    <div style={{ cursor: 'pointer', color: "#667085", fontWeight: '600' }}>Coupon</div>
                ),
                accessor: 'newsLetter',
                cellClass: 'w-15',
                Cell: (props) => <>
                    <div style={{ cursor: 'pointer', border: '1px solid #DDDDDD', borderRadius: '10px', width: '48px', height: '48px' }}>
                        <img src={'/assets/img/blog/coupon.svg'} width={48} height={48} alt='Visa' />
                    </div>
                </>,
                sortType: 'basic',
            },
            {
                Header: () => (
                    <div style={{ cursor: 'pointer', color: "#667085", fontWeight: '500', fontSize: "14px" }}>Promotion Name</div>
                ),
                accessor: 'createDate',
                cellClass: 'text-muted w-20',
                Cell: (props) => <><div style={{ cursor: 'pointer', fontWeight: '500', fontSize: "14px", color: "#1A1C21" }}>
                    Demo</div></>,
                sortType: 'basic',
            },
            {
                Header: () => (
                    <div style={{ cursor: 'pointer', color: "#667085", fontWeight: '600' }}>Promotion Name</div>
                ),
                accessor: 'delivered',
                cellClass: 'w-20',
                Cell: (props) => <><div style={{ cursor: 'pointer', color: "#667085", fontWeight: '500', fontSize: "14px", }}>
                    25.05.2025 - 25.08.2025</div></>,
                sortType: 'basic',
            },
            {
                Header: () => (
                    <div style={{ cursor: 'pointer', color: "#667085", fontWeight: '500', fontSize: "14px", }}>Condition</div>
                ),
                accessor: 'read',
                cellClass: 'w-40',
                Cell: (props) => <><div style={{ cursor: 'pointer', color: "#667085", fontWeight: '500', fontSize: "14px", }}>
                    Lorem ipsum dolor sit amet consectetur. Urna sit felis donec adipiscing</div></>,
                sortType: 'basic',
            },
            {
                Header: () => (
                    <div style={{ cursor: 'pointer', color: "#667085", fontWeight: '500', fontSize: "14px", }}>Action</div>
                ),
                accessor: 'clicked',
                cellClass: 'text-theme-2 w-20',
                Cell: (props) => <><div style={{ cursor: 'pointer' }}>
                    <FaEllipsisV style={{ color: "gray" }} /></div></>,
                sortType: 'basic',
            },
        ],
        []
    );



    const handleEditCoupon = (coupon) => {
        setSelectedCoupon(coupon);
        setIsEditCouponOpen(true); // Open the edit coupon modal
    };

    return (
        <CardBody className='card rounded-md mt-4' style={{ borderRadius: '16px' }}>
            <Table
                columns={cols}
                data={products}
                onEditCoupon={handleEditCoupon}
            />

            {isEditCouponOpen && (
                <EditCoupon
                    isOpen={isEditCouponOpen}
                    onClose={() => setIsEditCouponOpen(false)}
                    coupon={selectedCoupon}
                />
            )}
        </CardBody>
    );
};

export default AdministrationTable;
