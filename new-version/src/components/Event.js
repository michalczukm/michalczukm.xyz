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
        return 'fa-youtube'
    case 'podcast':
      return 'fa-laptop'
    default:
      break
  }
}

const getEventMeta = (event, place, type) =>
  [dayjs(event.date).format('YYYY-MM-DD'), place.city, place.country].join(
    ' | '
  )

export default ({ title, url, event, place, type }) => (
  <div className={styles.container}>
    <div className={styles.container__type}>
      <SafeLink href={url} className={`icon fa-2x ${getTypeIcon(type)}`} />
    </div>
    <div className={styles.container__content}>
      <ul className={styles.eventData}>
        <li><SafeLink href={url}>{title}</SafeLink></li>
        <li><SafeLink href={event.url}>{event.name}</SafeLink></li>
        <li>{getEventMeta(event, place, type)}</li>
      </ul>
    </div>
  </div>
)
