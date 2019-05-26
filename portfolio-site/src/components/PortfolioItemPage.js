import React from 'react';

const PortfolioItemPage = props => {
  return (
    <div>
      <h1>A Thing i've done</h1>
      <p>This is for item id : {props.match.params.id}</p>
    </div>
  );
};

export default PortfolioItemPage;
