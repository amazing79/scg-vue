<script setup>
  import BillsIcon from '../icons/BillsIcon.vue';
  import HomeIcon from '../icons/HomeIcon.vue';
  import CategoriesIcon from '../icons/CategoriesIcon.vue';
  import PersonsIcon from '../icons/PersonsIcon.vue';
  import LogOutIcon from '../icons/LogOutIcon.vue';
</script>

<template>
    <header>
        <button id="btn_menu" class="menu-toggle"><i class="fas fa-bars"></i></button>
        <h1><i class="fas fa-piggy-bank"></i> - SCG</h1>
    </header>
    <aside class="sidebar">
      <nav>
        <ul>
          <li>
            <router-link to="/">
             <HomeIcon />  Home
            </router-link>
          </li>
          <li>
            <router-link to="/categories">
             <CategoriesIcon /> Categorias
            </router-link>
          </li>
          <li>
            <router-link to="/persons">
              <PersonsIcon /> Personas
            </router-link>
          </li>
          <li>
            <router-link to="/bills">
              <BillsIcon /> Gastos
            </router-link>
          </li>
          <li>
            <router-link to="/logout">
              <LogOutIcon /> Salir
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
</template>
