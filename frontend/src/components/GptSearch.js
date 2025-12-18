import { BG_URL_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div
      className="min-h-screen  w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG_URL_IMG})`,
      }}
    >
      {/* overlay */}
      <div className="min-h-screen bg-black/60">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
