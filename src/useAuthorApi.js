import { ref, onMounted } from 'vue';

export function useAuthorApi() {
    const error = ref(null);
    const authors = ref([]);
    const API_URL = import.meta.env.VITE_BACKEND_API_URL;

    const handleCmdMethodResponse = async (response) => {
        if (!response.ok) {
            const errorData = await response.json();

            throw new Error(errorData.error || 'Ha ocurrido un error.');
        }
    };

    const getAll = async () => {
        authors.value = await fetch(API_URL)
            .then((response) => response.json());
    }

    onMounted(getAll);

    return {
        error,
        authors,

        async create(author) {
            try {
                error.value = null;

                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(author),
                });

                await handleCmdMethodResponse(response);

                await getAll();
            } catch (e) {
                error.value = e.message;
                throw e;
            }
        },

        async modify(id, author) {
            try {
                error.value = null;

                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(author),
                });

                await handleCmdMethodResponse(response);

                await getAll();
            } catch (e) {
                error.value = e.message;
                throw e;
            }
        },

        async remove(id) {
            try {
                error.value = null;

                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                });

                await handleCmdMethodResponse(response);

                await getAll();
            } catch (e) {
                error.value = e.message;
                throw e;
            }
        }
    };
}
