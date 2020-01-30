<template>
  <div>
        <h1>Oops!</h1>
        <h3 v-if="resource === resourceEnum.PAGE">The page you're looking for is not here.</h3>
        <h3 v-else-if="resource === resourceEnum.MOVIE">Was not possible to find any movie by the selected id.</h3>
        <router-link :to="{ name: 'Dashboard' }">Back to the home page</router-link>
  </div>
</template>

<script>
  import { RESOURCE } from '@/router.ts';

  export default {
      props: {
          resource: {
              type: String,
              required: true
          }
      },
      data() {
        return {
          resourceEnum: RESOURCE
        }
      }
  }
</script>

<style>

</style>