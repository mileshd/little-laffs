import React from "react"

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="brand-container active">
              <a className="navbar-brand" href="/">Little Laffs</a>
            </span>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="/comics">Comics</a></li>
              <li><a href="/music">Music</a></li>
              <li><a href="/about">About</a></li>
            </ul> 
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="https://www.instagram.com/thelittlelaffs/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/7ybAZB450esKgFf3s5aIla"
                  target="_blank"
                >
                  <i className="fa fa-spotify" />
                </a>
              </li>
              <li>
                <a href="/subscribe">
                  <i className="fa fa-envelope" />
                  Subscribe 
                </a>
              </li>
              <li>
                <a href="mailto:helloworld.thelittlelaffs@gmail.com">
                  <i className="fa fa-envelope-o" />
                  Message
                </a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    )
  }
}
