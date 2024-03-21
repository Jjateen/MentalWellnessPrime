import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const result = location.state?.result || {};

  const renderIcon = (value) => {
    return value === 1 ? "✅" : "❌";
  };

  return (
    <div>
      <h2 className='text-center text-3xl font-bold mt-6'>Diagnosis Result</h2>
      <table className='m-auto mt-8'>
        <thead>
          <tr className='text-base font-semibold'>
            {/* <th>Icon</th> */}
            <th className='text-start'>Condition</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody className=''>
          {Object.entries(result).map(([key, value]) => (
            <tr key={key}>
              
              <td>{key.replace(/-/g, ' ')}</td>
              {/* <td>{value === 1 ? "Yes" : "No"}</td> */}
              <td>{renderIcon(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;

