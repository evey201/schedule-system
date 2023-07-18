import React, { useState } from 'react';

interface TabsItem {
    id: number,
    title?: string,
    content: React.ReactNode,
    image?: string
}

type Props = {
    tabs: TabsItem[]
}

export const TabbedComponent = ({ tabs }: Props) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (tabId: number): void => {
        setActiveTab(tabId);
    };

    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex mb-4 gap-x-5 cursor-pointer">
                {tabs.map((tab: TabsItem) => (
                    <>
                        <div onClick={() => handleTabClick(tab.id)} className={`w-20 h-20 ${activeTab === tab?.id ? "border-2 border-primary-500" : "border border-primary-200" } rounded-lg p-1`}>
                            {/* IMAGE GOES HERE */}
                            <img src={tab.image} alt="" className="block w-full h-full object-cover" />
                        </div>
                    </>
                ))}
            </div>
            <div className='mt-6'>
                {tabs.map((tab: TabsItem) => (
                    <div
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'block' : 'hidden'} w-full h-full`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};
