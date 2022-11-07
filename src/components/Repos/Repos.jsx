import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import RepoPage from './RepoPage'
import Pagination from './Pagination'



function Repos() {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage, setRepoPerPage] = useState(9);



  // a function to get url 

  const getRepos = async () => {
    if (repo == []) {
      setLoading(true)
    }
    let url = 'https://api.github.com/users/Nneka-Chukwuemeka/repos?per_page=58';
    await axios.get(url)
      .then((results) => {
        setRepo(results.data)
      }).catch((err) => {
        setError(err.message)
        console.log(err)
      })
  }


  //  use effect to rerender when data is updated
  useEffect(() => {
    getRepos()
  }, []);


  // calculations for the repo per page
  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = repo.slice(indexOfFirstRepo, indexOfLastRepo);

  // setPagination number 
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  }

  //  A render function for to display output
  const renderComponent = () => {
    if (loading === true) {
      return <Spinner />
    }
    if (error) {
      return (error);
    }

    return (
      <>
        <RepoPage data={currentRepo} loading={loading} />
        <Pagination postPerRepo={repoPerPage} totalRepo={repo.length} paginate={paginate} />
      </>
    )
  }

  return (
    <div className='repo-container'>
      {renderComponent()}
    </div>
  )
}

export default Repos;