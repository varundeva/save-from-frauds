import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Community = () => {
  return (
    <div className="py-3 ">
      <hr className="border-secondary" />
      <div className="py-4 sm:py-5">
        <div className="mx-auto lg:w-3/5">
          <Card className="flex flex-col items-center  justify-center border-none bg-background p-0 text-center shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-col items-center text-4xl font-bold md:text-5xl">
                <Icons.discord />
                <div>Ready to join this Community?</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-muted-foreground lg:w-4/5">
              Join our vibrant Discord community! Connect, share, and grow with
              like-minded enthusiasts. Click to dive in! 🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://discord.gg/RxkX7B6xQH" target="_blank">
                  Join Discord
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </div>
  )
}
