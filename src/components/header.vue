<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/img/logo_w.png">
      <span>데일리세탁 파트너</span>
      <label>부산 백양세탁소</label>
    </div>
    <div class="gnb">
      <v-btn text @click="$refs.passChange.handle(true)">비밀번호변경</v-btn>
      <v-btn text @click="$refs.message.handle(true)">로그아웃</v-btn>
    </div>

    <PassChange ref="passChange" />
    <Message 
      ref="message" 
      title="로그아웃"
      text="로그아웃 하시겠습니까?"
      :action="router"
    />
  </div>
</template>

<script>
import PassChange from '@/components/modal/passChange.vue'
import Message from '@/components/modal/message.vue'

export default {
  components:{
    PassChange,Message
  },
  methods:{
    router(){
      this.$router.push('login')
    }
  },
}
</script>

<style lang="scss" scoped>

.header{
  position: sticky;
  top:0px;
  z-index:2;
  height:50px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(0,160,241);
  background: linear-gradient(100deg, rgba(0,160,241,1) 0%, rgba(0,106,223,1) 100%);
  z-index:10;

  .logo{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:0 20px;

    span{
      font-family:'SCDream';
      font-weight:500;
      margin-left:5px;
      font-size:18px;
      color:#fff;
    }
    img{
      display:block;
      height:26px;
      margin-right:5px;
    }

    label{
      display:flex;
      align-items:center;
      color:#fff;
    }

    label::before{
      content:'';
      display:block;
      height:14px;
      width:1px;
      background:#fff;
      margin:0 20px;
    }
  }

  .gnb{
    margin-right:15px;

 
    .v-btn{
      font-size:12px;
      max-height:28px;
      color:#fff;
      border-radius:100px;
      background:rgba(0,0,0,0.15);
      margin-left:10px;
    }
  }
}

</style>