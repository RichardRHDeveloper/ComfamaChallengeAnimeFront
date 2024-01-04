interface ItemsInterface {
    count: number;
    total: number;
    per_page: number;
}

interface PaginationInterface {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: ItemsInterface;
}

interface ImageTypeInterface {
    image_url: string;
}

interface ImagesInterface {
    jpg: ImageTypeInterface;
}

interface AnimeDataInterface {
    title: string;
    score: number;
    images: ImagesInterface;
    recommendation: string;
}

interface DataApiAnimeInterface {
    pagination: PaginationInterface;
    data: AnimeDataInterface[];
}

export type { DataApiAnimeInterface, AnimeDataInterface, PaginationInterface };
