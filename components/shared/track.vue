<script lang="ts" setup>
import { AudioLines, Clock, Headphones, Heart, MoreHorizontal, Pause, Play } from 'lucide-vue-next'

import { convertDuration } from '~/utils/convert-duration'
import { convertViews } from '~/utils/convert-views'

interface IProps {
  id: number
  index: number
  previewUrl: string
  title: string
  views: number
  duration: number
}

const { duration, id, index, previewUrl, title, views } = defineProps<IProps>()
</script>

<template>
  <div class="track" :title="title">
    <div class="index">
      <div v-if="index === 3">
        <AudioLines :size="20" stroke-width="3" class="constant animate-pulse" />
        <Pause :size="20" fill="white" class="hover" />
      </div>
      <div v-else>
        <span class="constant">{{ index }}</span>
        <Play :size="20" fill="white" class="hover" />
      </div>
    </div>
    <img :src="previewUrl" :alt="title" />
    <div class="title">
      <h4 :class="title.length >= 27 && 'viewer'">{{ title }}</h4>
    </div>
    <div class="views">
      <Headphones :size="20" />
      <span>{{ convertViews(views) }}</span>
    </div>
    <div class="duration">
      <Clock :size="18" />
      <span>{{ convertDuration(duration) }}</span>
    </div>
    <Heart class="heart" :size="20" />
    <MoreHorizontal />
  </div>
  <hr />
</template>

<style lang="scss" scoped>
@keyframes titleViewer {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-70%);
  }
}

.track {
  @apply py-2 px-4 flex items-center rounded-xl transition duration-300 hover:bg-gray-500 hover:bg-opacity-40 cursor-pointer;

  .index {
    @apply w-6 h-10 mr-5;

    > div {
      @apply h-full relative flex justify-center items-center;

      .constant,
      .hover {
        @apply absolute transition duration-300;
      }

      .constant {
        @apply visible opacity-100;
      }

      .hover {
        @apply invisible opacity-0;
      }
    }
  }

  img {
    @apply mr-9 w-9 rounded-xl;
  }

  .title {
    @apply relative w-1/3  h-5 mr-10 flex items-center overflow-hidden;

    h4 {
      @apply absolute font-bold;
      white-space: nowrap;

      &.viewer {
        animation: titleViewer 10s infinite ease-in-out;
      }
    }
  }

  .views {
    @apply w-1/4 flex items-center;

    svg {
      @apply mr-1.5;
    }
  }

  .duration {
    @apply mr-auto flex items-center;

    svg {
      @apply mr-1.5;
    }
  }

  .heart {
    @apply mr-5 cursor-pointer;
  }

  &:hover .index > div {
    .constant {
      @apply invisible opacity-0;
    }

    .hover {
      @apply visible opacity-100;
    }
  }
}

hr {
  @apply my-2 opacity-60;
}
</style>
