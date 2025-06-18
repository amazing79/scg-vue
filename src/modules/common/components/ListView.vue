<script setup>
  import DeleteIcon from '@/modules/common/icons/DeleteIcon.vue';
  import EditIcon from '@/modules/common/icons/EditIcon.vue';
  const props = defineProps({
    data:{
      type: Array,
      default: new Array()
    },
    data_cols:{
      type: Array,
      default: new Array()
    }
  })
</script>

<template>
  <div class="lvw-data">
    <table class="table-data">
      <thead>
        <tr>
          <th v-for="column in props.data_cols" :key="column" scope="col">
            {{ column }}
          </th>
          <th scope="col" class="title_actions">Actions</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="item in props.data" :key="item[props.data_cols[0]]">
          <td v-for="col in props.data_cols" :key="item[col]">
            {{ item[col] }}
          </td>
          <td>
            <div class="col_actions">
              <button class="lvw__btn edit icon"><EditIcon></EditIcon></button>
              <button class="lvw__btn delete icon"><DeleteIcon></DeleteIcon></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
