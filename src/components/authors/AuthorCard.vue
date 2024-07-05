<script>
export default {
  name: "AuthorCard",
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  emits: ['edit-author', 'delete-author'],
  methods: {
    editAuthor() {
      this.$emit('edit-author', this.author)
    },
    deleteAuthor() {
      this.$emit('delete-author', this.author)
    },
  },
};
</script>

<template>
  <article class="box">
    <div class="media">
      <div class="media-content">
        <p :id="author.id" class="title is-4 is-spaced mb-3">{{ author.name }}</p>

        <div>
          <button class="button is-small is-info is-light mr-2" @click="editAuthor">Editar</button>
          <button class="button is-small is-danger is-light" @click="deleteAuthor">Borrar</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>