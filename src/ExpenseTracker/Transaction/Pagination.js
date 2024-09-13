import React, { useState } from "react";
import leftArr from "../../assets/leftArr.png";
import rightArr from "../../assets/rightArr.png";
const Pagination=({totalPosts,postPerPage,setCurrentPage,currentPage})=>{
    let pages=[];
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++)
    {
    pages.push(i)
    }
    const prevPage=()=>{
        if(currentPage>1)
        {
            setCurrentPage(currentPage-1)
        }
    }
    const nextPage=()=>{
        if(currentPage<totalPosts)
        {
            setCurrentPage(currentPage+1)
        }
    }

    return(<div>
        <button onClick={prevPage} ><img src={leftArr}/></button>
        <button style={{backgroundColor: "#43967B",borderRadius:"8px" }}>{currentPage}</button>
        <button onClick={nextPage}><img src={rightArr}/></button>
        </div>)
}
export default Pagination;