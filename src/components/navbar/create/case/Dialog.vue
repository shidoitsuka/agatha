<template>
  <Dialog
    :open="isOpen"
    @close="setIsOpen"
    class="fixed inset-0 z-20 flex items-center justify-center min-h-full overflow-y-scroll"
  >
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div
      class="dialog-wraper z-10 w-11/12 rounded shadow-lg md:w-10/12 rounded-dialog"
    >
      <div class="flex">
        <div
          class="max-w-xs p-6 space-y-4 overflow-y-scroll"
          style="height: 600px"
        >
          <h3 class="text-3xl font-semibold pt-5">Create a new Case</h3>
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
            Collect documents on something mentioned significantly in social or
            other media.
          </p>
        </div>
        <div
          class="relative w-full overflow-y-scroll bg-base-200 rounded-dialog"
          style="height: 680px"
        >
          <div
            class="dialog-header pt-5 pr-5"
            @click="$parent.setIsOpenCase(false)"
          >
            <button tabindex="0">
              <img src="/icons/close-white.svg" alt="" />
            </button>
          </div>
          <div class="" v-for="(fieldKeys, step) in steps" :key="step">
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
              <div v-if="step == 4">
                <Step5 />
              </div>
              <div v-if="step == 5">
                <Step6 />
              </div>
            </div>
          </div>
          <footer
            style="background-color: #202029;"
            class="absolute flex justify-between w-full py-5 px-10 border-t bottom-1 bg-base-200 border-base-300"
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
import Step5 from './stepform/Step5.vue'
import Step6 from './stepform/Step6.vue'

export default {
  props: ['isOpen', 'setIsOpen'],
  components: {
    Dialog,
    DialogOverlay,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
  },
  data() {
    return {
      currentStep: 0,
      steps: [['case'], ['case'], ['case'], ['case'], ['case'], ['case']],
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
