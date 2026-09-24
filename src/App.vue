<script setup>
// Root shell. Views own their full-page identity; the router transition
// gives a subtle cross-world wipe between them.
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="world" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
