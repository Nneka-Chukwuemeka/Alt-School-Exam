import React from 'react'
import './Repos.css'
import Spinner from '../Spinner/Spinner'

const RepoPage = (props) => {

  console.log(props.data)


  const repo = props.data.map((info) => {
    return (
      <div className="ui cards" key={info.id}>
        <div className="card">
          <div className="content">
            <div className="header">{info.name}</div>
            <div className="description">
              {info.description}
            </div>
          </div>
          <div className="ui bottom attached button violet">
            <i className="add icon"></i>
            Learn More
          </div>
        </div>
      </div>
    )
  })

  const renderComponent = () => {
    if (props.loading) {
      return <Spinner />
    }
    return (
      repo
    )
  }

  return (
    <div className="repo">
      {renderComponent()}
    </div>
  )
}

export default RepoPage