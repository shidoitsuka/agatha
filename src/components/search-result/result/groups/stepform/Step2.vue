<template>
  <div class="overflow-y-scroll bg-base-200">
    <div class="grid gap-2 px-10 py-4 mt-5">
      <div class="grid grid-cols-5">
        <div class="flex px-3 rounded-lg bg-base-300">
          <img src="/icons/search.svg" alt="" />
          <input
            type="text"
            class="input bg-base-300 input-sm focus:ring-0"
            placeholder="Search"
          />
        </div>
      </div>
      <div class="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked1 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked1 = !checked1"
              v-bind:class="{ 'checkbox-primary': checked1 }"
              :checked="checked1"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked2 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked2 = !checked2"
              v-bind:class="{ 'checkbox-primary': checked2 }"
              :checked="checked2"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked3 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked3 = !checked3"
              v-bind:class="{ 'checkbox-primary': checked3 }"
              :checked="checked3"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked4 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked4 = !checked4"
              v-bind:class="{ 'checkbox-primary': checked4 }"
              :checked="checked4"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked5 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked5 = !checked5"
              v-bind:class="{ 'checkbox-primary': checked5 }"
              :checked="checked5"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked6 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked6 = !checked6"
              v-bind:class="{ 'checkbox-primary': checked6 }"
              :checked="checked6"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked7 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked7 = !checked7"
              v-bind:class="{ 'checkbox-primary': checked7 }"
              :checked="checked7"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked8 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked8 = !checked8"
              v-bind:class="{ 'checkbox-primary': checked8 }"
              :checked="checked8"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked9 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked9 = !checked9"
              v-bind:class="{ 'checkbox-primary': checked9 }"
              :checked="checked9"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked10 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked10 = !checked10"
              v-bind:class="{ 'checkbox-primary': checked10 }"
              :checked="checked10"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked11 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked11 = !checked11"
              v-bind:class="{ 'checkbox-primary': checked11 }"
              :checked="checked11"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
        <div
          class="grid w-40 gap-4 p-3 text-center rounded-lg cursor-pointer bg-base-300 place-items-center border-primary contact-dialog--container"
          v-bind:class="{ 'dialog-group--bordered': checked12 }"
        >
          <div class="avatar">
            <input
              type="checkbox"
              name=""
              class="absolute checkbox"
              @change="checked12 = !checked12"
              v-bind:class="{ 'checkbox-primary': checked12 }"
              :checked="checked8"
              style="left: -33px;"
            />
            <div class="case-img mt-3 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
          <span class="case-title">David Snowden</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
    }
  },
}
</script>
