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
          <tr>
            <td class="vindb-table--left">China</td>
            <td class="vindb-table--right">1B3HB48B37D340709</td>
          </tr>
          <tr class="vibdb-table--even">
            <td class="vindb-table--left">Tuvalu</td>
            <td class="vindb-table--right">2C4RDGCG2DR524842</td>
          </tr>
          <tr>
            <td class="vindb-table--left">Togo</td>
            <td class="vindb-table--right">5NPET4ACXAH684816</td>
          </tr>
          <tr class="vibdb-table--even">
            <td class="vindb-table--left">North Marcedonia</td>
            <td class="vindb-table--right">1D7RV1GT7BS644347</td>
          </tr>
          <tr>
            <td class="vindb-table--left">Bulgaria</td>
            <td class="vindb-table--right">1GKEC63858J117519</td>
          </tr>
          <tr class="vibdb-table--even">
            <td class="vindb-table--left">Marshall Islands</td>
            <td class="vindb-table--right">1G1ND52J9XY184856</td>
          </tr>
          <tr>
            <td class="vindb-table--left">Martinique</td>
            <td class="vindb-table--right">1GCHK23255F859272</td>
          </tr>
          <tr class="vibdb-table--even">
            <td class="vindb-table--left">Indonesia</td>
            <td class="vindb-table--right">5NPEB4AC7CH458934</td>
          </tr>
          <tr>
            <td class="vindb-table--left">South Korea</td>
            <td class="vindb-table--right">1FAHP2E88EG137748</td>
          </tr>
          <tr class="vibdb-table--even">
            <td class="vindb-table--left">Philippines</td>
            <td class="vindb-table--right">JTHGL1EF1B5015796</td>
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
