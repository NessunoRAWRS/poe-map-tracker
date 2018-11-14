<template>
  <div id="app">
    <!-- Logo heeeere -->
    <nav>
      <div class="nav-wrapper orange">
        <router-link to="/" class="brand-logo">PoE Map Tracker</router-link>
      </div>
    </nav>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>