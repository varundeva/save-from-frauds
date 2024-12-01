"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
})

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values

    const mailToLink = `mailto:savefromfrauds@freesv.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`

    window.location.href = mailToLink
  }

  return (
    <div className="py-6 sm:py-12">
      <section className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <div className="mb-4">
            <h2 className="text-3xl font-bold md:text-4xl">Connect With Us</h2>
          </div>
          <p className="text-muted-foreground lg:w-5/6">
            At Save From Frauds, our mission is to raise awareness and help
            individuals stay safe from fraud in the digital world. We provide
            information and resources to help you recognize and avoid scams.
          </p>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            If you have any questions, need assistance, or would like to provide
            suggestions or feedback, we&apos;re happy to hear from you! Our team
            is dedicated to supporting you with educational resources and
            guidance on identifying and avoiding online fraud.
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-1 flex gap-2">
                <Mail />
                <div className="font-bold">Mail US</div>
              </div>
              <div>savefromfrauds[@]freesv.com</div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Card className="bg-muted/60 dark:bg-card">
            <CardHeader className="text-2xl text-primary"> </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex w-full flex-col gap-4"
                >
                  <div className="flex flex-col gap-8 md:flex-row">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jhon" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email-address@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Subject"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Your message..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button className="mt-4">Send message</Button>
                </form>
              </Form>
            </CardContent>

            <CardFooter></CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
