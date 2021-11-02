<template>
  <div class="px-10 py-4 overflow-y-scroll pt-10 bg-base-200" style="height: 560px">
    <div class="space-y-4 text-center">
      <h5>Suggested Image</h5>
      <div class="max-w-xl mx-auto">
        <swiper :slides-per-view="4" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide v-for="image in images" :key="image">
            <img class="object-cover w-32 h-32 rounded-lg" :src="image" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="mt-5 border divide-y-2 border-base-300 divide-base-300">
      <div class="flex p-5">
        <div class="text-sm w-36 text-success">
          Title:
        </div>
        <div>
          Cyber attack multiple on wealthy investors
        </div>
      </div>
      <div class="flex p-5">
        <div class="text-sm w-36 text-success">
          Keywords:
        </div>
        <div class="flex-row space-y-2">
          <div class="gap-2 p-1 space-x-1 text-sm border-2 border-dashed border-primary rounded-box">
            <div class="inline-block p-1 bg-base-300 rounded-box">"Criminal Attack"</div>
            <div class="inline-block p-1 bg-primary rounded-box">AND</div>
            <div class="inline-block p-1 bg-base-300 rounded-box">"Criminal Attack" <div class="inline-block px-2 py-1 bg-primary rounded-box">AND</div> "cyber attack" </div>
          </div>
          <div class="gap-2 p-1 space-x-1 text-sm border-2 border-dashed border-primary rounded-box">
            <div class="inline-block p-1 bg-base-300 rounded-box">"home security"</div>
            <div class="inline-block p-1 bg-primary rounded-box">AND</div>
            <div class="inline-block p-1 bg-base-300 rounded-box">"business Attack" <div class="inline-block px-2 py-1 bg-primary rounded-box">AND</div> "cyber attack" </div>
          </div>
        </div>
      </div>
      <div class="flex p-5">
        <div class="text-sm text-success w-36">
          Crawling Sources
        </div>
        <div class="grid grid-cols-4 gap-3 text-sm">
          <span class="flex px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-1" src="/social-media/facebook.svg" alt=""> Facebook</span>
          <span class="flex px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-1" src="/social-media/twitter.svg" alt=""> twitter</span>
          <span class="flex px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-1" src="/social-media/youtube.svg" alt=""> youtube</span>
          <span class="flex px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-1" src="/social-media/google.svg" alt=""> google</span>
          <span class="flex px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-1" src="/social-media/yahoo.svg" alt=""> yahoo</span>
          <span class="flex px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-1" src="/social-media/linkedin.svg" alt=""> linkedin</span>
        </div>
      </div>
      <div class="flex p-5">
        <div class="text-sm w-36 text-success">
          Scheduler:
        </div>
        <div class="grid grid-cols-3 gap-5 text-sm">
          <h3><span class="text-agatha-100">Frequency: </span> Daily</h3>
          <h3><span class="text-agatha-100">Start On: </span> 2021-04-23</h3>
          <h3><span class="text-agatha-100">End On: </span> 2021-04-23</h3>
        </div>
      </div>
      <div class="flex p-5">
        <div class="text-sm w-36 text-success">
          Existing Documents
        </div>
        <div>
          Yes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
    }
  },
  data() {
    return {
      images: [
        'https://images.pexels.com/photos/4103247/pexels-photo-4103247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/4842496/pexels-photo-4842496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/7458831/pexels-photo-7458831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ],
    }
  },
}
</script>
