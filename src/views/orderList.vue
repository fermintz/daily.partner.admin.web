<template>
  <div class="orderList">
    <div class="subHeader">
      <div class="left">
        <h3>
          주문조회
        </h3>
      </div>
    </div>

    <div class="contents">
      
      <SearchOpt>
        <DateSelect />
        <Keyword />
        <KeySelect />
      </SearchOpt>

      <div class="box">
        <div class="box-content">
          <v-data-table
            :headers="headers"
            :items="tableData"
            hide-default-footer
          >
            <template v-slot:item.userInfo="{item}">
              <div class="name">{{item.userInfo.name}}</div>
              <div class="phone">{{item.userInfo.phone}}</div>
            </template>
            <template v-slot:item.action="{item}">
              <v-btn text class="action_btn">{{item.action}}</v-btn>
            </template>
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
import Keyword from '@/components/searchOpt/keyword'
import KeySelect from '@/components/searchOpt/keySelect'
import Pager from '@/components/pager'

export default {
  components:{
    Pager, DateSelect, SearchOpt, Keyword, KeySelect
  },
  data(){
    return{
      tabActive:0,
      barPosition:0,
      headers: [
        { text: '입고일시',sortable: false, value: 'standardDate' },
        { text: '세탁물품수',sortable: false, value: 'orderNum' },
        { text: '결제금액',sortable: false, value: 'orderPrice' },
        { text: '주문자정보',sortable: false, value: 'userInfo' },
        { text: '주문자등급',sortable: false, value: 'level' },
        { text: '고객메모',sortable: false, value: 'memo' },
        { text: '기능',sortable: false, value: 'action' },
      ],
      tableData: [
        {
          standardDate:'2021-07-12 13:34:43',
          orderNum:12,
          orderPrice:'27,000원',
          userInfo:{
            name:'박수민',
            phone:'010-8525-4561'
          },
          level:'극대노',
          memo:'와이셔츠에 오염이 심해 깨끗하게 만들고 싶습니다. 잘 부탁드립니다!',
          action:'검수하기',
        },
        {
          standardDate:'2021-07-12 13:34:43',
          orderNum:12,
          orderPrice:'27,000원',
          userInfo:{
            name:'박수민',
            phone:'010-8525-4561'
          },
          level:'극대노',
          memo:'와이셔츠에 오염이 심해 깨끗하게 만들고 싶습니다. 잘 부탁드립니다!',
          action:'검수하기',
        },
      ],
    }
  },
  methods:{
    barMove(idx){
      const barMoveSize = [0 ,180 ,360]
      this.tabActive = idx;
      barMoveSize.map((item, index) => {
        this.tabActive === index ? this.barPosition = item : null
      })
    }
  },
}
</script>

<style lang="scss" scoped>

.order_summary{
  display:Flex;
  align-items: center;
  margin-bottom:20px;

  dl{
    width:240px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:90px;
    border:1px solid #e2e2e2;
    padding:15px;
    background:#fff;
    margin-right:10px;

    dd{
      text-align:right;
      font-size:24px;
      line-height:24px;
      text-decoration: underline;
      cursor: pointer;
    }
    dd:hover{
      color:#d22828;
    }
  }
}

.box-tabs{
  position: relative;
  border-bottom:1px solid #e2e2e2;

  .v-btn{
    position: relative;
    width:180px;
    height:50px;
    font-size:14px;
    color:#888;
    z-index:1;
  }
  .v-btn.active{
    color:#292929;
  }
}

.activeBar{
  position: absolute;
  bottom:0px;
  width:180px;
  background: rgb(0,160,241);
  background: linear-gradient(100deg, rgba(0,160,241,1) 0%, rgba(0,106,223,1) 100%);
  height:2px;
  z-index:4;
  transition:left .3s;
}

.action_btn{
  font-size:12px;
  border:1px solid #c2c2c2;
}
</style>