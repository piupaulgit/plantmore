"use client"

import React, { useState } from "react";

export function Tabs(props: any) {
  const [activeTab, setActiveTab] = useState(findActiveTab(props.children));

  function findActiveTab(a: any) {
    return a.reduce((activeVal: any, currentValue: any, i: number) => {
      if (currentValue.props.active) {
        return i;
      }

      return activeVal;
    }, 0);
  }
  return (
    <div className="my-20 container mx-auto">
      <div className="flex gap-2 justify-center">
        {props.children.map((item: any, i: number) => {
          return (
            <>
              <Tab
                key={`tab-{i}`}
                currentTab={i}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                {item.props.title}
              </Tab>
            </>
          );
        })}
      </div>
      <div className="p-5">
        {props.children.map((item: any, i: number) => {
          return <div className={` ${i === activeTab ? "visible" : "hidden"}`}>{item.props.children}</div>;
        })}
      </div>
    </div>
  );
}

export function Tab(props: any) {
  return (
    <>
      <div
        className={`px-5 py-3 text-3xl font-bold cursor-pointer
      ${
        props.activeTab === props.currentTab
          ? " text-gray-700"
          : " text-gray-300"
      }`}
        onClick={() => props.setActiveTab(props.currentTab)}
      >
        {props.children}
      </div>
    </>
  );
}
