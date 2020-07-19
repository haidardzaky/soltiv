import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class PortfolioCard extends Component {
  render(){
    return(
      <div>
        <Link to="/portfolio/detail">
          <div className="portfolio-card">

          </div>
        </Link>
      </div>
    )
  }
}
