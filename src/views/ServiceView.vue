<script setup>
const service_list = [
  {
    link: "https://cal.com/elikem-bansah-3jg3rs", // using David's Calendly link for now until we have our own
  },
];
</script>

<template>
  <div class="pt-8 container px-4 lg:w-3/4 2xl:w-1/2">
    <h1 class="text-center text-5xl mb-3">Book a session with us today</h1>
    <div v-for="service in service_list">
      <div class="flex items-center text-center">
        <h1 class="text-3xl text-slate-700 mt-6">
          {{ service.heading }}
        </h1>
        <span class="text-red-600 text-md">{{ service.tier }}</span>
      </div>
      <ul class="py-2 ml-8 list-disc leading-9 text-lg">
        <li v-for="item in service.options">{{ item }}</li>
      </ul>
      <div class="container my-2">
        <div class="text-center">
          <a :href="service.link" target="_blank" rel="noreferrer">
            <button
              class="bg-rose-600 text-white py-3 px-16 text-lg font-semibold rounded-lg"
            >
              Book
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- <div class="text-lg text-center my-8 mx-3">
      <p>
        If you like to support our mission, kindly reach out to us via
        <a href="mailto:codereview@gmail.com" class="text-blue-900">email</a
        >.
      </p>
    </div> -->
  </div>
</template>
