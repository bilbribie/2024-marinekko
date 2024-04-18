import React from 'react';
import './com_style/pagenavblock.css';


const handleBlockElement = (currentPage,numberOfPage,setCurrentPage) =>{

    const returnedList = [];


    

    if(numberOfPage == 1){
      returnedList.push(<div class = "block selected">1</div>);
      return returnedList;
    }
  
    for(let i = currentPage;i <= numberOfPage && i <= currentPage + 3;i++){
      if(i == currentPage){
        returnedList.push(<div class = "block selected">{i}</div>);
      }else{
        returnedList.push(<div class = "block" onClick = {() => {setCurrentPage(i)}}>{i}</div>);
      }
    }
  
    return returnedList;

}


const PageNavBlock = (prop) => {

    return(<div class = "component-container">
        <section class = "page-selector-container">
        {prop.currentPage != 1 ? (<div class = "block pageNav" onClick={ ()=>{prop.setCurrentPage((prev) => prev - 1)} }>{"<"}</div>):null}
        {handleBlockElement(prop.currentPage,prop.numberOfPage,prop.setCurrentPage)}
        {prop.currentPage != prop.numberOfPage ? (<div class = "block pageNav" onClick={ ()=>{prop.setCurrentPage((prev) => prev + 1)} }>{">"}</div>):null}
        </section>
    </div>);

    
}

export default PageNavBlock;