<script setup>
  import {ref, onMounted } from 'vue';
  import { getCategorias } from '@/helpers/useCategorias';
  //components
  import ListView from '../../common/components/ListView.vue';
  import ModalDialog from '@/modules/common/components/ModalDialog.vue';
  import CategoriesForm from '../components/CategoriesForm.vue';


  const categories = ref([]);
  const show = ref(false);
  const data_cols = ['idCategoria', 'descripcion'];

  onMounted(() => {
    getCategorias()
      .then(data => {
        categories.value = data.data;
      })
      .catch(error => {
      console.log(error.message);
      })
  })

</script>

<template>
  <h1>Categorias</h1>
  <ListView :data="categories" :data_cols="data_cols"></ListView>
  <button class="btn primary" @click="show = true">Add</button>
  <ModalDialog :show="show" @closeModal="show = false">
    <CategoriesForm></CategoriesForm>
  </ModalDialog>
</template>
