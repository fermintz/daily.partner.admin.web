<template>
  <v-dialog
    v-model="visible"
    max-width="1100"
  >
    <div class="modal">
      <div class="modal-head">
        <h3>정산 상세내역</h3>
      </div>
      <div class="modal-cont">
        <div class="summary">
          <dl>
            <dt>정산기준일</dt>
            <dd>2021-06-01 ~ 07-12</dd>
          </dl>
          <dl>
            <dt>세탁건수</dt>
            <dd>120건</dd>
          </dl>
          <dl>
            <dt>세탁금액</dt>
            <dd>945,500 원</dd>
          </dl>
          <dl>
            <dt>추가 및 환불금액</dt>
            <dd>113,000 원</dd>
          </dl>
          <dl>
            <dt>서비스이용료</dt>
            <dd>-65,000 원</dd>
          </dl>
          <dl class="total">
            <dt>총 정산금액</dt>
            <dd>859,000 원</dd>
          </dl>
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
      <div class="modal-footer">
        <v-btn text @click="visible = false">닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import Pager from '@/components/pager'

export default {
  components:{
    Pager
  },
  data(){
    return{
      visible: false,
      headers: [
        { text: '입고일',sortable: false, value: 'date' },
        { text: '세탁수량',sortable: false, value: 'number' },
        { text: '세탁금액',sortable: false, value: 'orderPrice' },
        { text: '추가결제금액',sortable: false, value: 'addPrice' },
        { text: '(-)서비스이용료',sortable: false, value: 'service' },
        { text: '정산금액',sortable: false, value: 'calcPrice' },
      ],
      tableData: [
        {
          date:'2021-06-01',
          number:6,
          orderPrice:'34,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-01',
          number:6,
          orderPrice:'34,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
        {
          date:'2021-06-02',
          number:5,
          orderPrice:'28,000 원',
          addPrice:'5,400 원',
          service:'3,400 원',
          calcPrice:'36,200 원'
        },
      ],
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  }
}
</script>

<style lang="scss" scoped>
.summary{
  display:flex;
  border:1px solid #e2e2e2;
  margin-bottom:30px;

  dl{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:80px;
    flex:1;
    border-right:1px solid #e2e2e2;
    padding:10px;
    dt{
      font-size:12px;
      color:#888;
    }
    dd{
      text-align:right;
      margin-top:5px;
    }
  }
  dl:last-child{
    border-right:0px;
  }

  dl.total{
    background:#F5EEF1;
    dd{
      color:#EF1682;
    }
  }
}
</style>