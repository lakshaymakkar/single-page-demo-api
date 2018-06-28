const initState= {
  type: '' ,
  data: {}
}

function fetchApp(state = initState, action){
  switch(action.type){
    case ADD :
      return Object.assign({},state,{

      })
    default:
        return state;
  }
}
