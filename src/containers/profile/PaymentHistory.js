/* eslint-disable */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap'; //
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';

import products from 'data/products';
import "./profile.css"
import { Separator } from 'components/common/CustomBootstrap';

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
            <table {...getTableProps()} className="r-table r1-table table">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}
                            style={{ borderBottom: '1px solid #E8E8E9' }}>
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th
                                    key={`th_${columnIndex}`}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{ padding: '12px 22px 18px 22px' }}
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
                                    {/* {column.render('Header') !== 'Newsletter' && (
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
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, cellIndex) => (
                                    <td
                                        key={`td_${cellIndex}`}
                                        {...cell.getCellProps({
                                            className: cell.column.cellClass,
                                        })}
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
                showPageSizeOptions={false}
                showPageJump={false}
                defaultPageSize={pageSize}
                onPageChange={(p) => gotoPage(p)}
                onPageSizeChange={(s) => setPageSize(s)}
                paginationMaxSize={pageCount}
            />
        </>
    );
}

const NewsLetter = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: 'Invoice',
                accessor: 'newsLetter',
                cellClass: 'font-weight-bold w-25',
                Cell: (props) => <div style={{ fontSize: "14px", fontWeight: "500", color: "#1A1C21" }}>Basic Plan - Dec 2022</div>,
                sortType: 'basic',
            },
            {
                Header: 'Amount',
                accessor: 'createDate',
                cellClass: 'text-muted w-20',
                Cell: (props) => <div style={{ fontSize: "14px", fontWeight: "500", color: "#667085" }}>USD $10.00</div>,
                sortType: 'basic',
            },
            {
                Header: 'Date',
                accessor: 'delivered',
                cellClass: ' w-20 ',
                Cell: (props) => <div style={{ fontSize: "14px", fontWeight: "500", color: "#667085" }}>Dec 1, 2022</div>,
                sortType: 'basic',
            },
            {
                Header: 'Status',
                accessor: 'read',
                cellClass: ' w-20',
                Cell: (props) => <div><span style={{ backgroundColor: "#0DAC8A1A", color: "#0DAC8A", padding: "4px 10px", borderRadius: "50px", fontSize: "14px", fontWeight: "500" }}>Paid</span> </div>,
                sortType: 'basic',
            },
            {
                Header: 'Action',
                accessor: 'clicked',
                cellClass: 'text-theme-2 w-20',
                Cell: (props) => <><i className='simple-icon-options-vertical' style={{ color: "gray" }} /></>,
                sortType: 'basic',
            },
        ],
        []
    );

    return (
        <CardBody className='card rounded-md mt-4' style={{ borderRadius: "16px", padding: '0px' }}>
            <CardTitle className="d-flex flex-row justify-content-between font-weight-bold">
                <h2 className='billing-heading'>Billing History</h2>
                <div style={{ cursor: "pointer", marginRight: '14px', position: 'relative', top: '12px' }}>
                    <div className="b-btn">
                        <img src={'/assets/img/modals/download.svg'} style={{ width: '20px', height: '20px' }} alt='Visa' />
                        <IntlMessages id="Download" />
                    </div>
                </div>
            </CardTitle>
            <Separator className=" separator-class" />

            <Table columns={cols} data={products} />
        </CardBody>
    );
};

export default NewsLetter;
