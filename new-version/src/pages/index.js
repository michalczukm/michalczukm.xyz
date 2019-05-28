import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SafeLink from '../components/SafeLink'
import Event from '../components/Event'
import Video from '../components/video'

import * as events from '../data/events'
import { presentationsRecordings, webinars, series, podcasts } from '../data/artifacts'

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

  getPublicArtifacts() {
    return (
      <Fragment>
        <h3>Recorded presentations</h3>
        {presentationsRecordings.map((item, index) => (
          <Video key={index} artifact={item} />
        ))}
        <hr/>

        <h3>Podcasts</h3>
        {podcasts.map((item, index) => (
          <Video key={index} artifact={item} />
        ))}
        <hr/>

        <h3>Webinars</h3>
        {webinars.map((item, index) => (
          <Video key={index} artifact={item} />
        ))}
        <hr/>

        {series.map((seriesItem, index) => (
          <Fragment key={index}>
            <h3>Series: {seriesItem.name}</h3>
            {seriesItem.episodes.map((item, seriesIndex) => (
              <Video key={`${index}-${seriesIndex}`} artifact={item} />
            ))}
          </Fragment>
        ))}
      </Fragment>
    )
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

          <div className="two-column">
            <section id="past-events">
              <h2>Past events</h2>
              {this.getEvents(events.past)}
            </section>
            <section id="public-artifacts">
              <h2>Public artifacts</h2>
              {this.getPublicArtifacts(events.past)}
            </section>
          </div>
        <a href="#header" className="back-to-top button center icon fa-arrow-up">top</a>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
