"use client"

import React, { useState } from "react"
import axios from "axios"
import { AlertCircle, Info, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchResult from "@/components/search-entity/SearchResult"

const SearchPage = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<ResultObject[]>([])
  const [loading, setLoading] = useState(false)

  // Example educational tips
  const tips = [
    "Be cautious of unsolicited emails or calls asking for personal information.",
    "Avoid clicking on suspicious links from unknown sources.",
    "Verify website URLs before entering sensitive data.",
  ]
  interface ResultObject {
    id: string
    entityIdentifier: string
    entityType: string
    createdAt: Date
  }

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    const { data } = await axios.get(`/api/search?query=${query}`)
    setLoading(false)
    if (data.length) {
      setResults(data)
    }
  }

  return (
    <div className="min-h-screen px-4 py-10 md:px-20">
      <div className="mx-auto p-6 lg:max-w-3xl">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Search for Fraud Information
        </h1>

        {/* Search Bar */}
        <div className="mb-6 flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search by phone, email, or website"
            className="flex-1"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            className="flex items-center"
            disabled={loading}
          >
            <Search className="mr-2 size-4" />
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>

        {/* Search Results */}
        <div>
          {loading && <p className="text-center ">Loading...</p>}
          {!loading && results.length === 0 && (
            <div className="text-center text-gray-600">
              <AlertCircle className="mx-auto mb-4 size-10 text-yellow-400" />
              <p>No results found for your query.</p>
              <p className="mt-2">
                Help others by reporting suspicious activity!
              </p>
            </div>
          )}

          {!loading &&
            results.map((result, index) => {
              return (
                <SearchResult
                  id={result?.id}
                  entityIdentifier={result?.entityIdentifier}
                  entityType={result?.entityType}
                  createdAt={result?.createdAt}
                  key={index}
                />
              )
            })}
        </div>

        {/* Educational Content */}
        <div className="mt-8">
          <h2 className="mb-4 flex items-center text-xl font-semibold ">
            <Info className="mr-2 size-5" />
            Fraud Prevention Tips
          </h2>
          <ul className="list-inside list-disc space-y-2 ">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
