import { createContext, FC, ReactNode, useState } from "react"
import { DataApiAnimeInterface } from "../interfaces/challengeAnime"
import { initialDataApiAnime } from "../interfaces/initialData"
import { DataApiAnimeContext } from "../interfaces/contexts"

const AnimeContext = createContext<DataApiAnimeContext | undefined>(undefined)

const AnimeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [dataAnimeContext, setDataAnimeContext] = useState<DataApiAnimeInterface>(initialDataApiAnime)

  const updateDataAnime = (newData: DataApiAnimeInterface): void => {
    setDataAnimeContext(newData);
  };

  const contextValue: DataApiAnimeContext = {
    dataApiAnime: dataAnimeContext,
    updateDataApiAnime: updateDataAnime,
  };

  return (
    <AnimeContext.Provider value={contextValue}>{children}</AnimeContext.Provider>
  )
}


export { AnimeContext, AnimeContextProvider };