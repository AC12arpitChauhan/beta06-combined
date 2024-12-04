import React from 'react';
import './Table.css';

const Table = () => {
  // Sample data for demonstration purposes
  const data = [
    { username: 'Jane Maria', globalRank: 1, regionalRank: 1, country: 'USA' },
    { username: 'Steve Johnson', globalRank: 2, regionalRank: 2, country: 'New York' },
    { username: 'Gurmeet Singh', globalRank: 3, regionalRank: 3, country: 'India' },
    { username: 'IIITechgeeks', globalRank: 54067, regionalRank: 15089, country: 'India' },
  ];

  return (
    <div className="sales-chart-container">
      <table className="sales-chart-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Global Rank</th>
            <th>Regional Rank</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.username}</td>
              <td>{row.globalRank}</td>
              <td>{row.regionalRank}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
