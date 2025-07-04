import React from 'react';
import { useState ,useEffect,useRef} from 'react'
import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import SignupForm from '../../components/SignupForm'
import useEventsData from '../../hooks/useEventsData';
import ReactPaginate from 'react-paginate';


const Home = () => {
  
  const { events,loading,error,fetchEvents ,page} = useEventsData();
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);
  useEffect(()=>{
    console.log("useEffect");
    fetchEvents();
  },[])
  const handleNavbarSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  }

  const handlePageClick = (selected) => {
    console.log("Selected page:", selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected.selected}`);
  }

  const renderEvents = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return (
      <div>
      <Events searchTerm={searchTerm} events={events} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        nextClassName='style.next'
        previousClassName='style.previous'
        pageClassName='style.page'
        activeClassName='style.active'
        disabledClassName='style.disabled'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={page.totalPages || 0}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        />
      </div>

    );
  }
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}

  
    </>
  )
}

export default Home