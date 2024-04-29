'use client';

import React, { useState } from "react";
import { DialogBody } from "@material-tailwind/react";
import CountrySelect from "./components/selects/CountrySelect";
import { ButtonsWomen } from "./components/ButtonsWomen";
import { SizeTableWomen } from "./components/tables/product/SizeTableWomen";
import UnitSelect from "./components/selects/UnitsSelect";
import { SizeTableInWomen } from "./components/tables/product/SizeTableInWomen";
import { SizeTableBodyWomen } from "./components/tables/body/SizeTableBodyWomen";
import { SizeTableInBody } from "./components/tables/body/SizeTableInBodyWomen";
import { Instructions } from "./components/InstructionsWomen";


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

          <ButtonsWomen onTypeOfMeasur={typeOfMeasur} />
          {
            typeOfMeasurement === 'product'
            ? (unitsMeasurement === 'IN'
              ? <SizeTableInWomen countrySizes={country} />
              : <SizeTableWomen countrySizes={country} />)
            : (unitsMeasurement === 'IN'
              ? <SizeTableInBody countrySizes={country} />
              : <SizeTableBodyWomen countrySizes={country} />)
          }

          <Instructions />
        </DialogBody>
    </>
  );
}