"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

const PaginationControls = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const previousClickHandler = () => {
    if (Number(page) === 2) {
      router.push(`/`);
    } else {
      router.push(`/?page=${Number(page) - 1}`);
    }
  };

  const nextClickHandler = () => {
    router.push(`/?page=${Number(page) + 1}`);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="join grid grid-cols-2">
        <button
          onClick={() => previousClickHandler()}
          className={clsx("join-item btn btn-outline")}
        >
          Précédent
        </button>
        <button
          onClick={() => nextClickHandler()}
          className={clsx("join-item btn btn-outline")}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
