import React from 'react'
import dayjs from 'dayjs'

import styles from './video.module.css'

import SafeLink from './safeLink'
import Thumbnail from './thumbnail'

const formatDate = date => dayjs(date).format('YYYY-MM')

export default ({ artifact }) => (
  <div className={styles.container}>
    <div className={styles.container__logo}>
      <SafeLink href={artifact.url}>
        <Thumbnail src={artifact.thumbnailUrl} />
      </SafeLink>
    </div>
    <div className={styles.container__content}>
      <ul className={styles.data}>
        <li>
          <SafeLink href={artifact.url} title={artifact.title}>
            [{artifact.language}] {artifact.title}
          </SafeLink>
        </li>
        <li>{formatDate(artifact.date)}</li>
        <li className={styles.description}>{artifact.description}</li>
      </ul>
    </div>
  </div>
)
