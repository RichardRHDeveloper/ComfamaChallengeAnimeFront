import { DataApiAnimeInterface } from "./challengeAnime";

interface DataApiAnimeContext {
    dataApiAnime: DataApiAnimeInterface;
    updateDataApiAnime: (newData: DataApiAnimeInterface) => void;
}

export type {DataApiAnimeContext}