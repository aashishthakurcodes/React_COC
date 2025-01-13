import { useEffect, useState, useCallback, useRef } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(8);

  // For copying password to clipboard
  const passRef = useRef();
  const copyPass = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    alert(`Password Copied Successfully: ${password}`);
  }, [password]);

  // Generate password logic
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*(){}_+|?><[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [number, character, length]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <div className="w-full h-screen bg-gray-300 dark:bg-gray-900 dark:text-gray-200 text-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900  dark:bg-gray-400 dark:text-black shadow-xl rounded-xl p-6 space-y-6">
        {/* Title Section */}
        <div className="text-center dark:bg-black rounded-xl p-4 bg-gray-300 ">
          <h1 className="text-4xl font-bold text-black mb-4 dark:text-orange-400">Password Generator</h1>
          <img
            src="https://cdn.dribbble.com/users/936407/screenshots/2448430/untitled-3.gif"
            alt="Password Generator GIF"
            className="w-32 h-32 mx-auto rounded-full"
          />
        </div>

        {/* Password Display and Copy Button */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              readOnly
              value={password}
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md outline-none"
              placeholder="Generated Password"
              ref={passRef}
            />
            <button
              onClick={copyPass}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Password Length */}
          <div className="flex items-center justify-between">
            <label className="text-lg">Length: {length}</label>
            <input
              type="range"
              min={8}
              max={15}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-2/3"
            />
          </div>

          {/* Checkbox Options */}
          <div className="flex justify-between text-lg">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={number}
                onChange={() => setNumber((prev) => !prev)}
                className="w-5 h-5 accent-blue-500"
              />
              <label>Include Numbers</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={character}
                onChange={() => setCharacter((prev) => !prev)}
                className="w-5 h-5 accent-blue-500"
              />
              <label>Include Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
