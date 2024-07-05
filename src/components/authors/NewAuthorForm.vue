<script>
export default {
  name: "NewAuthorForm",
  emits: ['add-new-author', 'cancel-new-author'],
  data: () => ({
    newAuthor: {
      name: '',
    },
  }),
};
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Nombre</label>

        <div class="control">
          <input id="name" class="input is-large" required
                 type="text" placeholder="John Doe" v-model="newAuthor.name">
        </div>
      </div>

      <div class="field">
        <div class="buttons">
          <button class="button is-success"
                  @click="$emit('add-new-author', newAuthor)">Guardar</button>

          <button class="button is-light" @click="$emit('cancel-new-author')">Cancelar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>