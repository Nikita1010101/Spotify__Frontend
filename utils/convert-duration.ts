export const convertDuration = (duration: number) => {
  if (duration >= 3600) {
    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${Math.floor(
      seconds
    )}`
  }

  if (duration >= 60) {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60

    return `${minutes}:${seconds < 10 ? '0' : ''}${Math.floor(seconds)}`
  }

  return `0:${duration < 10 ? '0' : ''}${Math.floor(duration)}`
}
