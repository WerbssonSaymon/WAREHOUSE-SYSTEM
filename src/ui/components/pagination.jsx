import React from 'react'
import { Button } from "@radix-ui/themes";

export default function pagination({totalPages, currentPage, handlePageChange}) {
  return (
    <div className="w-full flex justify-center mt-4 gap-1">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1 ? "!bg-orange-500 !text-white" : "!bg-gray-400"
            }`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
  )
}
