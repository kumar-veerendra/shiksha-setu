import React from "react";

const TechDashboard = () => {
  const [teacher, setTeacher] = React.useState({
    name: "Mrs. Sharma",
    email: "sharma@school.com",
    profilePic: "",
  });

  const myClasses = [
    { course: "Math 10A", students: 30, time: "10:00 AM" },
    { course: "Science 10B", students: 28, time: "12:00 PM" },
  ];

  const assignmentsToGrade = [
    { title: "Math HW1", due: "2025-09-05" },
    { title: "Science Lab", due: "2025-09-06" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <main className="p-6 space-y-6">
        <div className="bg-green-100 p-6 rounded shadow">
          <h1 className="text-2xl font-bold">Welcome, {teacher.name}!</h1>
          <p>Here’s what’s happening in your classes today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* My Classes */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold text-lg mb-3">My Classes</h2>
            <ul>
              {myClasses.map((cls, idx) => (
                <li key={idx} className="py-1 border-b last:border-b-0">
                  {cls.course} - {cls.time} ({cls.students} students)
                </li>
              ))}
            </ul>
          </div>

          {/* Assignments to Grade */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold text-lg mb-3">Assignments to Grade</h2>
            <ul>
              {assignmentsToGrade.map((assign, idx) => (
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

export default TechDashboard;
