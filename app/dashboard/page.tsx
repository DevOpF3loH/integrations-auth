import Navbar from "../components/Navbar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-blue-100">
      <Navbar />

      <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Integrations Portal Dashboard
        </h1>
      </div>
    </div>
  );
};

export default DashboardPage;
