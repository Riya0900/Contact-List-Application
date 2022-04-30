export const REMOVE_FROM_WISH = 'REMOVE_FROM_WISH';
export const ADD_TO_WISH = 'ADD_TO_WISH';

const addToWishlist= (id)=>{
  return{
      type: ADD_TO_WISH,
      id
  }
}

const removeFromWish = (id) => {
  return {
    type: REMOVE_FROM_WISH,
    id
  }
}

export {addToWishlist,removeFromWish};