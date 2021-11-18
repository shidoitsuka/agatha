<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center min-h-full overflow-y-scroll">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="dialog-infiltrating z-10 w-11/12 rounded shadow-lg md:w-10/12 bg-base-300 rounded-dialog">
      <div class="flex bg-base-300 rounded-dialog">
        <div class="max-w-xs p-6 space-y-4 overflow-y-scroll bg-base-300 rounded-dialog" style="height: 780px">
          <h3 class="text-3xl">Create an infiltrating case</h3>
          <div class="flex items-stretch gap-2">
            <div v-for="step in totalSteps" :key="step" class="w-full h-2 rounded text-accent" style="border: 1px solid;" :class="{'bg-accent ': step - 1 <= currentStep}"></div>
          </div>
          <p> Infiltrate social media groups or profile targets. </p>
        </div>
        <div class="w-full overflow-y-scroll bg-base-200" style="height: 780px; border-radius: 0 0 16px 0;">
          <div
            class="dialog-header pt-5 pr-5"
            @click="$parent.setIsOpen(false)"
          >
            <button tabindex="0">
              <img src="/icons/close-white.svg" alt="" />
            </button>
          </div>
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
            </div>
          </div>
          <footer class="flex justify-between p-3 px-12 border-t border-base-300">
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

export default {
  props: ['isOpen', 'setIsOpen'],
  components: {
    Dialog,
    DialogOverlay,
    Step1,
    Step2,
    Step3,
  },
  data() {
    return {
      currentStep: 0,
      steps: [['input'], ['input'], ['fax']],
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
