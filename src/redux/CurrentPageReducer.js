let currentPage=1;

function currentPageReducer(state=currentPage,action){
  switch(action.type){
    case "Page_changed":
      return state=action.payload
    default:
      return state
  }
}
export default currentPageReducer