"use client";
import { Container } from "@/components/shared";
import NoResultsFound from "@/components/shared/no-results-found";
import SearchCard from "@/components/shared/search-card";
import { SearchData } from "@/data/search-data";
import { SearchDataType } from "@/types";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchDataType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(SearchData);
      setLoading(false);
    }, 2000);
  }, []);

  const clearInput = useCallback(() => {
    setQuery("");
    setItems([])
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <div className=" w-3/4">
        <div className=" flex items-center justify-between border gap-2 ">
          <Image
            src={"/icon/search-icon.svg"}
            width={24}
            height={24}
            alt="icon"
            className="ml-2"
          />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" outline-none w-full py-2"
          />
          {query && (
            <button onClick={clearInput} className=" py-2 px-3 ">
              ✕
            </button>
          )}
        </div>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div>
            <div className="flex items-center justify-start gap-2 py-3">
              <p className="text-gray-500 font-medium text-sm">Results:</p>
              <p className="text-black font-medium text-sm">
                {filteredItems.length}
              </p>
            </div>
            {filteredItems.length > 0 ? (
              <div className=" flex flex-col gap-4">
                {filteredItems.map((item) => (
                  <SearchCard data={item} key={item.id} query={query} />
                ))}
              </div>
            ) : (
              <NoResultsFound />
            )}
          </div>
        )}
      </div>
    </Container>
  );
}

export default SearchPage;
