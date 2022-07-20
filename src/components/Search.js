import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoAPI } from '../api';


const Search = ( {onSearchChange}) => {
  const [search,setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPI)

    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate placeholder='Search for city'
                  debounceTimeout={600}
                  value={search}
                  onChange={handleOnChange}
                  loadOptions={loadOptions}
      />
  )
}

export default Search;