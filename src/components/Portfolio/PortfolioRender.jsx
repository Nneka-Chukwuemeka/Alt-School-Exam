import React from "react";
import './Portfolio.css'

const PortFolioRender = ({ message }) => {
  console.log(message)

  return (
    <div className="ui card" id="wrap">
      <div className="image" id="photo">
        <img src={message.avatar_url} id="imag" />
      </div>
      <div className="content" > 
        <a className="header">{message.login}</a>
        <div className="meta">
          <span className="location">{message.location}</span>
        </div>
        <div className="description">
          {message.bio}
        </div>
        <div className="extra content">
        <a href={message.html_url}>
          Repo
        </a>
      </div>
      </div>
      
    </div>
  )

}


export default PortFolioRender;