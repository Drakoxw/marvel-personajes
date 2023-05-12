
function filterTable<T extends Record<string, any>>(data: T[], page = 0, length = 5): T[] {

  if (page === 1) {
    page = 0
  }

  if (page === 2) {
    page = 5
  }

  if (page === 3) {
    page = 10
  }

  if (page === 4) {
    page = 15
  }
  
  if (page === 5) {
    page = 20
  }

  return data.slice(page, page + length)
}


export { filterTable }
