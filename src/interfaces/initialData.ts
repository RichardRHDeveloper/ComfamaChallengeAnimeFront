import { DataApiAnimeInterface } from "./challengeAnime";

const initialDataApiAnime: DataApiAnimeInterface = {
  pagination: {
    last_visible_page: 0,
    has_next_page: false,
    current_page: 0,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  },
  data: [],
};

export { initialDataApiAnime };
