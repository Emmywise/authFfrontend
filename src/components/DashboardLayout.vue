<template>
  <div class="app-container">
    <Sidebar />
    <div class="main">
      <Navbar />
      <section class="2">
        <div class="flex mt-10 pl-10 pr-20 justify-between">
          <h5 class="text-2xl font-bold">Radar Dashboard</h5>
        </div>
      </section>
      <slot name="content">
        <section></section>
      </slot>
    </div>
  </div>
</template>
<script>
import Navbar from './partials/Navbar.vue';
import Sidebar from './partials/Sidebar.vue';

export default {
  components: { Sidebar, Navbar },
  name: 'DashboardLayout',
};
</script>
