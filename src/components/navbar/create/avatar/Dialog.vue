<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="dialog">
    <DialogOverlay class="dialog-overlay" />
    <div class="dialog-wraper rounded-dialog">
      <div class="flex bg-base-300 rounded-dialog">
        <div class="max-w-xs p-6 space-y-4" style="height: 680px">
          <h3 class="text-3xl font-semibold pt-5">Create a new Avatar</h3>
          <div class="flex items-stretch gap-2">
            <div
              v-for="step in totalSteps"
              :key="step"
              class="w-full h-2 rounded text-accent"
              style="border: 1px solid;"
              :class="{ 'bg-accent': step - 1 <= currentStep }"
            ></div>
          </div>
          <p class="dialog-description">
            Avatar is an undercover account that is used to penetrate, observe
            or communicate with private social media accounts.
          </p>
        </div>
        <div
          class="relative w-full bg-base-200 rounded-dialog"
          style="height: 780px;"
        >
          <div
            class="dialog-header pt-5 pr-5"
            @click="$parent.setIsOpenAvatar(false)"
          >
            <button tabindex="0">
              <img src="/icons/close-white.svg" alt="" />
            </button>
          </div>
          <div class="flex-none" v-for="(fieldKeys, step) in steps" :key="step">
            <div v-if="currentStep === step">
              <div v-if="step == 0">
                <Step1 />
              </div>
              <div v-if="step == 1">
                <Step2 />
              </div>
              <div v-if="step == 2">
                <Step3 />
              </div>
              <div v-if="step == 3">
                <Step4 />
              </div>
            </div>
          </div>
          <footer
            style="background-color: #202029; border-radius: 0 0 16px 0;"
            class="absolute flex justify-between items-end w-full py-5 px-10 bottom-1 border-t border-base-300"
          >
            <button class="btn px-7" @click.prevent="previousStep">
              <img src="/icons/back-btn.svg" alt="" />
            </button>
            <button class="btn btn-primary px-10" @click="nextStep">
              Next
            </button>
          </footer>
        </div>
      </div>
    </div>
  </Dialog>
</template>
<script>
import { Dialog, DialogOverlay } from '@headlessui/vue'
import Step1 from './stepform/Step1.vue'
import Step2 from './stepform/Step2.vue'
import Step3 from './stepform/Step3.vue'
import Step4 from './stepform/Step4.vue'

export default {
  props: ['isOpen', 'setIsOpen'],
  components: {
    Dialog,
    DialogOverlay,
    Step1,
    Step2,
    Step3,
    Step4,
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        ['avatarType'],
        ['webAccount', 'profilerUrl', 'username', 'password'],
        [
          'fullName',
          'gender',
          'address',
          'email',
          'city',
          'state',
          'zip',
          'country',
          'phone',
          'fax',
        ],
        ['proxyType', 'proxy', 'userAgent'],
      ],
    }
  },
  methods: {
    previousStep() {
      if (this.isFirstStep) return
      this.currentStep--
    },
    nextStep() {
      if (this.isLastStep) return
      this.currentStep++
    },
  },
  computed: {
    totalSteps() {
      return this.steps.length
    },
    isFirstStep() {
      return this.currentStep === 0
    },
    isLastStep() {
      return this.currentStep === this.totalSteps - 1
    },
  },
}
</script>
