"use client";

import { useState, useMemo } from "react";
import { patents, Patent } from "@/data/patents";
import { PatentCard } from "./PatentCard";
import { Search, Calendar } from "lucide-react";

export function PatentGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  // Extract unique years from grant dates and sort them
  const years = useMemo(() => {
    const yearSet = new Set(
      patents.map((p) => {
        const date = p.grantDate;
        // Extract year from various date formats
        const yearMatch = date.match(/\d{4}/);
        return yearMatch ? yearMatch[0] : null;
      }).filter(Boolean)
    );
    return ["All", ...Array.from(yearSet).sort((a, b) => b.localeCompare(a))];
  }, []);

  const filteredPatents = patents.filter((patent) => {
    const matchesSearch =
      patent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patent.inventors.some((inv) =>
        inv.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      patent.abstract.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear =
      selectedYear === "All" || patent.grantDate.includes(selectedYear);

    return matchesSearch && matchesYear;
  });

  return (
    <section className="py-20 px-4 relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            SKUAST-K Patent Portfolio
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Explore our comprehensive collection of {patents.length} innovative
            patents
          </p>
        </div>

        {/* Search and Filter */}
        <div className="glass-card p-6 mb-8">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search patents by title, inventor, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white transition-all"
            />
          </div>

          {/* Year Filter - Horizontal chips below search */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">Filter by Year:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedYear === year
                      ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg shadow-sky-500/30"
                      : "bg-white text-gray-900 hover:bg-white/80"
                  }`}
                >
                  {year === "All" ? "All Years" : year}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-gray-200/20 text-sm text-gray-100">
            Showing{" "}
            <span className="font-semibold text-sky-300">
              {filteredPatents.length}
            </span>{" "}
            of <span className="font-semibold">{patents.length}</span> patents
            {selectedYear !== "All" && (
              <span className="text-gray-200"> from {selectedYear}</span>
            )}
          </div>
        </div>

        {/* Patent Cards - Auto-expanding with scroll */}
        <div className="space-y-6">
          {filteredPatents.map((patent, index) => (
            <PatentCard key={patent.id} patent={patent} delay={index * 50} />
          ))}
        </div>

        {/* No results message */}
        {filteredPatents.length === 0 && (
          <div className="glass-card p-12 text-center">
            <p className="text-gray-100 text-lg">
              No patents found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
