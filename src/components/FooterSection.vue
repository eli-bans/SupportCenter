<script setup>
import { ref } from "vue";

const curDate = ref(new Date().getFullYear());
</script>

<template>
  <footer
  class="sm:flex inline-block bg-gray-600 flex-col w-full h-max justify-center items-center text-center py-4"
   >    
    <div class="text-white">
      &copy; 2024
      {{ !(2024 === curDate) ? "- " + curDate : "" }} Support Center
    </div>

    <div
      class="flex sm:flex-row flex-col justify-around items-center p-4 mx-auto my-0 w-full max-w-7xl"
    >
      <div class="w-full text-center mb-3 text-white">
        <p class="text-xl">Contact Us</p>
        <a href="mailto:elikembansah1@gmail.com">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="text-white text-lg"
          />
          elikembansah1@gmail.com</a
        >
      </div>

      <div
        class="flex flex-row justify-center gap-5 my-0 mx-10 w-full max-w-7xl"
      >
        <a
          href="https://www.linkedin.com/in/elikem-bansah-41763922b/"
          target="_blank"
          rel="noreferrer"
          ><font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="text-white text-xl"
          />
        </a>
        <a
          href="https://github.com/eli-bans/SupportCenter.git"
          target="_blank"
          rel="noreferrer"
          class="text-white"
          ><font-awesome-icon :icon="['fab', 'github']" class="text-xl"
        /></a>
      </div>
    </div>
  </footer>
</template>
