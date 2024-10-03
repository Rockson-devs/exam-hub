// /app/components/Sidebar.tsx

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-400 p-4">
      <h2 className="font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="/exams">Exams</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
