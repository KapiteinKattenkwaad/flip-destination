import { ref } from 'vue';
import type { Destination, Destinations } from '../types/Destination';

export function useDestination() {
  const destinations = ref<Destination[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const API_URL = "https://happy-cori-e2a104.netlify.app/search"
  const PER_PAGE = 24

  const fetchDestinations = async (searchQuery: string) => {
    loading.value = true;
    error.value = null;
    const searchQueryFilter = searchQuery.toLowerCase()

    try {
      const res = await fetch(`${API_URL}?per_page=${PER_PAGE}&query=${searchQueryFilter}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data: Destinations = await res.json();
      destinations.value = data.photos
    } catch (err) {
      error.value = (err as Error).message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  };

  return {
    destinations,
    loading,
    error,
    fetchDestinations,
  };
}
