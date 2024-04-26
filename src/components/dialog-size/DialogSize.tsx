'use client';

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { TabsDefault } from "../tabs-sizes/TabsDefault";

import { titleFont } from "@/config/fonts";

export function DialogSize() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Guía de tallas</Button>
      <Dialog size="lg" open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="text-end p-3">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
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
        <DialogHeader className={` ${titleFont.className} mx-5`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Guía de tallas</DialogHeader>
        <DialogBody className="h-[30rem] overflow-scroll" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Typography className="font-normal m-5 mb-5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <TabsDefault />
            
          </Typography>
        </DialogBody>
      </Dialog>
    </>
  );
}