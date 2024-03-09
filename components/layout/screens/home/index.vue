<script lang="ts" setup></script>

<template>
  <div class="home">
    <div class="recommended_albums">
      <LayoutScreensHomeDiscoverAlbum
        :artist="'Klava Koka'"
        :avatar-url="'/artist-avatar-2.jpg'"
        :tracks-count="46"
        :title="'Krash'"
        :color-type="'first'"
      />
      <LayoutScreensHomeDiscoverAlbum
        :artist="'Klava Koka'"
        :avatar-url="'/artist-avatar-2.jpg'"
        :tracks-count="46"
        :title="'Krash'"
        :color-type="'second'"
      />
      <LayoutScreensHomeDiscoverAlbum
        :artist="'Klava Koka'"
        :avatar-url="'/artist-avatar-3.jpg'"
        :tracks-count="46"
        :title="'Krash'"
        :color-type="'third'"
      />
      <LayoutScreensHomeDiscoverAlbum
        :artist="'Klava Koka'"
        :avatar-url="'/artist-avatar-3.jpg'"
        :tracks-count="46"
        :title="'Krash'"
        :color-type="'fourth'"
      />
    </div>
    <div class="recommended_tracks">
      <h2>Recommended Tracks</h2>
      <div class="list">
        <SharedTrack
          :duration="305"
          :id="1"
          :index="1"
          :preview-url="'/track-preview-2.jpg'"
          :title="'Crush'"
          :views="32457"
        />
        <SharedTrack
          :duration="256"
          :id="2"
          :index="2"
          :preview-url="'/track-preview-3.jpg'"
          :title="'Crush'"
          :views="56677"
        />
        <SharedTrack
          :duration="92"
          :id="3"
          :index="3"
          :preview-url="'/track-preview-4.jpeg'"
          :title="'wmwmwmwmwmwmwmwmwdswmwmwmwwmw'"
          :views="352511"
        />
        <SharedTrack
          :duration="185"
          :id="4"
          :index="4"
          :preview-url="'/track-preview-1.jpg'"
          :title="'Crush'"
          :views="3525677"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recommended_albums {
  @apply mb-10 grid grid-cols-4 gap-6;
}

.recommended_tracks {
  h2 {
    @apply mb-10 text-3xl font-medium;
  }

  .list {
  }
}
</style>
