<script setup>
  import {ref } from 'vue';
  import { useFetch } from '@/helpers/fetch.js';
  //components
  import ListView from '../../common/components/ListView.vue';
  import ModalDialog from '@/modules/common/components/ModalDialog.vue';
  import PersonasForm from '../components/PersonasForm.vue';
  import LoaderView from '@/modules/common/components/LoaderView.vue';

  const { data : persons, error} = useFetch('src/helpers/data/personas.json');
  const show = ref(false);
  const data_cols = ['idPersona', 'apellido', 'nombre', 'apodo'];



</script>

<template>
  <h1>Personas</h1>
  <div v-if="error">
    <h3>No se pudo obtener las categorias: Ocurrio el error: {{ error.message }}</h3>
  </div>
  <div v-else-if="persons">
    <ListView :data="persons.data" :data_cols="data_cols"></ListView>
    <button class="btn primary" @click="show = true">Add</button>
    <ModalDialog :show="show" @closeModal="show = false">
      <PersonasForm></PersonasForm>
    </ModalDialog>
  </div>
  <div v-else>
    <LoaderView></LoaderView>
  </div>
</template>
