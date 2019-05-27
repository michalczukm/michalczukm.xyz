import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SafeLink from '../components/SafeLink'
import Event from '../components/Event'

import * as events from '../data/events'

class HomeIndex extends React.Component {
  getEvents(events) {
    return events.map((event, index) => (
      <Event
        key={index}
        title={event.title}
        url={event.url}
        event={event.event}
        place={event.place}
        type={event.type}
        resources={event.resources}
      />
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
          <meta
            name="keywords"
            content="TypeScript,JavaScript,Full-Stack,Speaker,Software developer"
          />
          <meta name="author" content="Michał Michalczuk, michalczukm" />
        </Helmet>

        <div id="main">
          <section id="about-me">
            <header className="major">
              <h2>Who I am</h2>
            </header>

            <span>
              I am strongly web oriented{' '}
              <strong>Full-Stack software developer</strong> and{' '}
              <SafeLink href="https://infoshareacademy.com/">
                IT trainer
              </SafeLink>
              .
            </span>
            <p>
              I believe that teaching others and sharing knowledge make us
              better developers.
            </p>

            <p>
              TypeScript fan and promoter. Sometimes scrum master, architect,
              team leader, speaker.
            </p>

            <ul>
              <li>
                As a front-end dev I am focused on TypeScript and Angular but I
                am constantly exploring new areas,
              </li>
              <li>
                As a back-end dev I prefer Asp.net with C# or Node.js, but vary
                of technologies and languages went through my fingers. I used to
                work with WPF, Silverlight, Python and Django, Visual Basic, PHP
                etc.
              </li>
            </ul>

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
            {this.getEvents(events.upcoming)}
          </section>

          <section id="upcoming-events">
            <h2>Past events</h2>
            {this.getEvents(events.past)}
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
