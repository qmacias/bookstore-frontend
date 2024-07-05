import { ref, onMounted } from 'vue';

export function useAuthorApi() {
    const authors = ref([]);
    const API_URL = import.meta.env.VITE_BACKEND_API_URL;

    const getAll = async () => {
        authors.value = await fetch(API_URL)
            .then((response) => response.json());
    }

    onMounted(getAll);

    return {
        authors,

        async create(author) {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(author),
            });

            await getAll();
        },

        async modify(id, author) {
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(author),
            });

            await getAll();
        },

        async remove(id) {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            await getAll();
        }
    };
}
