export function displayData(data) {
  return {
    type: 'DISPLAY_DATA',
    data
  }
}

export function ascending() {
  return {
    type: "LOWTOHIGH"
  }
}

export function descending() {
  return {
    type: "HIGHTOLOW"
  }
}

export function setFilter(filter) {
  return {
    type : "SET_FILTER",
    filter
  }
}

export function removeFilter(filter) {
  return {
    type : "REMOVE_FILTER",
    filter
  }
}

export function cart(e) {
  return {
    type: "CART",
    e
  }
}

export function handleDeleteCart(id) {
  return {
    type: "DELETE_CART",
    id
  }
}