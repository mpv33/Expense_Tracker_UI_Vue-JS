<template>
  <nav class="navbar np nm">
    <h3 class="nop nm">My Expenses</h3>
    <div class="row">
        <h4>Total</h4>
        <h1 class="line">|</h1>
        <h3>{{total}}</h3>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    total: [String, Number]
  }
}
</script>

<style lang="scss">
 .navbar {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3,h1,h2, h4 {
        color: #ffffff;
    }
    .line {
        margin: 20px;
        margin-top: -12px;
        margin-bottom: 0px;
    }
 }
</style>
