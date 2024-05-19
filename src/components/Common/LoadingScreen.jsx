import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex h-screen items-center justify-center">
      <button class="loader__btn">
        <div class="loader"></div>
        Loading
      </button>
    </div>
  );
}
