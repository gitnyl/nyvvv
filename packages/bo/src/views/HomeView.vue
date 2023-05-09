<template>
  <main>
    <!-- 카드 -->
    <Card />

    <TheWelcome />

    <q-btn color="deep-orange" label="하이~" />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Card from '../views/components/Card.vue'

</script>
