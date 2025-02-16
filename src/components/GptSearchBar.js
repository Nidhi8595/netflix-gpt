import fetchGeminiResponse from "../utils/gemini";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);

    const searchText = useRef(null);
    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };
    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResponse = await fetchGeminiResponse(gptQuery);

        if (!gptResponse) {
            console.error("Error fetching Gemini response");
            return;
        }

        console.log(gptResponse);

        const gptMovies = gptResponse.split(",").map(movie => movie.trim());

        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        );
    };
    const startVoiceSearch = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
    
        if (!SpeechRecognition) {
            alert("Your browser does not support Speech Recognition. Try using Chrome.");
            return;
        }
    
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US"; 
        recognition.continuous = false; 
        recognition.interimResults = false;
    
        recognition.onstart = () => {
            console.log("Listening...");
        };
    
        recognition.onspeechend = () => {
            console.log("Speech ended. Restarting recognition...");
            recognition.stop(); 
        };
    
        recognition.onresult = (event) => {
            const voiceQuery = event.results[0][0].transcript;
            console.log("Voice Input: ", voiceQuery);
            searchText.current.value = voiceQuery; 
            handleGptSearchClick(); 
        };
    
        recognition.onerror = (event) => {
            console.error("Speech Recognition Error: ", event.error);
            if (event.error === "network") {
                alert("Network error! Please check your internet connection.");
            } else if (event.error === "not-allowed") {
                alert("Microphone access is blocked. Enable it in browser settings.");
            }
        };
    
        recognition.start();
    };
    

    return (
        <div className="pt-[10%] flex justify-center">
            <form
                className=" w-2/3 bg-black grid grid-cols-12"
                onSubmit={(e) => e.preventDefault()}
            >
                <input ref={searchText}
                    type="text"
                    className=" p-4 m-4 col-span-9"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="col-span-2 m-4 py-2 px-4 bg-red-600 text-white rounded-lg"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
                <button
                    className="col-span-1 m-4 p-2 text-xl bg-gray-500 text-white rounded-full hover:text-2xl"
                    onClick={startVoiceSearch}
                >
                    🎤
                </button>

            </form>
        </div>
    );
};
export default GptSearchBar;