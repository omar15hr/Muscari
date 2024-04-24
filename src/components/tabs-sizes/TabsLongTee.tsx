'use client';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { CmTable } from "../table-sizes/CmTable";
import { InTable } from "../table-sizes/InTable";
import { titleFont } from "@/config/fonts";
import Image from "next/image";

export function TabsLongTee() {
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
      <h1 className={` ${titleFont.className} antialiased font-bold text-xl mb-5`}>
        Guía de tallas (US)
      </h1>
      <Tabs value="html">
        <TabsHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {data.map(({ value }) => (
            <TabPanel key={value} value={value}>
              <div>
                {
                  value === 'cm'
                    ? <CmTable />
                    : value === 'in'
                      ? <InTable />
                      : <CmTable />
                }
              </div>
            </TabPanel>
          ))}
          <div className="mt-5">
            <h1 className={`${titleFont.className} font-bold mb-5`}>¿Cómo medir la talla del producto?</h1>
            <div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">1. Contorno del pecho</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Mida desde los puntos debajo de las axilas de un lado a otro.</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">2. Contorno de la cintura</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Mida desde los puntos en la cintura de un lado a otro.</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">3. Largo de manga</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Mida desde donde la costura del hombro se encuentra con la sisa hasta el puño.</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">4. Largo de la prenda</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Mida desde donde la costura del hombro se une al cuello hasta el dobladillo.</dd>
                  </div>
                  <div className="flex justify-center">
                    <Image src="/imgs/guia-polera-larga.jpg" className="w-[200px] h-[280px]" alt="imagen-guia-talla" />
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
}