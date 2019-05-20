import React from 'react'
import dayjs from 'dayjs'

import styles from './event.module.css'

import SafeLink from './SafeLink'

const getTypeIcon = type => {
  switch (type) {
    case 'presentation':
      return 'fa-comment-o'
    case 'workshops':
      return 'fa-laptop'
    case 'video':
      return 'fa-play-circle'
    case 'podcast':
      return 'fa-podcast'
    case 'discussion':
      return 'fa-comments-o'
    default:
      break
  }
}

const formatDate = date => dayjs(date).format('YYYY-MM-DD')

const displayEventDate = event =>
  event.startDate && event.endDate
    ? `${formatDate(event.startDate)} - ${formatDate(event.endDate)}`
    : formatDate(event.startDate)

const getEventMeta = (event, place) =>
  [displayEventDate(event), place.city, place.country].join(' | ')

const getResources = resources =>
  Object.keys(resources)
    .map(key => <SafeLink href={resources[key]}>{key}</SafeLink>)
    .reduce((prev, curr) => [prev, prev ? ' | ' : '', curr], null)

export default ({ title, url, event, place, type, resources }) => (
  <div className={styles.container}>
    <div className={styles.container__type}>
      <SafeLink href={url} className={`icon fa-2x ${getTypeIcon(type)}`} />
    </div>
    <div className={styles.container__content}>
      <ul className={styles.eventData}>
        <li>
          <SafeLink href={url}>{title}</SafeLink>
        </li>
        <li>
          <SafeLink href={event.url}>{event.name}</SafeLink>
        </li>
        <li>{getEventMeta(event, place)}</li>
        {resources ? (
          <li>
            <b>resources:</b> {getResources(resources)}
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  </div>
)
