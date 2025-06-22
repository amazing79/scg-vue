<script setup>
  import { ref } from 'vue';
  import { useFetch } from '@/helpers/fetch.js';
  //components
  import ListView from '../../common/components/ListView.vue';
  import ModalDialog from '@/modules/common/components/ModalDialog.vue';
  import CategoriesForm from '../components/CategoriesForm.vue';
  import LoaderView from '@/modules/common/components/LoaderView.vue';

  const {data : categories, error } = useFetch('src/helpers/data/categorias.json');

  const show = ref(false);
  const data_cols = ['idCategoria', 'descripcion'];

</script>

<template>
  <h1>Categorias</h1>
  <div v-if="error">
    <h3>No se pudo obtener las categorias: Ocurrio el error: {{ error.message }}</h3>
  </div>
  <div v-else-if="categories">
  <ListView :data="categories.data" :data_cols="data_cols"></ListView>
  <button class="btn primary" @click="show = true">Add</button>
  <ModalDialog :show="show" @closeModal="show = false">
    <CategoriesForm></CategoriesForm>
  </ModalDialog>
  </div>
  <div v-else>
    <LoaderView></LoaderView>
  </div>
</template>
