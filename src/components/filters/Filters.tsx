import { useFiltersStore } from "@/store"

export const FilterPrueba = () => {

  const { filters, setFilters } = useFiltersStore();

  const onChangeFilter = (e: any) => {
    setFilters(e)
  }


  return (
    <div>
      <div>
          <label htmlFor="price">Prueba:</label>
          <input
            type='range'
            id='filters-price'
            min='0'
            max='300'
            className="bg-gray-300"
            onChange={(e) => onChangeFilter(parseInt(e.target.value))}
          />
          <span>${filters.minPrice}</span>
        </div>
    </div>
  )
}