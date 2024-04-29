'use client';

import React, { useState } from "react";
import { DialogBody } from "@material-tailwind/react";
import CountrySelect from "./components/selects/CountrySelect";
import { ButtonsKids } from "./components/ButtonsKids";
import { SizeTableKids } from "./components/tables/product/SizeTableKids";
import UnitSelect from "./components/selects/UnitsSelect";
import { SizeTableInKids } from "./components/tables/product/SizeTableInKids";
import { SizeTableBodyKids } from "./components/tables/body/SizeTableBodyKids";
import { SizeTableInBodyKids } from "./components/tables/body/SizeTableInBodyKids";
import { Instructions } from "./components/InstructionsKids";


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

          <ButtonsKids onTypeOfMeasur={typeOfMeasur} />
          {
            typeOfMeasurement === 'product'
            ? (unitsMeasurement === 'IN'
              ? <SizeTableInKids countrySizes={country} />
              : <SizeTableKids countrySizes={country} />)
            : (unitsMeasurement === 'IN'
              ? <SizeTableInBodyKids countrySizes={country} />
              : <SizeTableBodyKids countrySizes={country} />)
          }

          <Instructions />
        </DialogBody>
    </>
  );
}