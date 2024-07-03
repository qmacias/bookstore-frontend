import { ref, onMounted } from 'vue';

export function useAuthorApi() {

    const items = ref([]);
    const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/authors`;

    const getAllAuthors = async () => {
        items.value = await fetch(API_URL)
            .then((response) => response.json());
    };

    onMounted(getAllAuthors)

    const addAuthor = async (author) => {
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(author),
        });

        await getAllAuthors();
    };

    const deleteAuthor = async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        await getAllAuthors();
    };

    return { authors: items, addAuthor, deleteAuthor };
}
