<script setup>
  import {ref, onMounted } from 'vue';
  import { getPersons } from '@/helpers/usePersons';
  //components
  import ListView from '../../common/components/ListView.vue';
  import ModalDialog from '@/modules/common/components/ModalDialog.vue';
  import PersonasForm from '../components/PersonasForm.vue';


  const persons = ref([]);
  const show = ref(false);
  const data_cols = ['idPersona', 'apellido', 'nombre', 'apodo'];

  onMounted(() => {
    getPersons()
    .then(data => {
      persons.value = data.data;
    })
    .catch(error => {
      console.log(error.message);
    })
  })

</script>

<template>
  <h1>Personas</h1>
  <ListView :data="persons" :data_cols="data_cols"></ListView>
  <button class="btn primary" @click="show = true">Add</button>
  <ModalDialog :show="show" @closeModal="show = false">
    <PersonasForm></PersonasForm>
  </ModalDialog>
</template>
