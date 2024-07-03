<script>
export default {
  name: "SideMenu",
};
</script>

<template>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen">
    <nav class="menu">
      <p class="menu-label">Registros</p>

      <ul class="menu-list">
        <li><RouterLink to="/authors">Autores</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>