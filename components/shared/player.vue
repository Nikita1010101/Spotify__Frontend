<script lang="ts" setup>
import {
  FastForward,
  Heart,
  MessageSquareText,
  Pause,
  Play,
  Repeat,
  Shuffle,
  Volume,
  Volume1,
  Volume2,
} from 'lucide-vue-next'
import { usePlayer } from '~/hooks/use-player'
const {
  audioTrackRef,
  calculateSoundVolume,
  calculateTrackerPosition,
  calculateTrackProgress,
  playToggle,
  status,
} = usePlayer(10)
</script>

<template>
  <div class="player">
    <audio ref="audioTrackRef">
      <source src="/audio-track-2.mp3" type="audio/mp3" />
    </audio>
    <div class="background"></div>
    <div
      class="progress"
      @click="event => calculateTrackProgress(event)"
      @mousemove="event => calculateTrackerPosition(event)"
      :title="convertDuration(status.trackerPosition.value)"
    >
      <div class="slider" :style="{ width: `${status.trackProgress.value}%` }">
        <div class="tracker"></div>
      </div>
    </div>
    <div class="content">
      <div class="left_content">
        <div class="track_data">
          <img src="/track-preview-3.jpg" alt="Image" />
          <div class="title_and_artist">
            <h4>Crush</h4>
            <p>Klava Koka</p>
          </div>
        </div>
        <Heart />
      </div>
      <div class="center_content">
        <Shuffle :size="20" />
        <FastForward :size="20" fill="white" class="rotate-180" @click="" />
        <div class="button_play_pause" @click="playToggle()">
          <Pause v-if="status.isPlayed.value" :size="28" fill="slategray" stroke-width="1" />
          <Play v-else :size="28" fill="slategray" class="button_play" />
        </div>
        <FastForward :size="20" fill="white" @click="" />
        <Repeat :size="20" />
      </div>
      <div class="right_content">
        <div class="time">
          <span>{{ convertDuration(status.currentTime.value) }}</span>
          {{ ' / ' }}
          <span>{{ convertDuration(status.trackDuration.value) }}</span>
        </div>
        <div class="sound">
          <div class="icon">
            <Volume v-if="status.soundVolume.value <= 34" :size="20" />
            <Volume1
              v-if="status.soundVolume.value > 34 && status.soundVolume.value <= 67"
              :size="20"
            />
            <Volume2 v-if="status.soundVolume.value > 67" :size="20" />
          </div>
          <div class="volume_tracker" @click="event => calculateSoundVolume(event)">
            <div class="slider" :style="{ width: `${status.soundVolume.value}%` }">
              <div class="tracker"></div>
            </div>
          </div>
        </div>
        <MessageSquareText :size="20" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player {
  @apply fixed left-4 right-4 bottom-3 h-[85px] z-10 rounded-b-2xl shadow;

  .background {
    @apply absolute w-full h-full bg-gray-500 rounded-b-2xl -z-10 blur-[2px] opacity-75 shadow;
  }

  .progress {
    @apply absolute top-0 w-full h-[6px] bg-gray-600 bg-opacity-90 rounded-xl z-30;

    .slider {
      @apply relative w-[30%] h-[6px] flex items-center justify-end bg-white rounded-xl;

      .tracker {
        @apply absolute w-3.5 h-3.5 translate-x-[7px] bg-white rounded-full shadow-xl;
      }
    }
  }

  .content {
    @apply absolute w-full h-full px-10 flex items-center z-20;

    .left_content {
      @apply w-1/4 flex justify-between items-center;

      .track_data {
        @apply flex items-center;

        img {
          @apply w-10 h-10 rounded-xl mr-3;
        }

        .title_and_artist {
          h4 {
            @apply font-bold;
          }

          p {
            @apply text-sm opacity-65;
          }
        }
      }

      > svg {
        @apply cursor-pointer;
      }
    }

    .center_content {
      @apply w-1/2 h-full flex justify-center items-center;

      > svg {
        @apply mx-3 cursor-pointer;
      }

      .button_play_pause {
        @apply p-2 flex justify-center items-center bg-white rounded-full cursor-pointer;

        .button_play {
          @apply translate-x-[1.5px];
        }
      }
    }

    .right_content {
      @apply w-1/4 flex items-center justify-between;

      .sound {
        @apply flex items-center;

        .icon {
          @apply mr-4;
        }

        .volume_tracker {
          @apply h-[6px] w-28 bg-gray-600 bg-opacity-90 rounded-full;

          .slider {
            @apply h-[6px] flex items-center justify-end bg-white rounded-full;

            .tracker {
              @apply absolute w-[6px] h-[6px] translate-x-[3px] bg-white rounded-r-full shadow-xl;
            }
          }

          &:hover .slider .tracker {
            @apply w-3 h-3 transition-all rounded-full;
          }
        }
      }
    }
  }
}
</style>
