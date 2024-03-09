export const convertViews = (views: number) => {
  if (views >= 1_000_000_000) {
    return `${(views / 1_000_000_000).toFixed(2)}B`
  }

  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(2)}M`
  }

  if (views >= 1_000) {
    return `${(views / 1_000).toFixed(2)}K`
  }

  return views
}
