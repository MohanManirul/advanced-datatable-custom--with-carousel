import React, { useState, useMemo } from "react";

const data = Array.from({ length: 50 }, (_, i) => ({
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `01700000${String(i + 1).padStart(2, "0")}`
}));

const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState(null);

  // Filter data by search term
  const filteredData = useMemo(() => {
    console.log("Filtering data with search term:", searchTerm);

    const result = data.filter((item) =>
      Object.values(item).some((val) =>
        val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    console.log("Filtered result:", result);

    return result;
  }, [data, searchTerm]);

  // Sort filtered data
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (typeof aVal === "string") return aVal.toLowerCase().localeCompare(bVal.toLowerCase());

      if (typeof aVal === "number") return aVal - bVal;
      return 0;
    });

    return sortConfig.direction === "asc" ? sorted : sorted.reverse();
  }, [filteredData, sortConfig]);

  // Pagination calculations
  const totalPages = Math.ceil(sortedData.length / pageSize);
  console.log("Total Pages:", totalPages);

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = currentPage * pageSize;

  console.log("Current Page:", currentPage);
  console.log("Slicing from:", startIdx, "to:", endIdx);

  const currentData = sortedData.slice(startIdx, endIdx);
  console.log("Current Page Data:", currentData);

  // Handlers
  const handleSort = (key) => {
    if (sortConfig?.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc"
      });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  const handleEdit = (row) => {
    alert(`Edit: ${row.name}`);
  };

  const handleDelete = (row) => {
    alert(`Delete: ${row.name}`);
  };

  // When pageSize or searchTerm changes, reset to page 1
  React.useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, searchTerm]);

  return (
    <div className="data-table">
      <h1>Advanced DataTable</h1>
      {/* Controls */}
      <div className="search-container">
        {/* Search Input @layer components class */}
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Rows per page dropdown */}
        <div>
          <label className="rows-per-page-label">Rows per page:</label>
          <select
            value={pageSize} // follow here
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="rows-per-page-select"
          >
            {[5, 10, 25, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table  utility class @layer utilities */}
      <div className="table-wrapper">
        <table className="table-layout">
          <thead className="bg-gray-100">
            <tr>
              {["name", "email", "phone"].map((key) => (
                <th
                  key={key}
                  onClick={() => handleSort(key)}
                  className="table-head-layout"
                >
                  <div className="table-head-name">
                    <span className="capitalize">{key}</span>
                    {sortConfig?.key === key && (
                      <span>
                        {sortConfig.direction === "asc" ? "🔼" : "🔽"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              <th className="actions">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 border-t">
                  <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{row.email}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{row.phone}</td>
                  <td className="action-buttons">
                    <button
                      onClick={() => handleEdit(row)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(row)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-700 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
