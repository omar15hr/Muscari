'use client';

import { Buttons } from "../button-size/Buttons";
import { DialogBody } from "@material-tailwind/react";
import { Instructions } from "../instructions/Intructions";
import CountrySelect from "../selects/CountrySelect";
import React, { useState } from "react";
import UnitSelect from "../selects/UnitsSelect";
import { ProductTableMen, ProductTableKid, ProductTableWomen } from "./tables/product";
import { BodyTableKid, BodyTableMen, BodyTableWomen } from './tables/body';
import { InstructionsLongSleeve } from "../instructions/IntructionsLongSleeve";


export function DialogBodyItem({dialogGender}: any) {

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
            dialogGender === 'men'
              ? (typeOfMeasurement === 'product'
                  ? <ProductTableMen countrySizes={country} unitsMeasurement={unitsMeasurement} />
                  : <BodyTableMen    countrySizes={country} unitsMeasurement={unitsMeasurement} /> )
              : dialogGender === 'women'
                ? (typeOfMeasurement === 'product'
                    ? <ProductTableWomen countrySizes={country} unitsMeasurement={unitsMeasurement} />
                    : <BodyTableWomen    countrySizes={country} unitsMeasurement={unitsMeasurement} /> )
                : (typeOfMeasurement === 'product'
                  ? <ProductTableKid unitsMeasurement={unitsMeasurement} />
                  : <BodyTableKid    unitsMeasurement={unitsMeasurement} /> )
        }


          <InstructionsLongSleeve typeItem={typeOfMeasurement} />
        </DialogBody>
    </>
  );
}