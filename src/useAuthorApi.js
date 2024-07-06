import { ref, onMounted } from 'vue';

export function useAuthorApi() {
    const error = ref(null);
    const success = ref(false);

    const authors = ref([]);
    const API_URL = import.meta.env.VITE_BACKEND_API_URL;

    const clearStatus = () => {
        error.value = null;
        success.value = false;
    }

    const markAsDone = () => {
        success.value = true;
    }

    const getAll = async () => {
        authors.value = await fetch(API_URL)
            .then((response) => response.json());
    }

    onMounted(getAll);

    return {
        error,
        success,
        clearStatus,

        authors,

        async handleErrorResponse(response) {
            if (!response.ok) {
                const errorData = await response.json();

                throw new Error(errorData.error || 'Ha ocurrido un error.');
            }

            markAsDone()
        },

        async create(author) {
            try {
                clearStatus()

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
                clearStatus()

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
                clearStatus()

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
