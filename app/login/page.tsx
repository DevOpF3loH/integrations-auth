"use client";
import Image from "next/image";
import LoginButton from "@/app/components/LoginButton";
import ImageCarousel from "@/app/components/ImageCarousel";

const carouselImages = [
  "/sbk-retail-image-1.png",
  "/sbk-retail-image-3.png",
  "/sbk-retail-image-4.png",
  "/sbk-retail-image-6.png",
];

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-auto lg:w-1/2">
        <ImageCarousel images={carouselImages} />
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/70 via-blue-700/40 to-orange-500/20" />

        <div className="relative z-10 flex items-center gap-2 p-6 lg:p-8">
          <Image
            src="/stanbic-bank-logo-white.png"
            alt="Stanbic Bank"
            width={198}
            height={54}
            className="h-8 w-auto object-contain lg:h-10"
          />
        </div>

        <div className="relative z-10 px-6 lg:px-8">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Welcome
            <br />
            to
            <br />
            <span className="text-blue-300">Integrations</span>
            <br />
            Portal
          </h1>
        </div>
      </div>

      <div className="flex w-full flex-1 items-center justify-center bg-linear-to-br from-white via-blue-50 to-blue-100 px-6 py-12 lg:w-1/2 lg:px-8">
        <div className="w-full max-w-sm rounded-2xl border border-blue-100 bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome to your online integrations portal
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Sign in securely using your Microsoft account below.
          </p>

          <div className="mt-6">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
