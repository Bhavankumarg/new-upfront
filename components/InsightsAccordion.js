// components/Accordion.js

import { useState } from 'react';

const Accordion = ({ tabs, getActiveTab }) => {
  const [openTab, setOpenTab] = useState(null);

  const handleToggle = (tab) => {
    if (openTab === tab) {
      setOpenTab(null);
    } else {
      setOpenTab(tab);
      getActiveTab(tab);
    }
  };

  return (
    <div className="accordion">
      {tabs.map((tab) => (
        <div key={tab} className="accordion-item">
          <button
            onClick={() => handleToggle(tab)}
            className="accordion-button"
          >
            {tab}
          </button>
          {openTab === tab && (
            <div className="accordion-content">
              {/* Placeholder for dynamic content */}
              <p>Content for {tab}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
 