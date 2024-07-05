<script>
export default {
  name: "UpdateAuthorForm",
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  emits: ['update-author', 'cancel-update'],
  data() {
    return {
      updatedAuthor: {
        id: this.author.id,
        name: this.author.name,
      },
    };
  },
};
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Nombre</label>

        <div class="control">
          <input id="name" class="input is-large" required
                 type="text" placeholder="John Doe" v-model="updatedAuthor.name">
        </div>
      </div>

      <div class="field">
        <div class="buttons">
          <button class="button is-success"
                  @click="$emit('update-author', updatedAuthor)">Actualizar</button>

          <button class="button is-light" @click="$emit('cancel-update')">Cancelar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>
