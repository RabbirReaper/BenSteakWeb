<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <InfoSection />
    <!-- <ContactSection /> -->
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import InfoSection from '@/components/sections/InfoSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>
