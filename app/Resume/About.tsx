"use client";

import React from "react";
import { aboutItem } from "@/constants/constant";

export default function Works() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-3xl font-bold mb-2">
          {aboutItem.title}
        </h3>
        <p className="text-gray-500 max-w-[600px]">
          {aboutItem.description}
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/10 p-6 rounded-lg">
        {aboutItem.info.map((item, index) => (
          <li
            key={index}
            className="flex justify-between  border-b p-4 rounded-lg items-center pb-2"
          >
            <span className="font-medium">
              {item.fieldName}
            </span>
            <span className="text-gray-500">
              {item.fieldValue}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
