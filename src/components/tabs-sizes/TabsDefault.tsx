'use client';

import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { SelectSizes } from "./SelectSizes";



export function TabsDefault() {
  const data = [
    {
      label: "CM",
      value: "cm",
    },
    {
      label: "IN",
      value: "in",
    },
  ];

  return (
    <div className="mt-10">
      <Typography className="flex flex-wrap bg-gray-300 rounded" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <span className="text-black font-bold text-center w-full md:w-1/3 p-4 mt-4">Cambiar</span>
        <SelectSizes />
        <Tabs className="w-full md:w-1/3 p-4 items-center justify-center" value="dashboard" orientation="vertical">
          <TabsHeader className="w-40 mt-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="place-items-start text-xs" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="flex items-center gap-2">
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
      </Typography>

    </div>
  );
}

