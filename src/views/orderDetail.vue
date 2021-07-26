<template>
  <div class="orderDetail">
    <div class="subHeader">
      <div class="left">
        <v-btn text @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3>주문상세</h3>
      </div>

      <div class="sub-head-btns">
        <AddPayment ref="addPayment"/>
        <PostMessage ref="postMessage" />

        <div class="btns btns-1">
          <v-btn text @click="$refs.postMessage.handle(true)">사용자알림</v-btn>
          <v-btn text @click="$refs.addPayment.handle(true)">추가결제요청</v-btn>
        </div>
        <div class="btns btns-2">
          <v-btn text>주문취소</v-btn>
          <v-btn text>부분환불</v-btn>
        </div>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <v-row>
        <v-col cols="9">
          <StateHistory />
          <UserInfo />
          <UserMessage />
          <UserProduct />
          <CheckProduct />
          <MemoBox />
        </v-col>
        <v-col cols="3">
          <div class="history-tabs box">
            <div class="tab-head">
              <v-btn 
                text 
                v-for="(item, index) in ['작업히스토리','결제히스토리']" 
                :key="index"
                @click="historyTabActive = index"
                :class="{active: historyTabActive === index}"
              >
                {{item}}
              </v-btn>
            </div>
            <PaymentHistory v-show="historyTabActive === 1"/>
            <WorkHistory  v-show="historyTabActive === 0" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import PostMessage from '@/components/modal/postMessage.vue'
import AddPayment from '@/components/modal/addPayment.vue'
import UserInfo from '@/components/orderDetail/userInfo.vue'
import UserMessage from '@/components/orderDetail/userMessage.vue'
import UserProduct from '@/components/orderDetail/userProduct.vue'
import CheckProduct from '@/components/orderDetail/checkProduct.vue'
import StateHistory from '@/components/orderDetail/stateHistory.vue'
import PaymentHistory from '@/components/orderDetail/payment-history.vue'
import WorkHistory from '@/components/orderDetail/workHistory.vue'
import MemoBox from '@/components/orderDetail/memoBox.vue'

export default {
  components:{
    PostMessage,
    AddPayment,
    UserInfo, 
    UserMessage, 
    UserProduct, 
    CheckProduct, 
    StateHistory, 
    PaymentHistory, 
    WorkHistory,
    MemoBox,
  },
  data(){
    return{
      historyTabActive:0,
    }
  },

  methods:{
    messagePost(value, title, text){
      this.$refs.message.handle(value);
      this.$refs.message.title = title;
      this.$refs.message.text = text;
    },
  }
}
</script> 

<style lang="scss" scoped>
.orderDetail{
  .box{
    margin-bottom:15px;
  }

  .history-tabs{
    .tab-head{
      display:Flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;

      .v-btn{
        flex:1;
        border-radius:0px;
        height:50px;
        color:#888;
      }

      .v-btn.active{
        color:#2C9CD4
      }
    }  
  }

}
</style>