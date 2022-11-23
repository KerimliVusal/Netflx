import React from 'react'

function Pagination(props) {
  let pages=[];
  for(let i=props.Currentpage-2;i<props.Currentpage+3;i++){
    if(i<=0){
      continue
    }
    if(i>props.Totalpages){
      continue
    }
    pages.push(i);
  }
  return (
    <div className=' d-flex justify-content-center py-4 '>
      <nav aria-label="Page navigation border ">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={(e)=>props.PrevPage(e)} href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            pages.map(page=>(
              <li className={page===props.Currentpage? "page-item active":"page-item"} key={page}><a className="page-link" onClick={(e)=>props.ChangePage(e,page)} href="#">{page}</a></li>
            ))
          }
       
          <li className="page-item">
            <a className="page-link" onClick={(e)=>props.NextPage(e)} href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
    </nav>
    </div>
  )
}

export default Pagination