<script setup>
  import {ref} from 'vue';
  import AppIcon from '../icons/AppIcon.vue';
  import BillsIcon from '../icons/BillsIcon.vue';
  import HomeIcon from '../icons/HomeIcon.vue';
  import CategoriesIcon from '../icons/CategoriesIcon.vue';
  import MenuIcon from '../icons/MenuIcon.vue';
  import PersonsIcon from '../icons/PersonsIcon.vue';
  import LogOutIcon from '../icons/LogOutIcon.vue';


  const show = ref(false);

  const toogleMenu = () => {
    show.value = !show.value;
  }
</script>

<template>
    <header>
        <button @click="toogleMenu" class="menu-toggle"><MenuIcon></MenuIcon></button>
        <h1><AppIcon></AppIcon> - SCG</h1>
    </header>
    <aside @click="toogleMenu" class="sidebar" :class="{show : show }">
      <nav >
        <ul>
          <li>
            <router-link to="/">
              <HomeIcon></HomeIcon>  Home
            </router-link>
          </li>
          <li>
            <router-link to="/categories">
             <CategoriesIcon></CategoriesIcon> Categorias
            </router-link>
          </li>
          <li>
            <router-link to="/persons">
              <PersonsIcon></PersonsIcon> Personas
            </router-link>
          </li>
          <li>
            <router-link to="/bills">
              <BillsIcon></BillsIcon> Gastos
            </router-link>
          </li>
          <li>
            <router-link to="/logout">
              <LogOutIcon></LogOutIcon> Salir
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
</template>
