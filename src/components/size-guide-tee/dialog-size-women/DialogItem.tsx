'use client';

import React, { useState } from "react";
import { Button, Dialog, IconButton} from "@material-tailwind/react";
import { DialogHeaderItem } from "./DialogHeader";
import { DialogBodyItem } from "./DialogBody";




export function DialogItemWomen() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);


  return (
    <>
      <Button
        onClick={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Guía de tallas
      </Button>

      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="text-end p-3">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>


        <DialogHeaderItem />
       <DialogBodyItem />
      </Dialog>
    </>
  );
}