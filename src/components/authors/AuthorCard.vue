<script>
export default {
  name: "AuthorCard",
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  emits: ['delete-author'],
  methods: {
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
        <p :id="author.id" class="title is-4 is-spaced mb-3">
          {{ author.name }}
        </p>

        <div>
          <button class="button is-small is-danger is-light" @click="deleteAuthor">Borrar</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>