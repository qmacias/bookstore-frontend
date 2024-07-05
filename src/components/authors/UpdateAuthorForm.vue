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
      formError: null,
    }
  },
  methods: {
    submitForm() {
      try {
        this.$emit('update-author', this.updatedAuthor);
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
          <input id="name" class="input is-large" required
                 type="text" placeholder="John Doe" v-model="updatedAuthor.name">
        </div>
      </div>

      <div class="field">
        <div class="buttons">
          <button type="submit" class="button is-success">Actualizar</button>
          <button type="button" class="button is-light" @click="$emit('cancel-update')">Cancelar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>
