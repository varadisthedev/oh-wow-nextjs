"use client";

export default function error({ error, reset }) {
  return (
    <div>
      <h1 className="font-bold text-red-600 text-3xl">
        error occured, this is erorr boundary
      </h1>

      <p>{error.message}</p>

      <button onClick={reset}>reload the UI</button>
    </div>
  );
}
