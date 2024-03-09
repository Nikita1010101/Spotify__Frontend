export const usePlayer = (defaultSoundVolume: number = 20) => {
  const audioTrackRef = ref()
  const isPlayed = ref(false)
  const trackProgress = ref(0)
  const currentTime = ref(0)
  const trackDuration = ref(0)
  const trackerPosition = ref(0)
  const soundVolume = ref(defaultSoundVolume)

  const getTrack = () => {
    return audioTrackRef.value as HTMLAudioElement
  }

  const calculatePercent = (event: MouseEvent) => {
    if (!event.currentTarget) return 0
    const parent = event.currentTarget.getBoundingClientRect()
    const elementWidth = event.currentTarget.clientWidth
    const currentCord = event.clientX - parent.left
    const currentTime = (100 / elementWidth) * currentCord
    return currentTime
  }

  const calculateSoundVolume = (event: MouseEvent) => {
    const currentTime = calculatePercent(event)
    soundVolume.value = currentTime
    getTrack().volume = currentTime / 100
  }

  const calculateTrackerPosition = (event: MouseEvent) => {
    const currentTime = calculatePercent(event)
    trackerPosition.value = (getTrack().duration / 100) * currentTime
  }

  const calculateTrackProgress = (event: MouseEvent) => {
    const currentTime = calculatePercent(event)
    trackProgress.value = currentTime
    getTrack().currentTime = (getTrack().duration / 100) * trackProgress.value
  }

  const playToggle = () => {
    if (getTrack().paused) {
      getTrack().play()
      isPlayed.value = true
    } else {
      getTrack().pause()
      isPlayed.value = false
    }
  }

  onMounted(() => {
    getTrack().volume = soundVolume.value / 100
    trackDuration.value = getTrack().duration

    const updateProgress = () => {
      currentTime.value = getTrack().currentTime
      trackProgress.value = (getTrack().currentTime / getTrack().duration) * 100
    }

    getTrack().addEventListener('timeupdate', updateProgress)

    return () => {
      getTrack().removeEventListener('timeupdate', updateProgress)
    }
  })

  return {
    calculateSoundVolume,
    calculateTrackerPosition,
    calculateTrackProgress,
    playToggle,
    audioTrackRef,
    status: {
      isPlayed,
      soundVolume,
      trackProgress,
      currentTime,
      trackDuration,
      trackerPosition
    },
  }
}
