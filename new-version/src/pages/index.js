import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SafeLink from '../components/SafeLink'
import Event from '../components/Event'

import events from '../data/events'

class HomeIndex extends React.Component {
  upcomingEvents() {
    return events.map(({ title, url, event, place, type }, index) => (
      <Event key={index} title={title} url={url} event={event} place={place} type={type} />
    ))
  }

  render() {
    const siteTitle = 'michalczukm | Michał Michalczuk'
    const siteDescription =
      'Michał Michalczuk personal website: Full-Stack software developer and IT trainer'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="about-me">
            <header className="major">
              <h2>Who I am</h2>
            </header>
            <p>
              I am strongly web oriented{' '}
              <strong>Full-Stack software developer</strong> and{' '}
              <SafeLink href="https://infoshareacademy.com/">
                IT trainer
              </SafeLink>
              . Both fascinated and terrified by technology advancement.
            </p>
            <p>
              TypeScript fan and promoter. Sometimes scrum master, architect,
              team leader, speaker.
            </p>

            <ul>
              <li>
                As a front-end dev I am focused on TypeScript and Angular but I
                and constantly exploring new frameworks and areas,
              </li>
              <li>
                As a back-end dev I prefer Asp.net with C# or Node.js, but vary
                of technologies and languages went through my fingers. I used to
                work with WPF, Silverlight, Python and Django, Visual Basic and
                PHP.
              </li>
            </ul>

            <p>
              I love to talk and share knowledge, also fixing <i>unsolvable</i>{' '}
              git problems.
            </p>

            <ul className="actions">
              <li>
                <SafeLink
                  href="https://gist.github.com/michalczukm/c018a256837b05e47581e5063f78c8ab"
                  className="button"
                >
                  Call For Papers info
                </SafeLink>
              </li>
            </ul>
          </section>

          <section id="upcoming-events">
            <h2>Upcoming events</h2>
            {this.upcomingEvents()}
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
