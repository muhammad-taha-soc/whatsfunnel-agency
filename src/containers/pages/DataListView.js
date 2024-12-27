import React from 'react';
import TablesUi from 'views/app/ui/components/tables';

const DataListView = ({ match }) => {
  const columns = [
    'Customers Name',
    'Status',
    'Satisfied',
    'Review Link Clicked',
    'Suggestion for Improvement',
    'Action'
  ];

  const handleEdit = (product) => {
    // Functionality for editing a product
    console.log('Editing product:', product);
  };

  // Dummy data
  const products = [
    {
      id: 1,
      title: 'John Doe',
      status: 'Active',
      satisfied: true,
      reviewLink: 'https://example.com/review/1',
      suggestion: 'Improve customer service.'
    },
    {
      id: 2,
      title: 'Jane Smith',
      status: 'Inactive',
      satisfied: false,
      reviewLink: 'https://example.com/review/2',
      suggestion: 'Faster response times.'
    },
    {
      id: 3,
      title: 'Alice Johnson',
      status: 'Active',
      satisfied: true,
      reviewLink: 'https://example.com/review/3',
      suggestion: 'More product variety.'
    },
  ];

  // Create data for the table
  const data = products.map(product => ({
    'Customers Name': product.title,
    'Status': product.status,
    'Satisfied': product.satisfied ? 'Yes' : 'No',
    'Review Link Clicked': <a href={product.reviewLink} target="_blank" rel="noopener noreferrer">Link</a>,
    'Suggestion for Improvement': product.suggestion,
    'Action': (
      <button type="button" className="btn btn-primary" onClick={() => handleEdit(product)}>Edit</button>
    ),
  }));

  return (
    <div>
      {/* Render the dynamic table */}
      <TablesUi match={match} columns={columns} data={data} />
    </div>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent */
export default React.memo(DataListView);
