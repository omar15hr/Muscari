'use client';

import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Talla", "Pecho", "Cintura", "Manga", "Largo"];
 
const TABLE_ROWS = [
  {
    talla: "XXL",
    contornoPecho: "48.82",
    contornoCintura: "44.09",
    manga: '9.45',
    largo: '73.62',
  },
  {
    talla: "XL",
    contornoPecho: "45.67",
    contornoCintura: "40.94",
    manga: '9.06',
    largo: '72.44',
  },
  {
    talla: "L",
    contornoPecho: "42.52",
    contornoCintura: "37.79",
    manga: '8.66',
    largo: '72.01',
  },
  {
    talla: "M",
    contornoPecho: "39.37",
    contornoCintura: "34.65",
    manga: '8.27',
    largo: '71.29',
  },
  {
    talla: "S",
    contornoPecho: "36.22",
    contornoCintura: "31.5",
    manga: '7.87',
    largo: '70.47',
  },
];
 
export function InTable() {
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
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {manga}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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