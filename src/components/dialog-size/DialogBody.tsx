'use client';

import React, { useState } from "react";
import { DialogBody } from "@material-tailwind/react";
import CountrySelect from "./components/selects/CountrySelect";
import { Buttons } from "./components/Buttons";
import { SizeTable } from "./components/tables/SizeTable";
import UnitSelect from "./components/selects/UnitsSelect";
import { SizeTableIn } from "./components/tables/SizeTableIn";


export function DialogBodyItem() {

  const [country, setCountry] = useState('');
  const [unitsMeasurement, setUnitsMeasurement] = useState('');

  const countrySelected = (event: any) => {
    setCountry(event);
  };

  const unitsSelected = (event: any) => {
    setUnitsMeasurement(event);
  };

  return (
    <>
        <DialogBody
          className="h-[30rem] overflow-scroll"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="flex flex-wrap bg-gray-300 p-5 gap-5 items-center justify-center">
            <h1 className="">Cambiar</h1>
            <CountrySelect onCountryChange={countrySelected} />
            <UnitSelect onUnitChange={unitsSelected} />
          </div>

          <Buttons />
          {
            unitsMeasurement === 'CM'
              ? <SizeTable countrySizes={country} />
              : <SizeTableIn countrySizes={country} />
          }
        </DialogBody>
    </>
  );
}