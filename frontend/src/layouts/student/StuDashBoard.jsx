import React from "react";


const StuDashboard = () => {
  const upcomingClasses = [
    { course: "Math", time: "10:00 AM" },
    { course: "Science", time: "12:00 PM" },
  ];

  const assignments = [
    { title: "Math HW1", due: "2025-09-05" },
    { title: "Science Lab", due: "2025-09-06" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <main className="p-6 space-y-6">
        {/* Welcome Banner */}
        <div className="bg-blue-100 p-6 rounded shadow">
          <h1 className="text-2xl font-bold">Welcome, Student!</h1>
          <p>Here’s what’s happening today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Classes */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold text-lg mb-3">Upcoming Classes</h2>
            <ul>
              {upcomingClasses.map((cls, idx) => (
                <li key={idx} className="py-1 border-b last:border-b-0">
                  {cls.course} - {cls.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Assignments */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold text-lg mb-3">Pending Assignments</h2>
            <ul>
              {assignments.map((assign, idx) => (
                <li key={idx} className="py-1 border-b last:border-b-0">
                  {assign.title} - Due {assign.due}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StuDashboard;
