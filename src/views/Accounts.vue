<template>
  <div class="accounts">
    <div class="header-wrap">
      <div class="header-content">
        <h1>Сметки</h1>
        <div class="button" @click="layoutHandle">
          <div class="gridbtn" :class="{'btnactive': liststyle}">
            <i class="zmdi zmdi-apps"></i>
          </div>
          <div class="columnbtn" :class="{'btnactive': !liststyle}">
            <i class="zmdi zmdi-format-list-bulleted"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="maincontent">
      <div class="offer-wrap">
        <offer opentext="Заявете одобрен Овърдрафт за 2 000 за Разплащателна сметка 1"/>
      </div>
      <div class="card-list" :style="{
        'transform': 'translateX('+moveBy+'px)'
      }">
        <div
          class="card-wrap"
          v-for="(i,key) in cardlist"
          v-bind:key="key"
          :class="{'widthValue': cardlist.length>2}"
        >
          <Card
            :title="i.heading"
            :iban="i.iban"
            :bgn="i.bgn"
            headColor="linear-gradient(-82deg,rgb(42, 191, 220) 0%,rgb(42, 204, 219) 100%)"
            :star="true"
            :cards="i.cards"
          />
        </div>
        <div class="card-wrap" :class="{'widthValue': cardlist.length>2}">
          <div class="card-create">
            <h5>Това може да е новата ви сметка</h5>
            <span>BG08UNCR30409149124</span>
            <span>
              BGN
              <big>2000</big>,00
            </span>
            <div class="buttons">
              <button>Детайли</button>
              <button @click="createCard">Заяви</button>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="head" @click="revealDetails">
          <h4>Детайли</h4>
          <i class="zmdi zmdi-chevron-up"></i>
        </div>
        <div class="content" :class="{'active': showDetails}">
          <div class="row">
            <div class="left">
              <i class="zmdi zmdi-card"></i>
              <small>Дебитни карти</small>
              <div class="btn">
                <i class="zmdi zmdi-card"></i>
              </div>
            </div>
            <div class="right">
              <div class="debit" v-for="(i,key) in cardlist[selectedCard].cards" v-bind:key="key">
                <big>{{i.name}}</big>
                <small>{{i.id}}</small>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="left">
              <i class="zmdi zmdi-shopping-cart-plus"></i>
              <small>Овърдрафт</small>
            </div>
            <div class="right">
              <small class="alternativetext">Заявете овърдрафт сега</small>
            </div>
          </div>
          <div class="row">
            <div class="left">
              <i class="zmdi zmdi-balance-wallet"></i>
              <small>Баланс</small>
              <div class="btn">
                <i class="zmdi zmdi-calendar-alt"></i>
              </div>
            </div>
            <div class="right">
              <small>
                BGN
                <big>{{cardlist[selectedCard].bgn}}</big>,00
              </small>
            </div>
          </div>
          <div class="row">
            <div class="left">
              <i class="zmdi zmdi-assignment-o"></i>
              <small>Вид на сметката</small>
            </div>
            <div class="right">
              <small>Разплащателна</small>
            </div>
          </div>
          <div class="row">
            <div class="left">
              <i class="zmdi zmdi-account"></i>
              <small>Титуляр</small>
            </div>
            <div class="right">
              <small>Иван Иванов</small>
            </div>
          </div>
          <div class="row">
            <div class="left">
              <i class="zmdi zmdi-calendar-check"></i>
              <small>Дата на откриване</small>
            </div>
            <div class="right">
              <small>12 окт 2014</small>
            </div>
          </div>
        </div>
      </div>
      <table-sheet
        class="table"
        :rows="{
            'head': ['Дата', 'Час','Сметка','Получател\ Наредител', 'Основание', 'Валута Сума'],
            'content': [
                ['12 oкт', '16:53', 'Разплащателна сметка 1', 'Виваком ЕАД', 'Месечна така телефон', 'BGN 100,46'],
                ['12 oкт', '21:53', 'Разплащателна сметка 2', 'Виваком ЕАД', 'Месечна така телефон', 'BGN 100,46'],
                ['12 oкт', '16:42', 'Разплащателна сметка 3', 'Виваком ЕАД', 'Месечна така телефон', 'BGN 100,46'],
                ['12 oкт', '14:13', 'Разплащателна сметка 4', 'Виваком ЕАД', 'Месечна така телефон', 'BGN 100,46'],
                ['12 oкт', '12:15', 'Разплащателна сметка 5', 'Виваком ЕАД', 'Месечна така телефон', 'BGN 100,46'],
            ],
            'border':['clock','plus', 'minus','plus','minus']

        }"
      />
      <button class="go-right" @click="slideright" v-if="cardlist.length - step >2">
        <i class="zmdi zmdi-chevron-left"></i>
      </button>
      <button class="go-left" @click="slideleft" v-if="step>0">
        <i class="zmdi zmdi-chevron-left"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Offer from "@/components/Offer.vue";
