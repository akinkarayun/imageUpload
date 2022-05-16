import React from 'react';
import './App.css';

function App() {
  const [file, setFile] = React.useState<string>();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files !== null) {
      setFile(URL.createObjectURL(e?.target?.files[0]));
    }
  }
  function clearImage() {
    setFile('');
  }

  return (
    <div className="App">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <h2>Clear Image:</h2>
      <button title='Clear' onClick={clearImage} />
      <img className="Image" src={file} />

    </div>
  );
}

export default App;
