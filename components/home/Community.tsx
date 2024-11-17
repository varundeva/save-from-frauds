import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons"

export const Community = () => {
    return (
        <div className="py-3 ">
            <hr className="border-secondary" />
            <div className="container py-4 sm:py-5">
                <div className="lg:w-[60%] mx-auto">
                    <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
                        <CardHeader>
                            <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                                <Icons.discord />
                                <div>
                                    Ready to join this Community?

                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
                            Join our vibrant Discord community! Connect, share, and grow with
                            like-minded enthusiasts. Click to dive in! 🚀
                        </CardContent>

                        <CardFooter>
                            <Button asChild>
                                <a href="https://discord.com/" target="_blank">
                                    Join Discord
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <hr className="border-secondary" />
        </div>
    );
};