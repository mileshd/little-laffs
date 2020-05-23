import React from "react"
import { Link } from "gatsby"

import Header from './header'
import "../styles/layout.css"

const Layout = ({ location, title, children }) => {
  return (
    <div className="layout">
      <div className="container">
        <Header />
      </div>
      <main className="container page">
        {children}
      </main>
    </div>
  )
}

export default Layout
