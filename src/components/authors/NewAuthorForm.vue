<script>
export default {
  name: "NewAuthorForm",
  props: {
    apiError: {
      type: String,
      default: null
    },
    apiSuccess: {
      type: Boolean,
      default: false
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
                 :class="['input is-large',
                          apiError ? 'is-danger' : '',
                          apiSuccess ? 'is-success' : '']"
                 placeholder="John Doe" v-model="newAuthor.name">
        </div>

        <div class="message-container">
          <p v-if="apiError" class="help is-danger">{{ apiError }}</p>
          <p v-else-if="apiSuccess" class="help is-success">Done.</p>
          <p v-else class="help">&nbsp;</p>
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
.message-container {
  min-height: 10px;
}

.help {
  transition: all 0.3s ease;
}
</style>