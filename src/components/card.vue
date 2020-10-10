<template>
  <div class='my-card row'>
    <div class='pr-3 center'>
      <div>
        <b-icon
          icon='pencil-fill'
          style='color: #fff;'
          @click="$emit('edit')"
        ></b-icon>
        <small>Edit</small>
      </div>
    </div>
    <div class='content'>
      <p>{{ data.date }}</p>
      <div class='value row nm'>
        <h4 class='nm title'>{{ data.title }}</h4>
        <h4 class='nm'>
          Rs. <small>{{ data.amount }}</small>
        </h4>
      </div>
      <p class='my-3'>
        <b>NOTE:&#160;&#160;</b>
        <span>{{ data.note !== '' ? data.note : '-' }}</span>
      </p>
    </div>
    <div class='pl-3 center'>
      <div>
        <b-icon
          icon='x-circle-fill'
          @click="$emit('delete')"
          style='color: #fff'
        ></b-icon>
        <small>Delete</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: function () {
        return {
          date: '00/00/0000',
          title: 'title',
          amount: 0,
          note: 'nothing'
        }
      }
    }
  }
}
</script>

<style lang='scss'>
.my-card {
  margin: 15px;
  background: transparent;
  .content {
    p {
      font-size: 12px;
    }
    background: #ffffff;
    border-radius: 4px;
    padding: 15px;
    width: calc(100% - 100px);
    .value {
      justify-content: space-between;
      .title {
        color: #6200ee;
      }
    }
  }
  .center {
    display: flex;
    align-items: center;
    text-align: center;
    & > div {
      height: fit-content;
    }
    small {
      display: block;
      color: #ffffff;
    }
  }
}
</style>
