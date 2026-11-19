import { auth } from "@/auth";
import { Suspense } from "react";
import Navbar from "../components/Navbar";

const ProfileCard = async () => {
  const session = await auth();
  const firstInitial = session?.user?.name?.charAt(0).toUpperCase() ?? "";
  const secondInitial =
    session?.user?.name?.split(" ")[1]?.charAt(0).toUpperCase() ?? "";

  return (
    <div className="w-full max-w-sm rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-xl sm:p-8">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-900 text-2xl font-bold text-white">
        {firstInitial}
        {secondInitial}
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-lg font-semibold text-gray-900">
          {session?.user?.name}
        </p>
        <p className="text-sm text-gray-500">{session?.user?.email}</p>
      </div>
    </div>
  );
};

const ProfileCardFallback = () => (
  <div className="w-full max-w-sm animate-pulse rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-xl sm:p-8">
    <div className="mx-auto h-20 w-20 rounded-full bg-blue-100" />
    <div className="mt-4 space-y-2">
      <div className="mx-auto h-4 w-32 rounded bg-gray-200" />
      <div className="mx-auto h-3 w-40 rounded bg-gray-200" />
    </div>
  </div>
);

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-blue-100">
      <Navbar />

      <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
        <Suspense fallback={<ProfileCardFallback />}>
          <ProfileCard />
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;
