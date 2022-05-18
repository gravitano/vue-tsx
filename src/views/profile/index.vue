<script setup lang="ts">
import WelcomeMessage from '@/components/WelcomeMessage';
import { useAuth } from '@/stores/auth';

const auth = useAuth();
</script>

<template>
  <div>
    <h1>Profile</h1>

    <WelcomeMessage v-if="auth.user" :user="auth.user.username" />
  </div>
</template>

<style scoped></style>
