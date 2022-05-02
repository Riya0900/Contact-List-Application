export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const ADD_TO_LIST = 'ADD_TO_LIST';

const addToList= (id)=>{
  return{
      type: ADD_TO_LIST,
      id
  }
}

const removeFromList = (id) => {
  return {
    type: REMOVE_FROM_LIST,
    id
  }
}

export {addToList,removeFromList};