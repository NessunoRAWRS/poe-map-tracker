<template>
    <div id="dashboard">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Maps</h4>
          </li>
          <li v-for="map in maps"
          v-bind:key="map.id"
          class="collection-item">
            <router-link v-bind:to="{ name: 'view-map', params: { id: map.id } }">
              <div class="chip">{{ map.map_id }}</div>{{ map.name }}
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'dashboard',
  data() {
    return {
      maps: []
    }
  },
  created() {
    db.collection('maps')
      .orderBy('map_id')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'map_id': doc.data().map_id,
            'name': doc.data().name,
            'mods': doc.data().mods,
            'quantity': doc.data().quantity,
            'quality': doc.data().quality,
            'loot': doc.data().loot
          }
          this.maps.push(data)
        })
      })
  }
}
</script>
