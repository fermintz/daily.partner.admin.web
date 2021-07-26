<template>
  <div class="box user-info">
    <div class="box-head">
      <h4>고객정보</h4>
    </div>
    <div class="box-content">
      <div class="top">
        <dl class="pickupDate link">
          <dt>고객명</dt>
          <dd>
            박수민
          </dd>
        </dl>
        <div class="divider-v" />
        <dl class="pickupTime link">
          <dt>전화번호</dt>
          <dd>
            010-8525-4561
          </dd>
        </dl>
        <div class="divider-v" />
        <dl class="userName link">
          <dt>고객등급</dt>
          <dd>
            5단계
          </dd>
        </dl>

      </div>
    </div>

  </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>
.user-info{
  .top{
    display:flex;

    .divider-v{
      height:50px;;
      width:1px;
      background:#e2e2e2;
      margin:0 20px;
    }

    dl{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      flex:1;

      dt{
        font-size:12px;
        color:#888;
      }
      dd{
        display:flex;
        align-items: center;
        justify-content: space-between;

        .v-btn{
          border:1px solid #c2c2c2;
          height:20px;
          padding:0px;
          font-size:12px;
          border-radius:100px;
        }
      }
    }

    .link{
      dd{
        span{
          text-decoration: underline;
        }
        span:hover{
          cursor: pointer;
          color:#2C9CD4
        }
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:20px 0;
  }

  .bottom{
    dl{
      display:flex;
      margin-bottom:10px;

      dt{
        width:120px;
        font-size:12px;
        color:#888;
      }
      dd{}
    }
  }
}
</style>