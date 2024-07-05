<script>
export default {
  name: "NewAuthorForm",
  emits: ['add-new-author', 'cancel-new-author'],
  data: () => ({
    newAuthor: {
      name: '',
    },
    formError: null,
  }),
  methods: {
    submitForm() {
      try {
        this.$emit('add-new-author', this.newAuthor);
        this.formError = null;
      } catch (e) {
        this.formError = e.message;
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div v-if="formError" class="notification is-danger">
      {{ formError }}
    </div>

    <div class="field">
      <div class="field">
        <label for="name" class="label">Nombre</label>

        <div class="control">
          <input id="name" class="input is-large"
                 type="text" placeholder="John Doe" v-model="newAuthor.name">
        </div>
      </div>

      <div class="field">
        <div class="buttons">
          <button type="submit" class="button is-success">Guardar</button>
          <button type="button" class="button is-light" @click="$emit('cancel-new-author')">Cancelar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>