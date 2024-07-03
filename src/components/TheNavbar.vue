<script>
export default {
  data: () => ({
    navList: [
      {
        name: 'Inicio',
        path: '/',
      },
      {
        name: 'Autores',
        path: '/authors',
      },
    ],
    tagline: '¡Bienvenido! Aquí podrás editar los registros de la biblioteca.'
  }),
};
</script>

<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img src="@/assets/bookstore.png" alt="Logo de la biblioteca." width="40" />
      </RouterLink>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <small>{{ tagline }}</small>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item"
             v-for="navItem in navList"
             :key="`nav-${navItem.name}`">

          <RouterLink :to="navItem.path">{{ navItem.name }}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-item small {
  cursor: default;
}
</style>