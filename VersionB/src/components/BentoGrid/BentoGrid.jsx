import React from 'react';
import './BentoGrid.css';
import BentoGridItems from '../BentoGridItems/BentoGridItems.jsx';
import Table from '../Table/Table.jsx';

function BentoGrid() {
  return (
    <div className="bento-grid">
      <BentoGridItems title="Your Ranking" amount="54067" change="(+2026)" />
      <BentoGridItems title="Profile Visits" amount="2,300" change="+5%" />
      <BentoGridItems title="Weekly Listeners" amount="3,052" change="-14%" />

      <BentoGridItems chart /> {/* Adjust to render chart if available */}

      <div className="bento-item large">
        <Table /> {/* Replace static text with the Table component */}
      </div>

      <BentoGridItems title="Satisfaction Rate" progress="78%" />
      <BentoGridItems title="Number Of Projects" completed="145" pending="17" />
      <BentoGridItems title="Vocal Health" score="9.3" />
    </div>
  );
}

export default BentoGrid;