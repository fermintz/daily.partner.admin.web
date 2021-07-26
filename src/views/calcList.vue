<template>
  <div class="calcList">
    <div class="subHeader">
      <div class="left">
        <h3>정산내역</h3>
      </div>
    </div>

    <div class="contents">
      <div class="left">
        <SearchOpt>
          <DateSelect />
        </SearchOpt>

        <div class="box">
          <div class="box-head">
            <h4>정산완료목록</h4>
          </div>
          <div class="box-content">
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="tableData"
              item-key="name"
              hide-default-footer
            >
              <template v-slot:item.orderNum="{item}">
                <a @click="$refs.calc.handle(true)">{{item.orderNum}}</a>
              </template>
            </v-data-table>
            <Pager />
          </div>
        </div>
          
      </div>
      <div class="right">
        <div class="box calc_plan">
          <div class="box-head">
            <h4>정산예정</h4>
          </div>
          <div class="box-content">
            <dl>
              <dt>정산기준일</dt>
              <dd>2021-06-01 ~ 2021-07-12</dd>
            </dl>
            <dl>
              <dt>세탁건수</dt>
              <dd><a @click="$refs.calc.handle(true)">124 건</a></dd>
            </dl>
            <dl>
              <dt>세탁금액</dt>
              <dd>978,400 원</dd>
            </dl>
            <dl>
              <dt>추가 및 환불금액</dt>
              <dd>134,000 원</dd>
            </dl>

            <dl>
              <dt>서비스이용료</dt>
              <dd>-54,000 원</dd>
            </dl>
            <dl class="total">
              <dt>총 정산금액</dt>
              <dd>753,000 원</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <CalcModal ref="calc" />
  </div>
</template>

<script>
import SearchOpt from '@/components/searchOpt/searchOpt'
import DateSelect from '@/components/searchOpt/dateSelect'
import Pager from '@/components/pager'
import CalcModal from '@/components/modal/calc'

export default {
  components:{
    SearchOpt, DateSelect, Pager, CalcModal
  },
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
    }
  }
}
</script>

<style lang="scss" scoped>
.calcList{
  .contents{
    display:Flex;

    .left{
      flex:1;
    }
    .right{
      width:320px;
      margin-left:30px;

      dl{
        padding-bottom:15px;
        margin-bottom:15px;
        border-bottom:1px solid #e2e2e2;

        dt{
          font-size:13px;
          margin-bottom:5px;
          color:#888
        }
        dd{
          font-size:16px;
        }
      }

      dl:last-child{
        border-bottom:0;
        margin-bottom:0;
        padding-bottom:0;
      }

      dl.total{
        dt{}
        dd{
          text-align:right;
          font-size:24px;
          color:#DF0E68;
        }
      }
    }
  }
}
</style>