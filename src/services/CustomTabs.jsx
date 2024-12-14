import { useState } from 'react';

export function useTabs(initialIndex = 0) {
  const [activeTab, setActiveTab] = useState(initialIndex);

  const ChangeTab = (index) => {
    setActiveTab(index);
  };

  return {
    activeTab,
    ChangeTab,
  };
}
