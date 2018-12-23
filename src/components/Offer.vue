<template>
  <div class="offer">
    <div class="open">
      <div class="shopping-cart">
        <img src="../assets/shopping-basket.png">
      </div>
      <div class="text">
        <h3>{{opentext}}</h3>
      </div>
      <div class="closebtn">
        <span>+</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  props: {
    opentext: String
  }
};
</script>
<style lang="scss" scoped>
$offer-h: 56px;
$offer-close-d: 16px;
.offer {
  height: $offer-h;
  width: 100%;

  .open {
    background: $success;
    height: 100%;
    width: calc(100% - 17px);
    float: right;
    border-radius: 2px;
    display: flex;
    align-items: center;

    .shopping-cart {
      background: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      @include center;
      transform: translateX(-17px);
    }
    .text {
      color: white;
      width: calc(100% - 30px - 20px);
      h3 {
        font-weight: normal;
      }
    }
    .closebtn {
      width: $offer-close-d;
      height: $offer-close-d;
      @include center;
      background: rgb(197, 197, 197);
      color: white;
      border: 2px solid rgb(227, 241, 245);
      border-radius: 50%;
      cursor: pointer;
      transform: translate(
        $offer-close-d * 0.5 - 5,
        $offer-h * -0.5 + $offer-close-d * 0.5
      );
      span {
        transform: rotate(45deg);
        font-size: 1.2em;
        font-weight: 100;
        user-select: none;
      }
    }
  }
}
</style>
