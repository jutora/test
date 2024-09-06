<template>
    <div v-if="status === 'pending'">
      Loading...
    </div>
    <div v-else>
      <div v-for="pojst in posts">
        <h2>{{ post.id }}{{ post.location }}</h2>
      </div>

  </div>
</template>

<script setup lang="ts">
const { status, data: posts } = await useFetch("https://api.sampleapis.com/wines/reds", {
  //lazy: true,
  server: false
});

debugger
</script>
