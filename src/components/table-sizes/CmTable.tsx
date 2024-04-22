'use client';

import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Talla", "Pecho", "Cintura", "Manga", "Largo"];
 
const TABLE_ROWS = [
  {
    talla: "XXL",
    contornoPecho: "124",
    contornoCintura: "112",
    manga: '24',
    largo: '187',
  },
  {
    talla: "XL",
    contornoPecho: "116",
    contornoCintura: "104",
    manga: '23',
    largo: '184',
  },
  {
    talla: "L",
    contornoPecho: "108",
    contornoCintura: "96",
    manga: '22',
    largo: '183',
  },
  {
    talla: "M",
    contornoPecho: "100",
    contornoCintura: "88",
    manga: '21',
    largo: '181',
  },
  {
    talla: "S",
    contornoPecho: "92",
    contornoCintura: "80",
    manga: '20',
    largo: '179',
  },
];
 
export function CmTable() {
  return (
    <Card className="h-full w-full overflow-scroll" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ talla, contornoPecho, contornoCintura, manga, largo }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={talla}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {talla}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {contornoPecho}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {contornoCintura}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {manga}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {largo}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}