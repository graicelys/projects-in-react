import { useState } from "react";
import confetti from "canvas-confetti";

const useFileHandling = () => {
    const [files, setFiles] = useState([]);
    const [winnerFile, setWinnerFile] = useState(null);

    const handleFilesAdded = (newFiles) => {
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    };

    const pickRandomWinner = () => {
        if (files.length > 0) {
          const randomIndex = Math.floor(Math.random() * files.length);
          setWinnerFile(files[randomIndex]);
          confetti();
        }
    };

    const resetFfles = () => {
        setFiles([]);
        setWinnerFile(null);
    };

    return {
        files,
        winnerFile,
        handleFilesAdded,
        pickRandomWinner,
        resetFfles,
    }
}

export default useFileHandling;