import { AnimeContextProvider } from "./contexts/AnimeContext";
import Home from './componets/pages/home/Home';
import { FC } from "react";

const App: FC = () => {
  return (
    <AnimeContextProvider>
      <Home/>
    </AnimeContextProvider>
  )
}

export default App