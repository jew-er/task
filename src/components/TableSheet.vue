<template>
  <table class="full-table">
    <tr>
      <th v-for="(item, key) in rows.head" v-bind:key="key">
        <div class="th-inner">
          <div class="icon">
            <i class="zmdi zmdi-caret-up"></i>
            <i class="zmdi zmdi-caret-down"></i>
          </div>
          <small>{{item}}</small>
        </div>
      </th>
      <th>
        <div class="right-border">
          <div>
            <i class="zmdi zmdi-plus"></i>
          </div>
          <div>
            <i class="zmdi zmdi-minus"></i>
          </div>
        </div>
      </th>
    </tr>
    <tr v-for="(row, key) in rows.content" v-bind:key="key">
      <td v-for="(i, key2) in row" v-bind:key="key2">
        <div class="td-inner">
          <small>{{i}}</small>
        </div>
      </td>
      <td class="row-border">
        <div class="clock" v-if="rows.border[key]==='clock'">
          <i class="zmdi zmdi-time"></i>
        </div>
        <div class="plus" v-if="rows.border[key]==='plus'">
          <div>
            <i class="zmdi zmdi-plus"></i>
          </div>
        </div>
        <div class="minus" v-if="rows.border[key]==='minus'">
          <div>
            <i class="zmdi zmdi-minus"></i>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  name: "tableSheet",
  props: {
    rows: Object
  }
};
</script>
<style lang="scss" scoped>
.full-table {
  background: $cardhoverbg;
  border-collapse: collapse;
  box-shadow: 0.588px 0.809px 4px 0px rgba(12, 88, 109, 0.15);
  tr {
    border-bottom: 1px solid $thinborder;
    &:hover {
      background: white;
    }
    th {
      border-collapse: collapse;
      .th-inner {
        display: flex;
        align-items: center;
        padding: 15px;
        .icon {
          display: flex;
          flex-direction: column;
          height: 10px;
          justify-content: space-evenly;
          align-items: center;
          i {
            width: 8px;
            height: 8px;
            color: $active;
            @include center;
          }
        }
        small {
          color: $smalltext;
          font-weight: normal;
          margin-left: 2px;
        }
      }
    }
    td {
      .td-inner {
        padding: 20px;
      }
      border-collapse: collapse;
    }

    td:nth-child(even) {
      .td-inner {
        color: $smalltext;
      }
    }
    td:nth-child(odd) {
      .td-inner {
        color: $secondarytext;
      }
    }
    td:nth-child(4),
    td:nth-child(6) {
      .td-inner {
        color: $secondarytext;
      }
    }
    td:nth-child(5) {
      .td-inner {
        color: $smalltext;
      }
    }
    th:nth-child(4) {
      .th-inner {
        small {
          width: 50%;
          text-align: left;
        }
      }
    }

    .right-border {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      height: 60px;
      padding-right: 5px;
      div {
        border-radius: 50%;
        width: 14px;
        height: 14px;
        @include center;
        i {
          color: white;
          font-size: 14px;
        }
      }
      div:nth-child(1) {
        background: $success;
      }
      div:nth-child(2) {
        background: $error;
      }
    }
    .row-border {
      .clock {
        background: $warning;
        @include center;
        height: 58px;
        width: 20px;
        float: right;
        i {
          color: white;
          font-size: 14px;
        }
      }
      .plus {
        background: $success;
        @include center;
        height: 58px;
        width: 20px;
        float: right;
        div {
          background: white;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          @include center;
          i {
            color: $success;
            font-size: 14px;
          }
        }
      }
      .minus {
        background: $error;
        @include center;
        height: 58px;
        width: 20px;
        float: right;
        div {
          background: white;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          @include center;
          i {
            color: $error;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