import Card from "@/components/Card.vue";
import TableSheet from "@/components/TableSheet.vue";

export default {
  name: "Accounts",
  components: {
    Offer,
    Card,
    TableSheet
  },
  data() {
    return {
      liststyle: true,
      cardlist: [
        {
          heading: "Разплащателна сметка 1",
          iban: "BG08UNCR09512095125",
          bgn: "2000",
          cards: []
        },
        {
          heading: "Разплащателна сметка 2",
          iban: "BG08UNCR09512095125",
          bgn: "2000",
          cards: [
            {
              name: "VISA Classic",
              id: "1234567812345678"
            },
            {
              name: "VISA Electron",
              id: "1234567812345678"
            }
          ]
        }
      ],

      heading: "Това може да е новата ви сметка",
      iban: "BG08UNCR70004521009973",
      bgn: "1 500",
      showDetails: false,
      selectedCard: 1,
      moveBy: 0,
      step: 0
    };
  },
  methods: {
    layoutHandle() {
      this.liststyle = !this.liststyle;
    },
    createCard() {
      let newCard = {
        heading: this.heading,
        iban: this.iban,
        bgn: this.bgn
      };

      this.cardlist.push(newCard);
    },
    revealDetails() {
      this.showDetails = !this.showDetails;
    },
    slideright() {
      if (this.step === 1) {
        this.moveBy -=
          ((window.innerWidth - 273 - 17 - 40) * 33) / 100 + 10 - 75 / 3;
      } else {
        this.moveBy -=
          ((window.innerWidth - 273 - 17 - 40) * 33) / 100 + 10 - 75 / 3 - 75;
      }
      this.step += 1;
    },
    slideleft() {
      if (this.step === 1) {
        this.moveBy +=
          ((window.innerWidth - 273 - 17 - 40) * 33) / 100 - 50 - 75 / 3;
      } else {
        this.moveBy +=
          ((window.innerWidth - 273 - 17 - 40) * 33) / 100 - 20 - 75 / 3 + 75;
      }
      this.step -= 1;
      if (this.moveBy > 0) {
        this.moveBy = 0;
        this.step = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.accounts {
  box-sizing: border-box;
  //width: calc(100% - 20%);
  //max-width: calc(100% - 273px);
  width: calc(100% - 273px);
  height: auto;
  position: absolute;
  right: 0;
  background: $bg;

  .header-wrap {
    background-image: url("../assets/accounts.jpg");
    background-size: cover;
    background-position: 0% 74%;
    transform: scaleX(-1);
    height: 100px;
    width: 100%;
    .header-content {
      background: rgba(70, 173, 198, 0.702);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transform: scaleX(-1);
      padding: 20px;
      box-sizing: border-box;
      h1 {
        color: white;
      }
      .button {
        background: white;
        display: flex;
        justify-content: space-evenly;
        width: 57px;
        height: 30px;
        align-items: center;
        border-radius: 34px;
        cursor: pointer;
        .gridbtn {
          color: $active;
          border-radius: 50%;
          width: 26px;
          height: 26px;
          i {
            font-size: 20px;
          }
          @include center;
        }
        .columnbtn {
          color: $active;
          border-radius: 50%;
          width: 26px;
          height: 26px;
          @include center;
          i {
            font-size: 20px;
          }
        }
        .btnactive {
          color: white;
          background: $active;
        }
      }
    }
  }
  .maincontent {
    padding: 30px 20px;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    overflow: hidden;
    .card-list {
      display: Flex;
      margin-top: 30px;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;

      .card-wrap {
        min-width: calc(33% - 15px);
        max-width: calc(33% - 15px);
        width: 100%;
        height: 193px;
        margin-right: 30px;
        flex: 1;
        .card-create {
          border-color: rgb(187, 216, 224);
          border-style: dashed;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 20px;
          span,
          h5 {
            color: $smalltext;
          }
          .buttons {
            display: flex;
            justify-content: space-between;
            margin-right: 70px;
            button {
              padding: 15px 20px;
              border: none;
              box-shadow: 0.588px 0.809px 4px 0px rgba(12, 88, 109, 0.15);
              border-radius: 4px;
            }
            button:nth-child(1) {
              color: $active;
            }
            button:nth-child(2) {
              background: $active;
              color: white;
            }
          }
        }
      }
      .widthValue {
        min-width: calc(33% - 20px - 75px / 3);
        max-width: calc(33% - 20px - 75px / 3);
      }
    }
    .details {
      width: 100%;
      margin-top: 30px;
      box-shadow: 0.588px 0.809px 4px 0px rgba(12, 88, 109, 0.15);
      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $cardhoverbg;
        padding: 15px 25px 15px 25px;
        cursor: pointer;
        h4 {
          color: $generaltext;
        }
        i {
          font-size: 28px;
          color: $active;
        }
      }
      .content {
        max-height: 0px;
        overflow: hidden;
        background: $cardbg;
        padding: 0px 25px;
        .row {
          border-bottom: 1px solid $thinborder;
          display: flex;
          justify-content: space-between;
          padding: 16px 0px;
          .left {
            display: flex;
            align-items: center;
            i {
              font-size: 21px;
              color: $smalltext;
            }
            small {
              margin-left: 10px;
              margin-right: 20px;
              color: $secondarytext;
            }
            .btn {
              background: $cardhoverbg;
              @include center;
              width: 18px;
              height: 18px;
              padding: 5px;
              i {
                color: $active;
              }
            }
          }
          .right {
            display: flex;
            height: 100%;
            .debit {
              display: flex;
              flex-direction: column;
              height: 100%;
              justify-content: space-between;
              margin-left: 15px;
              big {
                color: $active;
                text-align: right;
                font-size: 16px;
                margin-bottom: 2px;
              }
              small {
                color: $secondarytext;
                text-align: right;
              }
            }
            small {
              color: $secondarytext;
            }
            .alternativetext {
              color: $active;
            }
          }
        }
      }
      .active {
        max-height: 500px;
      }
    }
    .table {
      width: 100%;
      margin-top: 30px;
    }
    .go-right {
      @include center;
      position: absolute;
      background: white;
      color: $active;
      font-size: 2em;
      width: 75px;
      height: 40px;
      border-radius: 10px 0 0 10px;
      border: none;
      transform: translateY(150px);
      right: 0;
      top: 140px;
    }
    .go-left {
      @include center;
      position: absolute;
      background: white;
      color: $active;
      font-size: 2em;
      width: 75px;
      height: 40px;
      border-radius: 0 10px 10px 0;
      border: none;
      transform: translateY(150px);
      left: 0;
      top: 140px;
    }
  }
}
</style>
