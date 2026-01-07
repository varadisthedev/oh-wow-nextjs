"use client";

export default function error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-red-500">
        this is root directory error
      </h1>
      <p>something went wrong!</p>

      <p>{error.message}</p>
      <button onClick={reset}>try again</button>
    </div>
  );
}
