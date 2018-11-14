<template>
    <div id="map">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>{{ name }}</h4>
          </li>
          <li class="collection-item"><div class="chip">Map #</div> {{ map_id }}</li>
          <li class="collection-item"><div class="chip">Name</div> {{ name }}</li>
          <li class="collection-item"><div class="chip">Mods</div> {{ mods }}</li>
          <li class="collection-item"><div class="chip">Quantity</div> {{ quantity }}</li>
          <li class="collection-item"><div class="chip">Quality</div> {{ quality }}</li>
          <li class="collection-item"><div class="chip">Loot</div> {{ loot }}</li>
        </ul>
        <router-link to="/" class="btn grey">Back</router-link>
    </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'

export default {
  name: 'view-map',
  data() {
    return {
      map_id: null,
      name: null,
      mods: null,
      quantity: null,
      quality: null,
      loot: null
    }
  },
  beforeRouteEnter(to, from, next) {
    
    let data = db.collection('maps')
      .doc(to.params.id)
      .get()
      .then(querySnapshot => {
        next(vm => {
          vm.id = querySnapshot.id
          vm.map_id = querySnapshot.data().map_id
          vm.name = querySnapshot.data().name
          vm.mods = querySnapshot.data().mods
          vm.quantity = querySnapshot.data().quantity
          vm.quality = querySnapshot.data().quality
          vm.loot = querySnapshot.data().loot
        })
      })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('maps')
        .where('id', '==', this.$route.params.id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.fb_id = doc.id
            this.id = doc.data().id
            this.name = doc.data().name
            this.mods = doc.data().mods
            this.quantity = doc.data().quantity
            this.quality = doc.data().quality
            this.loot = doc.data().loot
          })
        })
    }
  }
}
</script>
