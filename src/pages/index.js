import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SafeLink from '../components/safeLink'
import Event from '../components/event'
import Video from '../components/video'

import * as events from '../data/events'
import {
  presentationsRecordings,
  webinars,
  series,
  podcasts,
} from '../data/artifacts'

const withDefaultEmpty = (items, emptyMessage) => items && items.length ? items : <p>{emptyMessage}</p>

const getEvents = events =>
  events.map((event, index) => (
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

class HomeIndex extends React.Component {
  getPublicArtifacts() {
    return (
      <Fragment>
        <h3>Recorded presentations</h3>
        {presentationsRecordings.map((item, index) => (
          <Video key={index} artifact={item} />
        ))}
        <hr />

        <h3>Podcasts</h3>
        {podcasts.map((item, index) => (
          <Video key={index} artifact={item} />
        ))}
        <hr />

        {series.map((seriesItem, index) => (
          <Fragment key={index}>
            <h3>Series: {seriesItem.name}</h3>
            {seriesItem.episodes.map((item, seriesIndex) => (
              <Video key={`${index}-${seriesIndex}`} artifact={item} />
            ))}
            <hr />
          </Fragment>
        ))}

        <h3>Webinars</h3>
        {webinars.map((item, index) => (
          <Video key={index} artifact={item} />
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
              I am a strongly web-oriented{' '}
              <strong>full-stack software developer</strong> and{' '}
              <SafeLink href="https://infoshareacademy.com/">
                IT trainer
              </SafeLink>
              .
            </span>

            <p>
              One of hosts of{' '}
              <SafeLink href="https://sniadaniezprogramowaniem.pl/">
                Śniadanie z Programowaniem by JustJoin It
              </SafeLink>{' '}
              breakfast show.
            </p>

            <p>
              I believe that teaching others and sharing knowledge make us
              better developers.
            </p>

            <p>
              TypeScript fan and promoter. Sometimes scrum master, architect,
              team leader, speaker.
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
            {withDefaultEmpty(getEvents(events.upcoming), 'No plans for now. You want to invite me? Please write an email!')}
          </section>

          <div className="two-column">
            <section id="past-events">
              <h2>Past events</h2>
              {getEvents(events.past)}
            </section>
            <section id="public-artifacts">
              <h2>Public artifacts</h2>
              {this.getPublicArtifacts(events.past)}
            </section>
          </div>
          <a
            href="#header"
            className="back-to-top button center icon fa-arrow-up"
          >
            top
          </a>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
