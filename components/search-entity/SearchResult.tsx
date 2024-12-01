import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface SearchResulrProps {
  id: string
  entityIdentifier: string
  entityType: string
  createdAt: Date
}
const SearchResult = (props: SearchResulrProps) => {
  const { id, entityIdentifier, entityType, createdAt }: SearchResulrProps =
    props
  return (
    <Card key={id}>
      <CardContent className="p-5">
        <div>
          <p>
            <span className="font-semibold">Type:</span> {entityType}
          </p>
          <p>
            <span className="font-semibold">Value</span> {entityIdentifier}
          </p>
          <p>
            <span className="font-semibold">First Reported on:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/report/${id}`} target="_blank">
          <Button>Show Report Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default SearchResult
