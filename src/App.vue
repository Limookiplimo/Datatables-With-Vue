<template>
  <div>
    <Headers />
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Headers from './components/Headers.vue';
import Sidebar from './components/Sidebar.vue';
import Incidents from './components/Incidents.vue';

export default {
  components: {
    Headers,
    Sidebar,
    Incidents
  },

};
</script>