import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <>
            <h1>Hello World</h1>

            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />

            <button
                onClick={() => {
                    setNameList(prev => [...prev, name]);
                    setName("");

                }}
            >
                Kaydet
            </button>

            <button
                 onClick={() => {
                    setNameList(prev => prev.filter((item, i) => i !== selectedIndex));
                    setSelectedIndex(null);

                }}
            >
                Sil
            </button>

            <ul>
                {nameList.map((val, index) => (
                    <li key={index}  onClick={() => setSelectedIndex(index)}style={{
                        backgroundColor: selectedIndex === index ? "#D3D3D3" : "transparent" }}>
                        {val}</li>

                ))}
            </ul>
        </>
    );
}

export default App;
