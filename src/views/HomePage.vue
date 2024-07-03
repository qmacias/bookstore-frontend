<script>
export default {
  name: "HomePage",
};
</script>

<template>
  <main class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <h1 class="title is-3">
              ¡Bienvenido! Te estábamos esperando
            </h1>

            <h2 class="subtitle is-4">
              Puedes descubrir, crear y organizar autores de la biblioteca
            </h2>

            <p class="buttons is-centered">
              <RouterLink to="/authors" class="button is-primary">Ver todos los autores</RouterLink>
              <RouterLink to="/authors?new=true" class="button">Agregar nuevo</RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero-body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  flex-grow: 0;
}
</style>