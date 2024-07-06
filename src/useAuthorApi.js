import { ref, onMounted } from 'vue';

export function useAuthorApi() {
    const error = ref(null);
    const authors = ref([]);
    const API_URL = import.meta.env.VITE_BACKEND_API_URL;

    const getAll = async () => {
        authors.value = await fetch(API_URL)
            .then((response) => response.json());
    }

    onMounted(getAll);

    return {
        error,
        authors,

        clearError() {
            error.value = null;
        },

        async handleErrorResponse(response) {
            if (!response.ok) {
                const errorData = await response.json();

                throw new Error(errorData.error || 'Ha ocurrido un error.');
            }
        },

        async create(author) {
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(author),
                });

                await this.handleErrorResponse(response);

                await getAll();
            } catch (e) {
                error.value = e.message;
                throw e;
            }
        },

        async modify(id, author) {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(author),
                });

                await this.handleErrorResponse(response);

                await getAll();
            } catch (e) {
                error.value = e.message;
                throw e;
            }
        },

        async remove(id) {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                });

                await this.handleErrorResponse(response);

                await getAll();
            } catch (e) {
                error.value = e.message;
                throw e;
            }
        }
    };
}
