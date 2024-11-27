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
    <Card key={id} className="mb-4">
      <CardContent>
        <p className="">
          <span className="font-semibold">Type:</span> {entityType}
        </p>
        <p className="mt-1 ">
          <span className="font-semibold">Value</span> {entityIdentifier}
        </p>
        <p className="mt-1 ">
          <span className="font-semibold">First Reported on:</span>{" "}
          {new Date(createdAt).toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="link" size="sm">
          View Full Details
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SearchResult
