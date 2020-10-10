<template>
  <div class='my-form'>
    <input type='text' placeholder='Title' v-model='data.title' />
    <input type='number' placeholder='Amount' v-model='data.amount' />
    <input type='text' placeholder='Note' v-model='data.note' />
    <input type='date' placeholder='Date' v-model='data.date' />
    <button @click="$emit('save')">+ ADD EXPENSE</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: function () {
        return {
          title: '',
          amount: 0,
          note: '',
          date: new Date()
        }
      }
    }
  }
}
</script>

<style lang='scss'>
.my-form {
  padding: 20px;
  input {
    display: block;
    border: 1px solid #ffffff;
    margin: 10px 0px;
    padding: 10px;
    width: 80%;
    background: transparent;
    border-radius: 4px;
    color: #ffffff;
  }
  button {
    padding: 12px 20px;
    font-size: 12px;
    margin: 30px 0px;
    border-radius: 2em;
    border: 1px solid #409c83;
    background: #1dc597;
  }
}
</style>
