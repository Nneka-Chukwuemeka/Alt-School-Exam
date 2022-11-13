import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
import { Helmet } from 'react-helmet-async'



function Home() {
  return <div className="home-container">
    <Helmet>
      <title> HomePage </title>
      <meta name='description' content='Nneka GitHub Profile HomePage' />
      <link rel='canonical' href='/' />
    </Helmet>
    <div>
      <p className="main-header"> Welcome, to Nneka Chukwuemeka's Profile</p>
      <p className="text">
        Implement an API fetch of your GitHub portfolio, show a page with a list of all your repositories on GitHub(the page should implement pagination for the repo list), and create another page showing data for a single repo clicked from the list of repos using nested routes while using all the necessary tools in react. Implement the proper SEO, Error Boundary (show a page to test the error boundary) and 404 pages. Good UI and Designs are important.
      </p>
    </div>

    <button className="btn">
      <NavLink to='/Portfolio' className="nav-link">Portfolio </NavLink>
    </button>


  </div>
}

export default Home;