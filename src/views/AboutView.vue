<template>
  <div
    class="h-64 w-full text-center flex flex-col text-white justify-center items-center bg-[url(/aboutImg.jpg)] bg-cover bg-center bg-no-repeat">
    <h1 class="text-3xl sm:text-5xl font-semibold p-3">
      The Support Center Story
    </h1>
    <p class="p-3 italic text-md">Better software is built together</p>
  </div>
  <div class="pt-6 pb-8 px-4 container lg:w-3/4 2xl:w-1/2">
    <div>
      <h1 class="text-4xl font-mono py-2">Our Story: From Friendly Hangouts to Your Coding Companion</h1>
      <p class="text-lg">
        We get it. Struggling through code can feel isolating, especially when you're surrounded by mountains of assignments and deadlines. That's why we created Support Center. It all started from feeling overwhelmed with having too many people to tutor by myself. The name came from the support group I have with my friends, where we constantly supported each other with projects and problem-solving.
      </p>
      <p class="text-lg">
        As our programming skills grew, so did our desire to help others. We realized there were many students facing similar challenges, and we wanted to extend the supportive environment we created for ourselves.
      </p>
      <p class="text-lg">
        Fast forward to today, and we're still students ourselves, but now we're on a mission to be your coding companion. We believe in the power of community and collaboration, and we're here to offer the same kind of friendly support and guidance we received from each other.
      </p>
    </div>
    <div>
      <h1 class="text-4xl font-mono py-2">Why Choose Us?</h1>
      <p class="text-lg">
        We understand your struggles. We've been there ourselves, juggling classes, assignments, and the ever-growing world of code.
      </p>
      <p class="text-lg">
        We speak your language. We can break down complex concepts into clear, easy-to-understand explanations.
      </p>
      <p class="text-lg">
        We're passionate about learning. We're constantly expanding our knowledge and excited to share it with you.
      </p>
      <p class="text-lg">
        Join our growing community and let's code together!
      </p>
    </div>
    <div>
      <!-- <h1 class="text-4xl font-mono py-2">Values</h1> -->
      <div class="pt-3 grid grid-cols-1 mx-4 sm:grid-cols-2 gap-5 justify-start items-start">
        <div v-for="item in values" :key="item.name">
          <!-- <div class="flex text-2xl items-center">
            <font-awesome-icon :icon="item.icon" :class="['mr-2', item.color]" />
            <p>{{ item.name }}</p>
          </div> -->
          <p class="text-lg">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
