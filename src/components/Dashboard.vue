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
              <div class="chip">{{ map.id }}</div>{{ map.name }}
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      maps: []
    }
  },
  created() {
    let mapTest = {
      'id': 1,
      'name': 'Beach Map',
      'mods': '',
      'quantity': '0',
      'quality': '20%',
      'loot': []
    }
    this.maps.push(mapTest)

    mapTest = {
      'id': 2,
      'name': 'Nemesis Beach Map of Nothing',
      'mods': '20% increased rare enemies\nTest',
      'quantity': '40%',
      'quality': '20%',
      'loot': [{
        'name': 'Item test 1',
        'rarity': 'rare'
      }]
    }

    this.maps.push(mapTest)
  }
}
</script>
