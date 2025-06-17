<script setup>
  import SideBar from '@/modules/common/Components/SideBar.vue';
</script>

<template>
     <SideBar></SideBar>
      <main id="content">
        <router-view>
        </router-view>
     </main>
</template>
