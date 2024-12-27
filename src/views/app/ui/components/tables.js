import React, { useState } from 'react';
import { Row, Card, CardBody, Table, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

const TablesUi = ({ match, columns, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  // Filtered data based on search input
  const filteredData = data.filter(row =>
    columns.some(column => 
      String(row[column]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row className="mb-5">
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>

              <div className="d-flex justify-content-between align-items-center mb-3">
                {/* Search Bar */}
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{ width: '40%' }}
                />

                {/* Filter Dropdown */}
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle caret>
                    Filters
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Filter Options</DropdownItem>
                    <DropdownItem disabled>Filter 1</DropdownItem> {/* Example */}
                    <DropdownItem disabled>Filter 2</DropdownItem> {/* Example */}
                    {/* Add more filter options as needed */}
                  </DropdownMenu>
                </Dropdown>
              </div>

              <Table>
                <thead>
                  <tr>
                    {columns.map(column => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map(row => (
                    <tr key={row.id}>
                      {columns.map(column => (
                        <td key={`${row.id}-${column}`}>{row[column]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default TablesUi;
