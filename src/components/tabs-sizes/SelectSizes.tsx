
import { Select, Option } from "@material-tailwind/react";


export function SelectSizes() {
  return (
    <div className="items-center text-black w-full md:w-1/3 p-4 mt-3">
      <Select size="md" label="Tipo de talla" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Option>BR</Option>
        <Option>EU</Option>
        <Option>DE</Option>
        <Option>SG</Option>
        <Option>AU</Option>
        <Option>JP</Option>
        <Option>IT</Option>
        <Option>MX</Option>
        <Option>FR</Option>
        <Option>US</Option>
      </Select>
    </div>
  );
}