import React from 'react';
import BreadCrumb from './components/BreadCrumbList/BreadCrumbList';

const breadCrumbList = ['Brand MW', 'Overview', 'More details'];

function App() {
  return (
      <div style={{ margin: '16px' }}>
        <BreadCrumb breadCrumbList={breadCrumbList} title="Knowledge Table" />
      </div>
  );
}

export default App;
