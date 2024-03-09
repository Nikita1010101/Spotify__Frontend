import type { ITrack } from '~/interfaces/track.interface'

export const useCurrentTrackStore = defineStore('current_track', {
  state: () => ({
    track: {} as ITrack | null
  }),
  getters: {},
  actions: {},
})
