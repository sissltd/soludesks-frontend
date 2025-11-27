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
  const pages: (number | "...")[] = [];

  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // Always show 1–5
    pages.push(1, 2, 3, 4, 5);

    // Always show ellipsis unless we're at the end
    if (page < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="text-gray-600 disabled:text-gray-300"
      >
        Previous
      </button>

      {pages.map((num, i) =>
        num === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="h-9 w-9 flex items-center justify-center text-gray-400 text-lg"
          >
            …
          </span>
        ) : (
          <button
            key={num}
            onClick={() => onChange(num)}
            className={`h-9 w-9 rounded-full border flex items-center justify-center text-sm transition
              ${
                num === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-blue-300 text-blue-600 hover:bg-blue-50"
              }
            `}
          >
            {num}
          </button>
        )
      )}

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
