<template>
  <div class="sales">
    <div class="subHeader">
      <div class="left">
        <h3>매출통계</h3>
      </div>
    </div>
    <div class="contents">
      <SearchOpt>
        <DateSelect />
      </SearchOpt>

      <div class="box">
        <div class="box-content">
          <div class="chart">
            <BarChart chartdata="chartdata" options="options"/>
          </div>

          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="tableData"
            hide-default-footer
          >
          </v-data-table>
          <Pager />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchOpt from '@/components/searchOpt/searchOpt'
import DateSelect from '@/components/searchOpt/dateSelect'
import Pager from '@/components/pager'
import BarChart from '@/components/chart/Bar'

export default {
  components:{SearchOpt, DateSelect ,Pager, BarChart},
  data(){
    return{
      headers: [
        { text: '정산기준일',sortable: false, value: 'standardDate' },
        { text: '세탁건수',sortable: false, value: 'orderNum' },
        { text: '총 정산금액',sortable: false, value: 'totalPrice' },
        { text: '은행정보',sortable: false, value: 'bankInfo' },
        { text: '정산처리일',sortable: false, value: 'processDate' },
        { text: '비고',sortable: false, value: 'etc' },
      ],
      tableData: [
        {
          standardDate:'2021-06-01 ~ 2021-07-12',
          orderNum:12,
          totalPrice:'394,000 원',
          bankInfo:'우리은행 1002-537-521641 (박수민)',
          processDate:'2021-07-15',
          etc:'내용없음',
        },
      ],

      chartdata: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart{
  border:1px solid #e2e2e2;
  margin-bottom:50px;
}
</style>