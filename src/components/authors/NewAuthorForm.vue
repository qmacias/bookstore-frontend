<script>
export default {
  name: "NewAuthorForm",
  props: {
    apiError: {
      type: String,
      default: null
    }
  },
  emits: ['add-new-author', 'cancel-new-author'],
  data() {
    return {
      newAuthor: {
        name: '',
      },
    }
  },
  methods: {
    submitForm() {
      this.$emit('add-new-author', this.newAuthor);
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <div class="field">
        <label for="name" class="label">Nombre</label>

        <div class="control">
          <input id="name" type="text"
                 placeholder="John Doe" v-model="newAuthor.name"
                 :class="['input is-large', apiError ? 'is-danger' : '']">
        </div>

        <p v-if="apiError" class="help is-danger">{{ apiError }}</p>
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