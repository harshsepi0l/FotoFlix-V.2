import { useEffect, useState } from "react";
import threeDots from "../../../images/three-dots.svg";
import rightArrow from "../../../images/rightArrow.svg";
import leftArrow from "../../../images/leftArrow.svg";
import "./Pagination.css";

const ITEMS_PER_PAGE = 10;
const pageCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface PostItem {
  index: number;
  sortID: number;
}

interface Pagination {
    data: JSX.Element[];
    class: string;
    pageSize: number;
}

export function Pagination(props: Pagination): JSX.Element {

  let dotsPut = false;
  

  //Use hooks to update UI
  const [first, setFirst] = useState("hello");

  const [contentToShow, setContentToShow] = useState(props.data);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  let numberPages = props.data.length;
  let ITEMS_PER_PAGE = props.pageSize;

  
  function calculatePages() {
    let pages = numberPages / ITEMS_PER_PAGE; // 20 / 3 = 6
    if (numberPages % ITEMS_PER_PAGE !== 0) { // 20 % 3 = 2 !== 0 -> 6 + 1 = 7
      pages++;
    }

    let pagesArray = [];
    for (let i = 1; i <= pages; i++) {
      pagesArray.push(i);
    }
    // pagesArray = [1,2,3,4,5,6,7,8]

    setPages(pagesArray);    
  }

  function openNewPage(page: number) {
    if (page > 0 && page <= pages.length) {
      setCurrentPage(page);
      filterElements(page);
    }
  }

  function filterElements(page: number) {
 
    let start = page * ITEMS_PER_PAGE - ITEMS_PER_PAGE
    let end =  page * ITEMS_PER_PAGE

    let newContent = props.data.filter((item, index) => index >= start && index < end)

    setContentToShow(newContent);
  }
  
  useEffect(() => {
    filterElements(currentPage);
    calculatePages();

  }, []);
  
  return (
    <>
 

        <div className="Blog-Body-Pagination">

        <div className={props.class}>
            {contentToShow}
        </div>


        <div className="pagination-align">
        <button className="pagination" onClick={() => {openNewPage(currentPage - 1)}}> <img alt="<" src={rightArrow}></img> </button>
        
         { pages.map((pageNumber, index) => {
            if (
              index !== 0 &&
              index !== pages.length - 1 &&
              !(index >= currentPage - 3 && index <= currentPage + 1)
            ) {
              if (!dotsPut) {
                dotsPut = true;
                return <img alt="..." src={threeDots}></img>;
              } else {
                return null;
              }
            } else {
              dotsPut = false;
            }
            return (
              <button 
                onClick={() => {openNewPage(pageNumber)}}
                className={currentPage === pageNumber ? "selectedPagination" : "pagination"}>
                  {pageNumber}
              </button>
            
            );
          } )
        }    
        <button className="pagination" onClick={() => {openNewPage(currentPage + 1)}}> <img alt=">" src={leftArrow}></img> </button>

        </div>
      </div>
    </>
  );
}
