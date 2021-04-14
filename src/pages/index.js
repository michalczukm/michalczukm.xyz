import * as events from '../data/events'

import React, { Fragment } from 'react'
import {
  podcasts,
  presentationsRecordings,
  series,
  webinars,
} from '../data/artifacts'

import Event from '../components/event'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SafeLink from '../components/safeLink'
import Video from '../components/video'

const withDefaultEmpty = (items, emptyMessage) =>
  items && items.length ? items : <p>{emptyMessage}</p>

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
            <h3>{seriesItem.name}</h3>
            {seriesItem.description && <h4>{seriesItem.description}</h4>}
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

            <p>
              I am a strongly web-oriented{' '}
              <strong>full-stack software developer</strong> and{' '}
              <SafeLink href="https://infoshareacademy.com/szkolenia-it-dla-firm/" title="Infoshar Aacademy trainings">
                IT trainer
              </SafeLink>
              .
            </p>

            <p>
              Senior Software Engineer at{' '}
              <SafeLink href="https://www.atlassian.com/" title="Atlassian">Atlassian</SafeLink>.
              <br />
              One of hosts of{' '}
              <SafeLink href="https://justjoin.it/sniadanie-z-programowaniem" title="Śniadanie z Programowaniem by JustJoin It">
                Śniadanie z Programowaniem by JustJoin It
              </SafeLink>{' '}
              breakfast show.
              <br />
              <span>
                TypeScript fan and promoter. I talk about web and stuff.
              </span>
            </p>

            <p>
              <span>
                I believe that teaching others and sharing knowledge make us
                better developers.
              </span>
            </p>

            <ul className="actions">
              <li>
                <SafeLink
                  href="https://gist.github.com/michalczukm/c018a256837b05e47581e5063f78c8ab"
                  title="Call For Papers info"
                  className="button"
                >
                  Call For Papers info
                </SafeLink>
              </li>
            </ul>
          </section>

          <section id="upcoming-events">
            <h2>Upcoming events</h2>
            {withDefaultEmpty(
              getEvents(events.upcoming),
              'No plans for now. Would you like to invite me? Please page me by email!'
            )}
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
