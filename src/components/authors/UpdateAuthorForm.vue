<script>
export default {
  name: "UpdateAuthorForm",
  props: {
    author: {
      type: Object,
      required: true,
    },
    apiError: {
      type: String,
      default: null
    },
    apiSuccess: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update-author', 'cancel-update'],
  data() {
    return {
      updatedAuthor: {
        id: this.author.id,
        name: this.author.name,
      },
    }
  },
  methods: {
    submitForm() {
      this.$emit('update-author', this.updatedAuthor);
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
                 placeholder="John Doe" v-model="updatedAuthor.name">
        </div>

        <div class="message-container">
          <p v-if="apiError" class="help is-danger">{{ apiError }}</p>
          <p v-else-if="apiSuccess" class="help is-success">Done.</p>
          <p v-else class="help">&nbsp;</p>
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
.message-container {
  min-height: 10px;
}

.help {
  transition: all 0.3s ease;
}
</style>
