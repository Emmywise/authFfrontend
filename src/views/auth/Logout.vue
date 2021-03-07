<template>
  <div class="">
    <section class="py-40 space-y-5 min-h-screen w-screen flex flex-col
    justify-center items-center">
      <h1 class="text-5xl">Logging you out...</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  mounted() {
    this.$nprogress.start();
    this.$store.dispatch('logout').then((response) => {
      console.log(response);
      this.$toast('Successfully logged out.', { type: 'success' });
      setTimeout(() => {
        this.$router.push({ name: 'auth.login' });
      }, 300);
    });
    setTimeout(() => {
      this.$router.push({ name: 'auth.login' });
    }, 300);
    this.$toast('Successfully logged out.', { type: 'success' });
    this.$nprogress.done();
  },
};
</script>
