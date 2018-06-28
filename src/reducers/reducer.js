const initState= {
  type: '' ,
  data: {}
}

function postApp(state = initState, action){
  switch(action.type){
    case ADD :
      return Object.assign({},state,{

      })
    default:
        return state;
  }
}
