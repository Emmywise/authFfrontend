<template>
  <div class="">
    <DashboardLayout>
      <template slot="content">
        <section class="tab border-b-2 mt-10 border-gray-200">
        </section>
        <section class="dashboard-table mt-16 pb-10">
          <div class="pl-10 pr-20">
            <section class="w-full pb-5 text-left">
              <h1 class="text-2xl">Hello, {{ userData.username }}</h1>
            </section>
          </div>
        </section>
      </template>
    </DashboardLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardLayout from '@/components/DashboardLayout.vue';

export default {
  name: 'Home',
  components: {
    DashboardLayout,
  },
  computed: {
    userData() {
      return JSON.parse(localStorage.getItem('user'));
    },
  },
};
</script>
