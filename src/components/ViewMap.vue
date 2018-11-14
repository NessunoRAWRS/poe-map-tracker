<template>
    <div id="map">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>{{ name }}</h4>
          </li>
          <li class="collection-item">ID: {{ id }}</li>
          <li class="collection-item">Name: {{ name }}</li>
          <li class="collection-item">Quantity: {{ quantity }}</li>
          <li class="collection-item">Quality: {{ quality }}</li>
          <li class="collection-item">Loot: {{ loot }}</li>
        </ul>
        <router-link to="/" class="btn grey">Back</router-link>
    </div>
</template>

<script>
export default {
  name: 'view-map',
  data() {
    return {
      id: null,
      name: null,
      mods: null,
      quantity: null,
      quality: null,
      loot: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.id = to.params.it;
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.id = this.$route.params.id;
    }
  }
}
</script>
