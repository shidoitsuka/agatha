<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <GlobalSearchInput />
  </div>

  <div class="flex mt-8">
    <SidebarLeft />
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="p-4 space-y-3 rounded-lg bg-base-200">
        <div>
          <table class="vin-db--table w-full">
          <tr class="vindb-table--title">
            <td>Country</td>
            <td>VIN</td>
          </tr>
          <tr class="three-dot-hide-trigger">
            <td class="vindb-table--left">China</td>
            <td class="vindb-table--right flex">
              1B3HB48B37D340709
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="vibdb-table--even three-dot-hide-trigger">
            <td class="vindb-table--left">Tuvalu</td>
            <td class="vindb-table--right flex">
              2C4RDGCG2DR524842
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="three-dot-hide-trigger">
            <td class="vindb-table--left">Togo</td>
            <td class="vindb-table--right flex">
              5NPET4ACXAH684816
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="vibdb-table--even three-dot-hide-trigger">
            <td class="vindb-table--left">North Marcedonia</td>
            <td class="vindb-table--right flex">
              1D7RV1GT7BS644347
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="three-dot-hide-trigger">
            <td class="vindb-table--left">Bulgaria</td>
            <td class="vindb-table--right flex">
              1GKEC63858J117519
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="vibdb-table--even three-dot-hide-trigger">
            <td class="vindb-table--left">Marshall Islands</td>
            <td class="vindb-table--right flex">
              1G1ND52J9XY184856
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="three-dot-hide-trigger">
            <td class="vindb-table--left">Martinique</td>
            <td class="vindb-table--right flex">
              1GCHK23255F859272
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="vibdb-table--even three-dot-hide-trigger">
            <td class="vindb-table--left">Indonesia</td>
            <td class="vindb-table--right flex">
              5NPEB4AC7CH458934
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="three-dot-hide-trigger">
            <td class="vindb-table--left">South Korea</td>
            <td class="vindb-table--right flex">
              1FAHP2E88EG137748
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
          <tr class="vibdb-table--even three-dot-hide-trigger">
            <td class="vindb-table--left">Philippines</td>
            <td class="vindb-table--right flex">
              JTHGL1EF1B5015796
              <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
            </td>
          </tr>
        </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarLeft from '@/components/vindb/SidebarLeft.vue'
import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'

export default {
  components: {
    SidebarLeft,
    GlobalSearchInput,
  },
  data() {
    return {}
  },
}
</script>
