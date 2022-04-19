import React from 'react';
import './App.css';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';

const PRIMARY = '#2C5EB2';
const SECONDARY = '#D5DFF0';
const breadCrumbList = ['Knowledge Table', 'Brand MW', 'Overview', 'More details'];

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', margin: '16px' }}>
        <BreadCrumb
          data={{
            label: 'Knowledge Table',
            color: 'white',
          }}
        />

        {breadCrumbList?.map((item: string, index: number) => {
          return (
            <div key={`item-${item}-${index}`}>
              {index !== breadCrumbList.length - 1 && (
                <BreadCrumb
                  key={item}
                  data={{
                    label: item,
                    color: 'white',
                    borderColor: SECONDARY ,
                    labelColor: PRIMARY,
                  }}

                />
              )}
            </div>
          )
        })}
        
        <BreadCrumb data={{ label: 'More details', labelColor: 'white', color: PRIMARY, borderColor: PRIMARY }} />
      </div>
    </div>
  );
}

export default App;
