<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <navbar :total="total"/>
      </div>
      <div class="col-md-5">
        <my-form :data="formData" @save="saved"/>
      </div>
      <div class="col-md-7">
        <div v-for="i in expList" :key="i.id">
          <crad :data="i" @edit="openEdit(i)" @delete="deleteEle(i)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import myForm from './components/form.vue'
import crad from './components/card.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    myForm,
    navbar,
    crad
  },
  data () {
    return {
      formData: {
        id: null,
        title: '',
        amount: 0,
        note: '',
        date: ''
      }
    }
  },
  computed: {
    ...mapState(['expList']),
    total () {
      let total = 0
      this.expList.forEach(e => {
        total += parseInt(e.amount)
      })
      return total
    }
  },
  methods: {
    resetForm () {
      this.formData.id = null
      this.formData.amount = ''
      this.formData.title = ''
      this.formData.note = ''
      this.formData.date = ''
    },
    validate () {
      return true
    },
    openEdit (ele) {
      this.formData.id = ele._id
      this.formData.amount = ele.amount
      this.formData.title = ele.title
      this.formData.note = ele.note
      this.formData.date = ele.date
    },
    deleteEle (ele) {
      this.$store.dispatch('deleteExp', ele)
    },
    saved () {
      const body = JSON.parse(JSON.stringify(this.formData))
      if (this.validate()) {
        if (this.formData.id === null) {
          this.$store.dispatch('saveNewExp', body)
        } else {
          this.$store.dispatch('updateExp', body)
        }
        this.resetForm()
      }
    },
    fetchAll () {
      this.$store.dispatch('getAll')
    }
  },
  created () {
    this.resetForm()
    this.fetchAll()
  }
}
</script>

<style lang="scss">
#app {
  background-color: #6200EE !important;
}
</style>
