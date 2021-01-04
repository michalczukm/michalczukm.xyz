import dayjs from 'dayjs'

export const postYouTubeVideo = (params, url) => {
  const { host, pathname, searchParams } = new URL(url)

  const youTubeId =
    host === 'youtu.be' ? pathname.substring(1) : searchParams.get('v')

  const thumbnailUrl = `https://img.youtube.com/vi/${youTubeId}/3.jpg`

  return {
    type: 'video',
    url,
    thumbnailUrl,
    ...params,
  }
}

export const postBreakfastForDevsVideo = ({ episodeNo, date, youTubeUrl }) =>
  postYouTubeVideo(
    {
      language: 'PL',
      title: `Śniadanie z programowaniem #${episodeNo}, ${dayjs(date).format(
        'DD.MM.YYYY'
      )}`,
      type: 'video',
      description: 'http://sniadaniezprogramowaniem.pl/',
      date,
    },
    youTubeUrl
  )
