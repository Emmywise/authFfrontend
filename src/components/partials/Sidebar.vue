<template>
    <div class="sidebar border-r-2 border-gray-200">
      <div class="flex items-center mt-12 pl-8">
        <h3 class="ml-4 font-bold text-4xl">
          Radar
        </h3>
      </div>
      <nav class="pl-8">
        <ul class="mt-10">
          <li class="p-3">
            <router-link to="/" class="mb-4 flex items-center text-gray-400">
              <img src="../../assets/images/svgs/Icon-home-fill.svg" class="w-5">
              <span class="ml-4 text-sm mt-1 orange-text">Dashboard</span>
            </router-link>
          </li>
          <li class="p-3">
            <router-link :to="{ name: 'auth.logout' }" class="mb-4 flex items-center text-gray-400">
              <img src="../../assets/images/svgs/Icon-briefcase.svg" class="w-5">
              <span class="ml-4 text-sm mt-1">Logout</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
