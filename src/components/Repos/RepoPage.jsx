import React from 'react'
import './Repos.css'
import Spinner from '../Spinner/Spinner'
import { useNavigate } from 'react-router-dom'


const RepoPage = (props) => {

  const navigate = useNavigate();


  const repo = props.data.map((info) => {
    return (
      <div className="ui cards" key={info.id}>
        <div className="card violet">
          <div className="content">
            <div className="header">{info.name}</div>
            <div className="description">
              {info.description}
            </div>
          </div>
          <div className="ui bottom attached button violet" onClick={() => navigate(`/Repos/${info.id}`)} >
            <i className="add icon"></i>
            Learn More
          </div>
        </div>
      </div>
    )
  })

  const renderComponent = () => {
    return (
      <>
        {repo}

      </>
    )
  }

  return (
    <div className="repo">
      {renderComponent()}

    </div>
  )
}

export default RepoPage