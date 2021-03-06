<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center min-h-full overflow-y-scroll">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 rounded shadow-lg md:w-10/12 bg-base-300">
      <div class="flex bg-base-300">
        <div class="max-w-xs p-6 space-y-4 bg-base-300">
          <h3 class="text-3xl">Create a new Avatar</h3>
          <div class="flex items-stretch gap-2">
            <div v-for="step in totalSteps" :key="step" class="w-full h-2 rounded text-accent" style="border: 1px solid;" :class="{'bg-accent ': step - 1 <= currentStep}"></div>
          </div>
          <p>
            Avatar is an undercover account that is used to penetrate, observe or communicate with
            private social media accounts.
          </p>
        </div>
        <div class="w-full bg-base-200">
          <div v-for="(fieldKeys, step) in steps" :key="step">
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
          <footer class="flex justify-between p-3 border-t border-base-300">
            <button class="btn" @click.prevent="previousStep">
              Previous
            </button>
            <button @click="nextStep" class="btn btn-primary">
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
