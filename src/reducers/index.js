import {ADD} from '../actions'

const initState= {
  type: '' ,
  data: {}
}

function fetchApp(state = initState, action){
  switch(action.type){
    case ADD :
      return Object.assign({},state,action.data)
    default:
        return state;
  }
}
export default fetchApp
