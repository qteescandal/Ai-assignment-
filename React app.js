import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    setList([...list, { id: Date.now(), content: text }]);
    setText('');
  };

  const removeTask = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">My Tasks</h2>
        <div className="flex gap-2 mb-4">
          <input 
            className="border p-2 flex-grow rounded-lg"
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
        </div>
        <ul className="space-y-2">
          {list.map(item => (
            <li key={item.id} className="flex justify-between bg-gray-100 p-3 rounded">
              <span>{item.content}</span>
              <button onClick={() => removeTask(item.id)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
