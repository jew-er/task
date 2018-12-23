<template>
  <div class="card">
    <div
      class="top"
      :style="{ 'background': '-moz-'+headColor,
    'background': '-webkit-'+headColor
    }"
    >
      <h5>{{title}}</h5>
      <div class="icon" v-if="star">
        <i class="zmdi zmdi-star"></i>
      </div>
    </div>
    <div class="middle">
      <div class="iban">
        <small>{{iban}}</small>
      </div>
      <div class="bgn">
        <span>
          BGN
          <b>
            <span>{{bgn}}</span>,00
          </b>
        </span>
      </div>
    </div>

    <div class="bottom">
      <div class="left">
        <i class="zmdi zmdi-balance-wallet"></i>
        <i class="zmdi zmdi-more" @click="leftdd"></i>
        <ul class="dropdown" v-if="leftdropdown">
          <li>
            <i class="zmdi zmdi-star"></i>
            <span>Сметка по подразбиране</span>
          </li>
          <li>
            <i class="zmdi zmdi-notifications"></i>
            <span>Нотификации</span>
          </li>
          <li>
            <i class="zmdi zmdi-accounts-add"></i>
            <span>Права по сметка</span>
          </li>
          <li>
            <i class="zmdi zmdi-closed-caption"></i>
            <span>Заявете касово теглене</span>
          </li>
          <li>
            <i class="zmdi zmdi-reader"></i>
            <span>Извлеяения</span>
          </li>
          <li>
            <i class="zmdi zmdi-check-square"></i>
            <span>Удостоверения</span>
          </li>
          <li>
            <i class="zmdi zmdi-lock"></i>
            <span>Заключете сметката</span>
          </li>
          <li>
            <i class="zmdi zmdi-block"></i>
            <span>Дейктивирайте от Булбанк Онлайн</span>
          </li>
        </ul>
      </div>
      <div class="right" :class="{'muted': cards.length===0}" v-if="cards">
        <span>{{cards.length.toString()}}</span>
        <i class="zmdi zmdi-card"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    title: String,
    iban: String,
    bgn: String,
    headColor: String,
    star: {
      type: Boolean,
      default: false
    },
    cards: Array
  },
  data() {
    return {
      leftdropdown: false
    };
  },
  methods: {
    leftdd() {
      this.leftdropdown = !this.leftdropdown;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  width: 100%;
  background: $cardbg;
  box-shadow: 0.588px 0.809px 4px 0px rgba(12, 88, 109, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    border-radius: 2px 2px 0 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    box-sizing: border-box;
    width: 100%;

    .icon {
      i {
        color: rgb(125, 244, 255);
      }
    }
  }
  .middle {
    height: 89px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;
    width: calc(100% - 40px);
    border-bottom: 1px solid rgb(233, 233, 233);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .iban {
      small {
        color: $secondarytext;
      }
    }
    .bgn {
      span {
        color: $secondarytext;
        b {
          font-size: 14px;
          span {
            font-size: 1.5em;
          }
        }
      }
    }
  }
  .bottom {
    height: calc(193px - 50px - 89px);
    border-radius: 0 0 2px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    color: $active;
    .left {
      height: 100%;
      display: flex;
      align-items: center;
      i:nth-child(2) {
        font-size: 30px;
        cursor: pointer;
      }
      i {
        font-size: 20px;
        margin-right: 30px;
      }
      .dropdown {
        position: absolute;
        background: $cardhoverbg;
        list-style-type: none;
        transform: translate(23px, 170px);
        padding-left: 15px;
        padding-top: 15px;
        box-sizing: border-box;
        width: 320px;
        border-radius: 4px;
        box-shadow: 0.588px -1px 4px 0px rgba(12, 88, 109, 0.15);
        li:nth-child(4) {
          border-bottom: 1px solid rgb(233, 233, 233);
          padding-bottom: 15px;
        }
        li:nth-child(6) {
          border-bottom: 1px solid rgb(233, 233, 233);
          padding-bottom: 15px;
        }
        li {
          margin-bottom: 15px;
          display: Flex;
          align-items: center;
          justify-content: flex-start;
          span {
            font-size: 15px;
            //border: 1px solid black;
            transform: translateX(-7px);
          }
          i {
            font-size: 1em;
            width: 16px;
            height: 16px;
          }
        }
        &::before {
          content: "";
          width: 10px;
          height: 10px;
          background: $cardhoverbg;
          position: absolute;
          box-shadow: -2px -2px 2px 0px rgba(12, 88, 109, 0.15);
          transform: rotate(45deg) translate(-5px, -25px);
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      i {
        font-size: 20px;
        margin-left: 10px;
      }
    }
    .muted {
      color: $smalltext;
      i {
        color: $smalltext;
      }
    }
  }
  &:hover {
    background: $cardhoverbg;
  }
}
</style>
