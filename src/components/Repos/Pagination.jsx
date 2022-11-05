import React from "react";
import './Repos.css'


const Pagination = (props) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(props.totalRepo / props.postPerRepo); i++) {
    pageNums.push(i)
  }
  console.log(pageNums)

  return (
    <div className="pagination-container">
      <ul>
        {pageNums.map((number) => {
          return (
            <li key={number} className="li-paginate" onClick={() => props.paginate(number)}>
              <a > {number} </a>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default Pagination;