<template>
  <v-dialog
    v-model="visible"
    width="360px"
  >
    <div class="modal passChange">
      <div class="modal-head">
        <h3>비밀번호 변경</h3>
      </div>
      <div class="modal-cont">
        <dl>
          <dt>발송된 비밀번호 입력</dt>
          <dd>
            <v-text-field outlined dense>

            </v-text-field>
          </dd>
        </dl>
        <dl>
          <dt>변경할 비밀번호 입력</dt>
          <dd>
            <v-text-field outlined dense>

            </v-text-field>
          </dd>
        </dl>
      </div>
      <div class="modal-footer">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text @click="visible = false">변경완료</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>

export default {
  data(){
    return{
      visible:true,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },  
}
</script>

<style lang="scss" scoped>
.passChange{
  .modal-cont{
    dl{
      margin-bottom:10px;
      dt{}
      dd{
        margin-top:5px;
      }
    }
  }
}


</style>