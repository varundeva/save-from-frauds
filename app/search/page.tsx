import React from "react"
import { headers } from "next/headers"
import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import SearchResult from "@/components/search-entity/SearchResult"

interface ResultObject {
  _id: string
  entityIdentifier: string
  entityType: string
  createdAt: string
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query?: string }
}) => {
  const query = searchParams.query || "" // Get query from URL parameters
  let results: ResultObject[] = []

  if (query) {
    try {
      const baseUrl = `${headers().get("x-forwarded-proto")}://${headers().get("host")}`
      // Fetch data from the API
      const res = await fetch(`${baseUrl}/api/search?query=${query}`)
      if (!res.ok) {
        throw new Error("Failed to fetch data")
      }
      results = await res.json()
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto lg:max-w-3xl">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Search for Fraud Information
        </h1>

        {/* Search Bar */}
        <div className="mb-6 flex items-center space-x-2">
          <form method="get" action="/search" className="flex w-full">
            <input
              type="text"
              name="query"
              placeholder="Search by phone, email, or website"
              className="flex-1 rounded border px-4 py-2"
              defaultValue={query}
            />
            <Button
              type="submit"
              className="ml-2 rounded  px-4 py-2 align-middle"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Search Results */}
        <div>
          {!query && <p className="text-center">Please enter a search query</p>}
          {query && results.length === 0 && (
            <div className="text-center text-gray-600">
              <AlertCircle className="mx-auto mb-4 size-10 text-yellow-400" />
              <p>No results found for your query.</p>
              <p className="mt-2">
                Help others by reporting suspicious activity!
              </p>
            </div>
          )}
          {query &&
            results.map((result) => (
              <SearchResult
                id={result._id}
                entityIdentifier={result.entityIdentifier}
                entityType={result.entityType}
                createdAt={result.createdAt}
                key={result._id}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
