import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [sortKeyword, setSortKeyword] = useState('assignee name');

  const settings = {
    showCompleted,
    itemsPerPage,
    sortKeyword,
    setShowCompleted,
    setItemsPerPage,
    setSortKeyword,
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
