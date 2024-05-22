<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="flex flex-row md:gap-x-2.5 items-center md:justify-center lg:w-3/4 md:container"
  >
    <div class="px-4 md:w-1/2 md:pl-1 md:px-0">
      <h1 class="text-5xl">
        We solve problems, <br/>
        together.
      </h1>
      <p class="mt-3 mb-5 text-lg 2xl:w-1/2">
        Stuck on a coding problem? We get it. 
        Support Center is your community to unravel CS challenges and level up your coding skills
      </p>
      <RouterLink
        to="/about"
        class="bg-rose-200 hover:bg-rose-600 rounded-3xl hover:text-white px-4 py-2"
        aria-label="about"
        >LEARN MORE</RouterLink
      >
    </div>
    <div class="hidden md:inline">
      <img
        alt="pair programming"
        src="/home.jpg"
        class="object-contain w-[450px] rounded-xl"
      />
    </div>
  </div>
</template>
