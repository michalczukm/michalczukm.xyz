import React from 'react'

import SafeLink from './safeLink'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <SafeLink href="https://twitter.com/michalczukm" className="icon fa-twitter"  title="Twitter Michał Michalczuk" >
                <span className="label">Twitter</span>
              </SafeLink>
            </li>
            <li>
              <SafeLink href="https://github.com/michalczukm" className="icon fa-github"  title="Github Michał Michalczuk" >
                <span className="label">Github</span>
              </SafeLink>
            </li>
            <li>
              <SafeLink href="https://stackoverflow.com/users/2029818/michalczukm" title="StackOverFlow Michał Michalczuk" className="icon fa-stack-overflow">
                <span className="label">Stack Overflow</span>
              </SafeLink>
            </li>
            <li>
              <a href="mailto:michalczukm@gmail.com?subject=Hey Michał!" title="Send me an e-mail" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Michał Michalczuk</li>
            <li>
              <a href="mailto:michalczukm@gmail.com?subject=Hey Michał!" title="Send me an e-mail">michalczukm@gmail.com</a>
            </li>
            <li>
              Powered by: <SafeLink href="https://www.gatsbyjs.org/" title="Gatsby.js">Gatsby.js</SafeLink> and <SafeLink href="https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-strata/" title="gatsby-strata">gatsby-strata</SafeLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
