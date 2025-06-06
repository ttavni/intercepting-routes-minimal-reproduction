"use client";

import { useRouter } from "next/navigation";
import { use, useCallback, useEffect, useRef } from "react";

export default function ArticlePageModal({
  params,
}: {
  params: Promise<{ y: string; z: string }>;
}) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      const dialog = dialogRef.current;
      if (dialog && e.target === dialog) {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
    }
  }, []);

  const { y, z } = use(params);

  return (
    <dialog
      ref={dialogRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg max-w-md w-full bg-white dark:bg-gray-800 backdrop:bg-black/50"
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Modal Content</h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">y:</span> {y}
          </p>
          <p>
            <span className="font-semibold">z:</span> {z}
          </p>
        </div>
      </div>
    </dialog>
  );
}
