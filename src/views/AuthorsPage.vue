<script>
import { useAuthorApi } from "@/useAuthorApi.js";

import AuthorCard from "@/components/authors/AuthorCard.vue";
import NewAuthorForm from "@/components/authors/NewAuthorForm.vue";
import SideMenu from '@/components/SideMenu.vue';
import UpdateAuthorForm from "@/components/authors/UpdateAuthorForm.vue";

export default {
  name: "AuthorsPage",
  components: {
    AuthorCard,
    NewAuthorForm,
    SideMenu,
    UpdateAuthorForm,
  },
  setup() {
    return { ...useAuthorApi() };
  },
  data: () => ({
    filterText: '',
    showNewForm: false,
    showUpdateForm: false,
    authorToEdit: null,
  }),
  computed: {
    filteredAuthorList() {
      return this.authors.filter((author) => {
        if (author.name) {
          return author.name.toLowerCase().includes(this.filterText.toLowerCase());
        } else {
          return this.authors;
        }
      })
    },
    numberOfAuthors() {
      return this.filteredAuthorList.length;
    },
  },
  methods: {
    async addAuthor(payload) {
      try {
        await this.create(payload);

        this.hideForm();
      } catch (e) {
        // El error ya se maneja en useAuthorApi
      }
    },
    async updateAuthor(payload) {
      try {
        await this.modify(payload.id, payload);

        this.hideForm();
      } catch (e) {
        // El error ya se maneja en useAuthorApi
      }
    },
    async deleteAuthor(payload) {
      try {
        await this.remove(payload.id);
      } catch (e) {
        // El error ya se maneja en useAuthorApi
      }
    },
    editAuthor(author) {
      this.authorToEdit = author;
      this.showUpdateForm = true;
    },
    hideForm() {
      this.showNewForm = false;
      this.showUpdateForm = false;
      this.authorToEdit = null;

      this.clearError();
    },
    showNewAuthorForm() {
      this.clearError();

      this.showNewForm = true;
    },
  },
  mounted() {
    const route = this.$route;

    if (route.query.new) {
      this.showNewAuthorForm();
    }
  },
};
</script>

<template>
  <main>
    <section class="section">
      <div class="columns">
        <SideMenu />

        <div class="column">
          <h1 class="title">Autores</h1>

          <nav v-if="!showNewForm && !showUpdateForm" class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="subtitle is-5">
                  <strong>{{ numberOfAuthors }}</strong> autores
                </p>
              </div>

              <p class="level-item">
                <button class="button is-success" @click="showNewAuthorForm">Nuevo</button>
              </p>

              <p class="control">
                <input id="search" class="input" type="text" placeholder="Buscar" v-model="filterText">
              </p>
            </div>
          </nav>

          <NewAuthorForm
              v-if="showNewForm"
              :api-error="error"
              @add-new-author="addAuthor"
              @cancel-new-author="hideForm"
          />

          <UpdateAuthorForm
              v-else-if="showUpdateForm"
              :api-error="error"
              :author="authorToEdit"
              @update-author="updateAuthor"
              @cancel-update="hideForm"
          />

          <div v-else class="columns is-multiline">
            <div class="column is-full" v-for="item in filteredAuthorList" :key="`item-${item.id}`">
              <AuthorCard :author="item" @delete-author="deleteAuthor" @edit-author="editAuthor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>