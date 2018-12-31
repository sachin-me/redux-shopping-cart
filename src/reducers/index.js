
const initState = {
  productItems: [],
  filterArr: [],
  cartArr: [],
  appliedFilter : []
}

export default function reducers(state=initState, action) {
  switch (action.type) {
    case 'DISPLAY_DATA':
      return {
        ...state,
        productItems: action.data
      }
    case 'LOWTOHIGH':
      return {
        ...state,
        productItems: [...state.productItems].sort((a, b) => a.price - b.price)
      }
      
    case 'HIGHTOLOW': 
      return {
        ...state,
        productItems: [...state.productItems].sort((a, b) => b.price - a.price)
      }

    case 'SET_FILTER' : {
      return {
        ...state,
        appliedFilter : [...state.appliedFilter, action.filter]
      }
    }

    case 'REMOVE_FILTER' : {
      const filteredArrayCopy = [...state.appliedFilter];
      
      filteredArrayCopy.splice(filteredArrayCopy.indexOf(action.filter), 1)
    
      return {
        ...state,
        appliedFilter : filteredArrayCopy
      }
    }

    case 'CART' : {
      return {
        ...state,
        cartArr: [...state.cartArr, state.productItems[action.e.target.id]]
      }
    }
      
    default:
      return state;
  }
}