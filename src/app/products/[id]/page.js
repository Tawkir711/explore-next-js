import React from 'react';

const DynamicPage = ({params}) => {
  console.log(params);
  return (
    <div>
      <h1>This is Dynamic Page: {params.id} </h1>
    </div>
  );
};

export default DynamicPage;