"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarIcon,
  CheckCircle,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  universityName: z
    .string()
    .min(2, { message: "Please enter your university name" }),
  jobTitle: z.string().min(2, { message: "Please enter your job title" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  helpType: z.string({ required_error: "Please select an option" }),
  demoDate: z.date({ required_error: "Please select a date" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function RequestDemo() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      universityName: "",
      jobTitle: "",
      email: "",
      phone: "",
      helpType: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 5000);
  }
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-teal/50 to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6 animate-fade-in mx-auto text-center max-w-6xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Enhance Student Engagement & Career Success with ElevateGrad
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Empower your students with seamless campus engagement and career
              opportunities. Request a demo to see how ElevateGrad can transform
              your university experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              <Link href="#demo-form">
                <Button size="lg" variant="default">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Partner with ElevateGrad?
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Join leading universities in transforming student engagement and
              career success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-left">
              <CheckCircle className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Increase Student Engagement</h3>
              <p className="text-muted-foreground">
                Strengthen connections from admission to arrival, creating a
                vibrant campus community.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-fade-in">
              <CheckCircle className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Streamline Communication</h3>
              <p className="text-muted-foreground">
                One platform for announcements, clubs, and events, simplifying
                campus communication.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-fade-in">
              <CheckCircle className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Career Success for Students</h3>
              <p className="text-muted-foreground">
                AI-powered job matching, networking, and employer partnerships
                to boost graduate outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-right">
              <CheckCircle className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Effortless Integration</h3>
              <p className="text-muted-foreground">
                Works seamlessly with existing LMS & university systems with
                minimal IT overhead.
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 bg-teal/20 rounded-xl p-8 animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">10,000+</h3>
              <p className="text-muted-foreground">Active Students</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">50+</h3>
              <p className="text-muted-foreground">Universities</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">1M+</h3>
              <p className="text-muted-foreground">
                Messages Exchanged Per Month
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Demo Form Section */}
      <section
        id="demo-form"
        className="py-20 bg-gradient-to-b from-teal/50 to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Request a Demo
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              See how ElevateGrad can transform your university's student
              engagement and career services
            </p>
          </div>

          {isSubmitted ? (
            <Card className="max-w-2xl mx-auto p-8 text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-4">
                Your demo request has been submitted successfully. One of our
                team members will contact you shortly to confirm your demo.
              </p>
            </Card>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto space-y-6 animate-fade-in bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="universityName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University Name</FormLabel>
                        <FormControl>
                          <Input placeholder="State University" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Director of Student Affairs"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john.doe@university.edu"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="helpType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How Can We Help?</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="campus">
                              Campus Engagement
                            </SelectItem>
                            <SelectItem value="career">
                              Career Services
                            </SelectItem>
                            <SelectItem value="both">Both</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="demoDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Demo Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your specific needs or questions"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="w-full"
                >
                  Request a Demo
                </Button>
              </form>
            </Form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Find answers to common questions about ElevateGrad
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How does ElevateGrad integrate with our university's systems?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ElevateGrad offers seamless integration with most popular LMS
                  platforms including Canvas, Blackboard, and Moodle. Our team
                  provides full support during the integration process, which
                  typically takes 2-4 weeks. We use secure API connections and
                  can work with SSO authentication systems to provide a unified
                  experience for your students and staff.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Is there a setup fee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ElevateGrad operates on a subscription model based on your
                  institution's size and needs. While there is no separate setup
                  fee, our implementation package includes configuration,
                  integration, and training to ensure a smooth launch. Our team
                  will provide a detailed quote after understanding your
                  specific requirements during the demo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What security and compliance standards do you follow?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ElevateGrad takes security and privacy seriously. We are GDPR
                  compliant, FERPA compliant for educational institutions in the
                  US, and maintain SOC 2 Type II certification. All data is
                  encrypted both in transit and at rest, and we perform regular
                  security audits and penetration testing to ensure the highest
                  level of protection for your institution's data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How long does implementation typically take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The typical implementation timeline is 4-6 weeks from contract
                  signing to launch. This includes system integration, data
                  migration, customization, and staff training. We assign a
                  dedicated implementation manager to guide you through each
                  step of the process and ensure a successful rollout to your
                  campus community.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can we customize the platform to match our university
                  branding?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ElevateGrad offers extensive customization options to align
                  with your institution's branding. You can customize colors,
                  logos, terminology, and even certain workflows to create a
                  cohesive experience that feels like an extension of your
                  university's digital ecosystem. Our enterprise plans also
                  offer additional customization capabilities for unique
                  requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <p className="text-muted-foreground">Still have questions?</p>
              <Link href={"/contact-support"}>
                <Button variant="default">Contact Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
