import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react"
import PortfolioRender from './PortfolioRender'
import Spinner from '../Spinner/Spinner'
import './Portfolio.css'



function Portfolio() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  const getRepoProfile = () => {
    setLoading(true)
    const url = 'https://api.github.com/users/Nneka-Chukwuemeka';

    axios.get(url)
      .then((results) => {
        setData(results.data)
        setLoading(false)
      })
  }
  useEffect(() => {
    getRepoProfile();
  }, [])
  const renderComponents = () => {
    if (loading === true) {
      return (
        <Spinner />
      )
    }
    if (data !== []) {
      return (
        <PortfolioRender message={data} />
      )
    }
  }
  return (
    <div className="portfolio-container">
      {renderComponents()}
    </div>
  )
}

export default Portfolio;