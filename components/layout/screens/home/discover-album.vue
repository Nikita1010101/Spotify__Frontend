<script lang="ts" setup>
import { ListVideo, Play } from 'lucide-vue-next'

interface IProps {
  tracksCount: number
  avatarUrl: string
  title: string
  artist: string
  colorType: 'first' | 'second' | 'third' | 'fourth'
}

const { artist, avatarUrl, colorType, title, tracksCount } = defineProps<IProps>()
</script>

<template>
  <div :class="['discover_album', `${colorType}_color`]">
    <span>{{ tracksCount }} Tracks</span>
    <img :src="avatarUrl" />
    <div class="bottom_panel">
      <div class="button_play" :title="`Play ${artist}`">
        <div class="front">
          <ListVideo :size="20" stroke-width="3" />
        </div>
        <div class="back">
          <Play :size="20" fill="white" />
        </div>
      </div>
      <div class="song_data">
        <h3 class="title">{{ title }}</h3>
        <h3 class="artist">{{ artist }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.discover_album {
  @apply py-4 px-6 rounded-[2rem];

  span {
    @apply font-bold;
  }

  img {
    @apply my-4 rounded-2xl;
  }

  .bottom_panel {
    @apply flex items-center;

    .button_play {
      @apply relative w-10 h-10 flex items-center justify-center mr-4 transition-all duration-1000 cursor-pointer;
      transform-style: preserve-3d;

      .front,
      .back {
        @apply absolute w-full h-full flex justify-center items-center bg-green-600 rounded-full;
      }

      .front {
        @apply z-10;

        transform: rotateY(0deg);
        backface-visibility: hidden;
      }

      .back {
        transform: rotateY(-180deg);

        svg {
          @apply translate-x-[1px];
        }
      }

      &:hover {
        transform: rotateY(-180deg);
      }
    }

    .song_data {
      h3 {
        @apply text-sm;
      }

      .title {
        @apply font-bold;
      }

      .artist {
        @apply text-gray-200;
      }
    }
  }

  &.first_color {
    @apply bg-firstAlbumColor;
  }

  &.second_color {
    @apply bg-secondAlbumColor;
  }

  &.third_color {
    @apply bg-thirdAlbumColor;
  }

  &.fourth_color {
    @apply bg-fourthAlbumColor;
  }

  &.first_color,
  &.second_color,
  &.third_color,
  &.fourth_color {
    @apply bg-opacity-35;
  }
}
</style>
