import Blog from "@/components/home/Blog"
import { Community } from "@/components/home/Community"
import { Contact } from "@/components/home/Contact"
import Features from "@/components/home/Features"
import Hero from "@/components/home/Hero"
import SearchFraud from "@/components/home/SearchFraud"

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchFraud />
      <Features />
      <Blog />
      <Community />
      <Contact />
    </div>
  )
}
