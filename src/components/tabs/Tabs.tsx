'use client'

import { useState } from 'react'

interface Tab {
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  actionButton?: React.ReactNode
}

export default function Tabs({ tabs, actionButton }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='tabs min-h-[42px] h-[42px] border-b border-line flex items-center px-[16px] justify-between scrollbar scrollbar-hide '>
      {/* 탭 헤더 */}
      <div className='tab-header flex gap-[24px] h-full'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-item text-small h-full border-b-[3px] relative ${
              activeTab === index
                ? "text-textPrimary border-transparent after:content-[' '] after:left-[50%] after:translate-x-[-50%]  after:absolute after:bottom-[-3px] after:mx-auto after:my-0 after:bg-textBrand after:h-[3px] after:w-[16px]"
                : 'text-tertiaryText border-transparent	'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {actionButton}
    </div>
  )
}
