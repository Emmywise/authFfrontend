<template>
  <div class="">
    <section class="py-40 space-y-5 min-h-screen w-screen flex flex-col
    justify-center items-center">
      <h1 class="text-5xl">Page Not Found</h1>
      <router-link
        class="rounded-lg gig-button px-10 hover py-3"
        :to="{ name: 'home' }"
      >
        <span class="text-white text-sm">Go to home</span>
      </router-link>
    </section>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
  mounted() {
    this.startLoadingScreen();
    setTimeout(() => {
      this.stopLoadingScreen();
    }, 300);
  },
  methods: {
    startLoadingScreen() {
      this.$nprogress.start();
      this.loading = true;
    },
    stopLoadingScreen() {
      this.$nprogress.done();
      this.loading = false;
    },
  },
};
</script>
