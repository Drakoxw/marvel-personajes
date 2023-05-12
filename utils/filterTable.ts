
function filterTable<T extends Record<string, any>>(data: T[], page = 0, length = 5): T[] {

  let pagin = 0;
  
  if (page > 1) {
    pagin = length * (page - 1)
  }

  return data.slice(pagin, pagin + length)
}


export { filterTable }
