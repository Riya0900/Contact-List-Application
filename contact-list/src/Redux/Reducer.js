import { ADD_TO_LIST,REMOVE_FROM_LIST } from './ActionCreators';

const initalState ={
    list:[
        {
            "id":1,
            "email":"george.bluth@reqres.in",
            "first_name":"George",
            "last_name":"Bluth",
            "avatar":"https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id":2
            ,"email":"janet.weaver@reqres.in",
            "first_name":"Janet",
            "last_name":"Weaver",
            "avatar":"https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id":3,
            "email":"emma.wong@reqres.in",
            "first_name":"Emma",
            "last_name":"Wong",
            "avatar":"https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id":4,
            "email":"eve.holt@reqres.in",
            "first_name":"Eve",
            "last_name":"Holt",
            "avatar":"https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id":5,
            "email":"charles.morris@reqres.in",
            "first_name":"Charles",
            "last_name":"Morris",
            "avatar":"https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id":6,
            "email":"tracey.ramos@reqres.in",
            "first_name":"Tracey",
            "last_name":"Ramos",
            "avatar":"https://reqres.in/img/faces/6-image.jpg"
        },
        {
            "id":7,
            "email":"liam.bluth@reqres.in",
            "first_name":"Liam",
            "last_name":"John",
            "avatar":"https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id":8,
            "email":"janet.weaver@reqres.in",
            "first_name":"Mason",
            "last_name":"Robert",
            "avatar":"https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id":9,
            "email":"emma.wong@reqres.in",
            "first_name":"Ethan",
            "last_name":"David",
            "avatar":"https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id":10,
            "email":"eve.holt@reqres.in",
            "first_name":"James",
            "last_name":"Charles",
            "avatar":"https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id":11,
            "email":"charles.morris@reqres.in",
            "first_name":"Abigail",
            "last_name":"Morris",
            "avatar":"https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id":12,
            "email":"tracey.ramos@reqres.in",
            "first_name":"Sophia",
            "last_name":"Ava",
            "avatar":"https://reqres.in/img/faces/12-image.jpg"
        }
    ]
  } 

const Reducer = (state=initalState,action) => {

    switch(action.type){
  
        case ADD_TO_LIST:
        let selectedItem1 = state.list.find(item=> item.id === action.id)
  
        return{
            ...state,
            list: [...state.list, selectedItem1],
        }    

        case REMOVE_FROM_LIST:
            let new_items1 = state.list && state.list.filter(item=> action.id !== item.id)
            return{
                ...state,
                list: new_items1,
              }
      
        default :
            return state
    }
}

export default Reducer;