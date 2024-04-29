'use client';

import React, { useState } from "react";
import { DialogBody } from "@material-tailwind/react";
import CountrySelect from "./components/selects/CountrySelect";
import { Buttons } from "./components/Buttons";
import { SizeTable } from "./components/tables/product/SizeTable";
import UnitSelect from "./components/selects/UnitsSelect";
import { SizeTableIn } from "./components/tables/product/SizeTableIn";
import { SizeTableBody } from "./components/tables/body/SizeTableBody";
import { SizeTableInBody } from "./components/tables/body/SizeTableInBody";
import { Instructions } from "./components/Instructions";


export function DialogBodyItem() {

  const [country, setCountry] = useState('');
  const [unitsMeasurement, setUnitsMeasurement] = useState('');
  const [typeOfMeasurement, setTypeOfMeasurement] = useState('');

  const countrySelected = (event: any) => {
    setCountry(event);
  };

  const unitsSelected = (event: any) => {
    setUnitsMeasurement(event);
  };

  const typeOfMeasur = (event: any) => {
    setTypeOfMeasurement(event);
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

          <Buttons onTypeOfMeasur={typeOfMeasur} />
          {
            typeOfMeasurement === 'product'
            ? (unitsMeasurement === 'IN'
              ? <SizeTableIn countrySizes={country} />
              : <SizeTable countrySizes={country} />)
            : (unitsMeasurement === 'IN'
              ? <SizeTableInBody countrySizes={country} />
              : <SizeTableBody countrySizes={country} />)
          }

          <Instructions />
        </DialogBody>
    </>
  );
}