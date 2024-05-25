<script setup>
import CardItem from "./CardItem.vue";

const course_and_lang = [
  {
    title: "Data Structures and Algorithms",
  },
  {
    title: "Programming for CS",
  },
  {
    title: "Intro to AI",
  },
  {
    title: "Web Tech",
  },
  {
    title: "SQL",
  },
  
];
</script>

<template>
  <h1 class="text-center pt-8 text-4xl">What We Offer</h1>
  <div
    class="mt-6 flex flex-col md:flex-row items-center justify-center md:container md:pr-5"
  >
    <h1 class="text-center text-3xl mb-3 md:pr-10">Courses and Languages</h1>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:gap-x-8 md:grid-cols-3 xl:grid-cols-4"
    >
      <div v-for="item in course_and_lang">
        <CardItem
          :title="item.title"
          :about="item.about"
          :color="item.color"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>