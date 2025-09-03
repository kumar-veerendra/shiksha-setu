import React from "react";

function StudClassroom({ classes }) {
  return (
    <div className="p-5 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-green-600">👨‍🎓 Student Panel</h2>

      {classes.length === 0 ? (
        <p className="text-gray-500">No live classes yet. Ask your teacher to create one!</p>
      ) : (
        <ul className="space-y-3">
          {classes.map((cls) => (
            <li key={cls.id} className="flex justify-between items-center p-3 border rounded">
              <div>
                <p className="font-medium">{cls.name}</p>
                <p className="text-sm text-gray-500">Code: {cls.id}</p>
              </div>
              <a
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
              >
                Join
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudClassroom;
