'use client';

import { DialogHeader } from "@material-tailwind/react";
import { titleFont } from "@/config/fonts";




export function DialogHeaderItem() {

  return (
    <>
        <DialogHeader
          className={` ${titleFont.className} mx-5`}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Guía de tallas
        </DialogHeader>
    </>
  );
}