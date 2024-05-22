<script setup>
import WelcomeMsgSection from "./WelcomeMsgSection.vue";
import LanguageToolsSection from "./LanguageToolsSection.vue";
import ServiceView from "../ServiceView.vue";
</script>

<template>
  <div class="py-8 px-2">
    <!-- Welcome msg section -->
    <WelcomeMsgSection />

    <!-- Courses and Languages -->
    <LanguageToolsSection />

    <!--Add past workshops sessions -->
    <SessionInfo />

    <!--insert booking form here-->
    <ServiceView /> 

   
  </div>
</template>
