<template>
  <div class="">
    <section class="space-y-5 min-h-screen flex flex-col
    justify-center items-center">
      <p class="text-center text-2xl">Register</p>
      <div class="flex items-start">
        <div
          class="bg-white rounded-xl shadow-sm flex-1 border border-gray-200"
        >
          <div class="p-10">
            <div class="grid grid-cols-1 gap-5">
              <div class="text-left">
                <label class="text-sm block mb-3 text-gray-400 text-left">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  v-model="userData.username"
                  class="border rounded-md py-2 px-2 w-full"
                  :class="{
                    'border-red-500': errors.username,
                    'border-gray-200': errors.username,
                  }"
                >
                <form-error-message name="username" :errors="errors"></form-error-message>
              </div>
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
                :to="{ name: 'auth.login' }"
                class="rounded-md px-5 flex hover justify-center items-center py-2
                col-start-3 col-end-4"
              >
                <span class="gray-text-400 text-sm">Login</span>
              </router-link>
              <button
                class="rounded-lg gig-button px-10 flex hover justify-center items-center py-3
                  col-start-4 col-end-6"
                @click="register"
              >
                <span class="text-white text-sm">Register</span>
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
  name: 'Register',
  components: {
    FormErrorMessage,
  },
  data() {
    return {
      errors: {},
      message: '',
      userData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      this.$nprogress.start();
      delete this.$http.defaults.headers.common.Authorization;
      this.$http.post('user-accounts/', this.userData)
        .then((res) => {
          console.log(res);
          this.$nprogress.done();
          this.$toast('Registration successful. Kindly check your email to verify your account.', { type: 'success' });
          setTimeout(() => {
            this.$router.push({ name: 'auth.login' });
          }, 300);
        })
        .catch((err) => {
          this.$nprogress.done();
          this.errors = err.response.data;
          this.$toast('An error occured.', { type: 'error' });
        });
    },
  },
};
</script>
