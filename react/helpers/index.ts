export const getSocialMediaUsername = (baseUrl: string, type: SocialMedia) => {
  const getUsername = (url: string) => {
    if (!url) return null

    const [, username] = url.includes('/') ? url.split('/') : []

    if (username) return username

    return url
  }

  switch (type) {
    case 'tiktok':
    case 'instagram':
      return baseUrl
    case 'youtube':
    case 'facebook':
      return getUsername(baseUrl)
  }
}

export const getSocialMediaUrl = (source: string, type: SocialMedia): string => {
  switch (type) {
    case 'tiktok':
      return `https://www.tiktok.com/@${source}?lang=pt-BR`
    case 'instagram':
      return `https://www.instagram.com/${source}/`
    case 'youtube':
      return `https://www.youtube.com/channel/${getSocialMediaUsername(source, type)}`
    case 'facebook':
      return `https://pt-br.facebook.com/${getSocialMediaUsername(source, type)}`
  }
}