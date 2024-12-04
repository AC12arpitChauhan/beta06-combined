import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");
	const [audioSrc, setAudioSrc] = useState(null); // New state for audio source

	// Define hardcoded responses with paths to audio files
	const hardcodedResponses = {
		"Generate some Beat": {
			audioPath: "public/better-day-186374.mp3",
		},
		"Make it faster": {
			audioPath: "public/midnight-quirk-255361.mp3",
		},
		"Make it slower": {
			audioPath: "public/Infinite(Melodic Waves).mp3",
		},
		"Make a Beat using Drum": {
			audioPath: "public/afro-dancehall-drum-loop-115bpm-247563",
		},
		"Modify  Living House Beat by merging it with this": {
			audioPath: "public/Modern Melody(Melody Craft).mp3",
		},
		"make it lofi": {
			audioPath: "public/Daydreams-chosic.com_.mp3",
		},
	};

	const delayPara = (index, nextWord) => {
		setTimeout(function () {
			setResultData((prev) => prev + nextWord);
		}, 10 * index);
	};

	const newChat = () => {
		setLoading(false);
		setShowResults(false);
	};

	const onSent = async (prompt) => {
		setResultData("");
		setLoading(true);
		setShowResults(true);

		let response, audioPath;

		// Use the hardcoded responses instead of calling runChat
		if (hardcodedResponses[prompt]) {
			response = hardcodedResponses[prompt].response;
			audioPath = hardcodedResponses[prompt].audioPath;
		} else {
			audioPath = "public/Chillwave flow(Harmonic Flow).mp3"; // No audio path if the command isn't recognized
		}

		setRecentPrompt(prompt);
		setPrevPrompts((prev) => [...prev, prompt]);

		try {
			let responseArray = response.split("**");
			let newResponse = "";
			for (let i = 0; i < responseArray.length; i++) {
				if (i === 0 || i % 2 !== 1) {
					newResponse += responseArray[i];
				} else {
					newResponse += "<b>" + responseArray[i] + "</b>";
				}
			}
			let newResponse2 = newResponse.split("*").join("<br/>");
			let newResponseArray = newResponse2.split("");
			for (let i = 0; i < newResponseArray.length; i++) {
				const nextWord = newResponseArray[i];
				delayPara(i, nextWord + "");
			}
		} catch (error) {
			console.error("Error while running chat:", error);
		} finally {
			setLoading(false);
			setInput("");
		}

		// Set the audio source if an audio path is available
		if (audioPath) {
			setAudioSrc(audioPath);
		}
	};

	const contextValue = {
		prevPrompts,
		setPrevPrompts,
		onSent,
		setRecentPrompt,
		recentPrompt,
		input,
		setInput,
		showResults,
		loading,
		resultData,
		newChat,
		audioSrc, // Add audioSrc to context
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;