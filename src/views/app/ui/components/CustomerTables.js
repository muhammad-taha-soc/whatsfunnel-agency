import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Badge, Card, CardBody, CardTitle, Input } from 'reactstrap';
import DatatablePagination from 'components/DatatablePagination';
import IntlMessages from 'helpers/IntlMessages';
import products from 'data/products';

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
        useSortBy,
        usePagination
      );
    
      return (
        <>
          <table {...getTableProps()} className="r-table table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th key={`th_${index}`} {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}{' '}
                      {column.isSorted ? (
                        <i className={`ml-2 mt-1 ${column.isSortedDesc ? 'simple-icon-arrow-up' : 'simple-icon-arrow-down'}`} />
                      ) : null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} onClick={() => onRowClick(row.original)}>
                    {row.cells.map((cell, cellIndex) => (
                      <td key={`td_${cellIndex}`} {...cell.getCellProps({ className: cell.column.cellClass })}>
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
            defaultPageSize={pageSize}
            onPageChange={gotoPage}
            onPageSizeChange={setPageSize}
          />
        </>
      );
    }
    

const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cols = useMemo(() => [
    {
      Header: <IntlMessages id="contacts.customer-name" />,
      accessor: 'name',
      cellClass: 'font-weight-bold',
      Cell: props => <>{props.value}</>,
    },
    {
      Header: <IntlMessages id="contacts.status" />,
      accessor: 'status',
      cellClass: 'text-muted',
      Cell: props => <>{props.value}</>,
    },
    {
      Header: <IntlMessages id="contacts.satisfied" />,
      accessor: 'satisfied',
      cellClass: 'text-theme-3',
      Cell: props => <>{props.value ? 'Yes' : 'No'}</>,
    },
    {
      Header: <IntlMessages id="contacts.review-link" />,
      accessor: 'reviewLink',
      cellClass: 'text-primary',
      Cell: props => <a href={props.value} target="_blank" rel="noopener noreferrer">Link</a>,
    },
    {
      Header: <IntlMessages id="contacts.suggestion" />,
      accessor: 'suggestion',
      cellClass: 'text-theme-2',
      Cell: props => <>{props.value}</>,
    },
    {
      Header: <IntlMessages id="contacts.action" />,
      accessor: 'action',
      Cell: () => (
        <button type="button" className="btn btn-primary">
          <IntlMessages id="contacts.edit" />
        </button>
      ),
    },
  ], []);

  // Filter data based on search term
  const filteredData = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle className="d-flex flex-row justify-content-between font-weight-bold mb-3">
          <Input
            type="text"
            placeholder="Search Customer..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ width: '300px' }}
          />
        </CardTitle>
        <Table columns={cols} data={filteredData} />
      </CardBody>
    </Card>
  );
};

export default DataTable;
