"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="text-gray-600 disabled:text-gray-300"
      >
        Previous
      </button>

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`h-9 w-9 rounded-full border flex items-center justify-center text-sm ${
            num === page
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="text-gray-600 disabled:text-gray-300"
      >
        Next
      </button>
    </div>
  );
}
