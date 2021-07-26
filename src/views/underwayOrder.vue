<template>
  <div class="orderList">
    <div class="subHeader">
      <div class="left">
        <h3>
          진행중인 주문
        </h3>
      </div>
    </div>

    <div class="contents">
      <div class="order_tabs">
        <dl 
          v-for="(item, index) in tabs" 
          :key="index"
          :class="{active: tabActive === index}"
          @click="tabActive = index"
          v-ripple
        >
          <dt>
            <strong>{{item.title}}</strong>
            <span>({{item.sub}})</span>
          </dt>
          <dd>
            <strong>
              {{item.number}} 
            </strong>
            <span>건</span>
          </dd>
        </dl>
      </div>

      <div class="box">
        <div class="box-head">
          <h4>검수대기 목록</h4>
        </div>
        <div class="box-content">
          <v-data-table
            :headers="headers"
            :items="tableData"
            hide-default-footer
          >
            <template v-slot:item.orderNumber="{item}">
              <a @click="$router.push('orderDetail')">{{item.orderNumber}}</a>
            </template>
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
import Pager from '@/components/pager'

export default {
  components:{
    Pager
  },
  data(){
    return{
      tabActive:0,
      barPosition:0,

      tabs:[
        {
          title:'검수대기',
          sub:'입고완료',
          number:8
        },
        {
          title:'세탁대기',
          sub:'검수완료',
          number:4,
        },
        {
          title:'결제대기',
          sub:'추가결제요청',
          number:1,
        },
        {
          title:'출고대기',
          sub:'세탁완료',
          number:4
        },
      ],

      headers: [
        { text: '주문번호',sortable: false, value: 'orderNumber' },
        { text: '주문상태',sortable: false, value: 'orderState' },
        { text: '입고일시',sortable: false, value: 'standardDate' },
        { text: '세탁물품수',sortable: false, value: 'productNum' },
        { text: '결제금액',sortable: false, value: 'orderPrice' },
        { text: '주문자정보',sortable: false, value: 'userInfo' },
        { text: '주문자등급',sortable: false, value: 'level' },
        { text: '고객메모',sortable: false, value: 'memo' },
        { text: '기능',sortable: false, value: 'action' },
      ],
      tableData: [
        {
          orderNumber:'9819072389',
          orderState:'검수대기',
          standardDate:'2021-07-12 13:34:43',
          productNum:12,
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
          orderNumber:'9819072389',
          orderState:'검수대기',
          standardDate:'2021-07-12 13:34:43',
          productNum:12,
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

.order_tabs{
  display:Flex;
  align-items: flex-end;
  margin-bottom:20px;
  border-bottom:1px solid #292929;

  dl{
    position: relative;
    width:240px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border:1px solid #d2d2d2;
    border-bottom:0px;
    border-right:0px;
    padding:15px;
    background:#eaeaea;
    cursor: pointer;
    
    dt{
      strong{
        font-size:16px;
        line-height:1.2;
        font-weight:normal;
        display:block;
        font-family:'SCDream'
      }
      span{
        font-size:12px;
        color:#888;
      }
    }

    dd{
      strong{
        font-size:32px;
        line-height:1.2;
        font-family:'Roboto';
        font-weight:500;
        color:#292929;
      }
    }
  }
  
  dl.active::after{
    content:'';
    position: absolute;
    width:100%;
    height:1px;
    left:0px;
    bottom:-1px;
    background:#F5F6F9;
    z-index:2;
  }
  
  dl.active{
    border:1px solid #292929;
    border-bottom:0px;
    background:#F5F6F9;

    dd{
      strong{
        color:#2C9CD4
      }
    }
  }
  
  dl.active:last-child{
    border-right:1px solid #292929;
  }
  dl:last-child{
    border-right:1px solid #d2d2d2;
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