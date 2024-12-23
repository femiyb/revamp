"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_WORDPRESS_API_URL);
  }, []);

  return (
    <div className="p-4 text-center">
      </div>
  );
}
