import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './Repos.css'

const LearnMore = () => {
  const [repo, setRepo] = useState([]);
  const [owner, setOwner] = useState([])
  const [loading, setLoading] = useState(false);

  const loc = location.pathname;
  const newLoc = loc.split('/')
  const newPath = newLoc.pop();

  const getRepo = () => {


    let url = `https://api.github.com/repositories/${newPath}`;
    axios.get(url)
      .then((results) => {
        setRepo(results.data);
        setOwner(results.data.owner)
      })
  }
  useEffect(() => {
    getRepo()
  }, [])
  console.log(repo)

  return (
    <div className="ui fluid container center" id="learn">
      <div className="ui card  raised">
        <div className="content">
          <div className="header"> {repo.full_name}
          </div>
          <div className="meta flex">
            <span className="category">{owner.login}
            </span>
          </div>
          <div className="description">
            <p>{repo.description} </p>
            <div className="meta">
              <p> forks : {repo.forks}</p>
              <p> open issues : {repo.open_issues}</p>
              <p> Major Language : {repo.language}</p>
              <p> Watchers : {repo.watchers}</p>
              <p> Size: {repo.size}</p>
              <p> Type of Repo :  {repo.visibility}</p>
              <p> Created at : {repo.created_at}</p>
              <p> Last Update  : {repo.updated_at} </p>
              <div className="ui animated button violet" tabIndex="0">
                <div className="visible content"> Url </div>
                <div className="hidden content">
                  Show Url
                </div>
              </div> <div className="ui animated button violet" tabIndex={0}>
                <div className="visible content"> Clone </div>
                <div className="hidden content">
                  <a href={owner.html_url}>
                    <i className="right arrow icon"> </i>
                  </a>
                </div>
              </div>
              <div className="ui animated button violet" tabIndex={0}>
                <div className="visible content"> Subscribe </div>
                <div className="hidden content">
                  <a href={owner.html_url}>
                    <i className="right arrow icon"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src={owner.avatar_url} /> {repo.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore;