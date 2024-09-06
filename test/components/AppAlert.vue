<template>
    <div v-if="status === 'pending'">
      Loading...
    </div>
    <div v-else>
      <div v-if="posts && posts.length > 0">
        <div v-for="post in posts" :key="post.id">
          <h2>{{ post.id }}{{ post.location }}</h2>
        </div>
      </div>
      <div v-else>
        No posts available.
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const status = ref('pending');
const posts = ref([]);

try {
  const { status: fetchStatus, data: fetchData } = await useFetch("https://api.sampleapis.com/wines/reds", {
    //lazy: true,
    server: false
  });
  status.value = fetchStatus;
  posts.value = fetchData;
} catch (error) {
  console.error('Failed to fetch posts:', error);
  status.value = 'error';
}
</script>
