<template>
  <div class="">
    <section class="space-y-5 min-h-screen flex flex-col
    justify-center items-center">
      <p class="text-center text-2xl">Login</p>
      <div class="flex items-start">
        <div
          class="bg-white rounded-xl shadow-sm flex-1 border border-gray-200"
        >
          <div class="p-10">
            <div class="grid grid-cols-1 gap-5">
              <div class="text-left">
                <label class="text-sm block mb-3 text-gray-400 text-left">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  v-model="userData.email"
                  class="border rounded-md py-2 px-2 w-full"
                  :class="{
                    'border-red-500': errors.email,
                    'border-gray-200': errors.email,
                  }"
                >
                <form-error-message name="email" :errors="errors"></form-error-message>
              </div>
              <div  class="text-left">
                <label class="text-sm block mb-3 text-gray-400 text-left">Password</label>
                <input
                  type="password"
                  v-model="userData.password"
                  placeholder="Password"
                  class="border rounded-md py-2 px-2 w-full"
                  :class="{
                    'border-red-500': errors.password,
                    'border-gray-200': errors.password,
                  }"
                >
                <form-error-message name="password" :errors="errors"></form-error-message>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5 mt-10">
              <router-link
                :to="{ name: 'auth.register' }"
                class="rounded-md px-5 flex hover justify-center items-center py-2
                col-start-3 col-end-4"
              >
                <span class="gray-text-400 text-sm">Register</span>
              </router-link>
              <button
                class="rounded-lg gig-button px-10 flex hover justify-center items-center py-3
                  col-start-4 col-end-6"
                @click="login"
              >
                <span class="text-white text-sm">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import FormErrorMessage from '@/components/FormErrorMessage.vue';

export default {
  name: 'Login',
  components: {
    FormErrorMessage,
  },
  data() {
    return {
      errors: {},
      userData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$nprogress.start();
      this.$store
        .dispatch('login', this.userData)
        .then((res) => {
          this.$nprogress.done();
          console.log(res);
          this.$toast('Success', { type: 'success' });
          this.$router.push({ name: 'home' });
        })
        .catch((err) => {
          this.$nprogress.done();
          this.errors = err.response.data;
          if (err.response.data.detail) {
            this.$toast(err.response.data.detail, { type: 'error' });
          } else {
            this.$toast('An error occured.', { type: 'error' });
          }
        });
    },
  },
};
</script>
