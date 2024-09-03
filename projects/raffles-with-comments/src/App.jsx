import './App.css'
import Upload from './components/Upload';
import ImageGallery from './components/ImageGallery';
import useFileHandling from './hooks/useFileHandling';



const App = () => {
  const {
    files,
    winnerFile,
    handleFilesAdded,
    pickRandomWinner,
    resetFfles,
  } = useFileHandling()
  
  

  return (
    <div className="App">
      <h1>Sorteo 📚 </h1>
      <Upload onFilesAdded={handleFilesAdded} />
      <ImageGallery files={files} />
      <button onClick={pickRandomWinner}>Sortear Ganador 🗳 </button>
      <button onClick={resetFfles}> Reiniciar Sorteo 🔁 </button>
      {winnerFile && (
        <div>
          <h2>Ganador 🏆: </h2>
          <img
          src={URL.createObjectURL(winnerFile)}
          style={{ width: '200px', height: '200px', margin: '10px' }}
          />
      </div>
    )}
  </div>
  )
};

export default App;
