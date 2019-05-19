import React from 'react'

import SafeLink from './SafeLink'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <SafeLink href="" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </SafeLink>
            </li>
            <li>
              <SafeLink href="https://github.com/michalczukm" className="icon fa-github">
                <span className="label">Github</span>
              </SafeLink>
            </li>
            <li>
              <SafeLink href="https://stackoverflow.com/users/2029818/michalczukm" className="icon fa-stack-overflow">
                <span className="label">Stack Overflow</span>
              </SafeLink>
            </li>
            <li>
              <SafeLink href="mailto:michalczukm@gmail.com" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </SafeLink>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Michał Michalczuk</li>
            <li>
              Powered by: <SafeLink href="https://www.gatsbyjs.org/">Gatsby.js</SafeLink> and <SafeLink href="https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-strata/">gatsby-strata</SafeLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
