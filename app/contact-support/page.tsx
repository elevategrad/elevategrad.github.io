"use client";

import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Send,
  Upload,
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
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  role: z.string({ required_error: "Please select your role" }),
  subject: z.string().min(2, { message: "Please enter a subject" }),
  message: z.string().min(10, { message: "Please enter your message" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSupport() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      subject: "",
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
              Need Help? We're Here for You!
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Whether you're a student, university admin, or employer, our team
              is ready to assist you. Check out our FAQs or reach out directly
              for support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              <Link href={"#faq"} className="animate-slide-in-left">
                <Button size="lg" variant="outline">
                  <Search className="mr-2 h-5 w-5" /> Search FAQs
                </Button>
              </Link>
              <Link href={"#contact-form"} className="animate-slide-in-right">
                <Button size="lg" variant="default">
                  <Send className="mr-2 h-5 w-5" /> Submit a Support Request
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Support Topics */}
      <section id="faq" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Common Support Topics
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Find quick answers to frequently asked questions
            </p>
          </div>

          <Tabs
            defaultValue="students"
            className="max-w-4xl mx-auto animate-fade-in"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="universities">Universities</TabsTrigger>
              <TabsTrigger value="employers">Employers</TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How do I sign up?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To sign up, visit our homepage and click the "Sign Up"
                    button. You'll need to use your university email address to
                    create an account. Follow the verification steps, and you'll
                    be ready to explore ElevateGrad!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    I forgot my password—how do I reset it?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    On the login page, click "Forgot Password" and enter your
                    email address. We'll send you a password reset link that
                    will be valid for 24 hours. Click the link and follow the
                    instructions to create a new password.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How do I find job opportunities on ConnectX?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After logging in, navigate to the "Careers" tab in your
                    dashboard. You can browse all available opportunities or use
                    filters to narrow down by industry, location, or job type.
                    Our AI-powered system will also recommend positions based on
                    your profile and preferences.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="universities" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How do I onboard my university?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To onboard your university, request for a demo with our team
                    using the form on our website. After the demo, we'll provide
                    you with an implementation plan and guide you through the
                    integration process, which typically takes 4-6 weeks.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How does ElevateGrad integrate with our systems?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    ElevateGrad offers seamless integration with most popular
                    LMS platforms including Canvas, Blackboard, and Moodle. We
                    use secure API connections and can work with SSO
                    authentication systems to provide a unified experience for
                    your students and staff.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How do I send announcements through CampusX?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    In your admin dashboard, navigate to the "Communications"
                    section and select "Announcements." You can create a new
                    announcement, select your target audience (all students,
                    specific departments, etc.), and schedule when it should be
                    sent. You can also track engagement metrics after sending.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="employers" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How can I post a job listing?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After logging into your employer dashboard, click on "Post a
                    Job" and fill out the job details form. You can specify
                    requirements, responsibilities, and preferred skills. Once
                    submitted, your job will be visible to qualified students
                    and recent graduates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How does the AI-powered job matching work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our AI system analyzes both job requirements and student
                    profiles to create optimal matches. It considers skills,
                    experience, education, and career goals to suggest
                    candidates who are most likely to succeed in the role. This
                    saves time in the recruitment process and improves hiring
                    outcomes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How do I access candidate profiles?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    In your employer dashboard, navigate to "Candidates" to view
                    profiles of students who have applied to your positions. You
                    can also access the "Talent Pool" to proactively search for
                    potential candidates based on skills, education, and other
                    criteria.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Support Form */}
      <section
        id="contact-form"
        className="py-20 bg-gradient-to-b from-teal/50 to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Support
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Can't find what you're looking for? Send us a message and we'll
              get back to you.
            </p>
          </div>

          {isSubmitted ? (
            <Card className="max-w-2xl mx-auto p-8 text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Thanks for reaching out!
              </h3>
              <p className="text-muted-foreground mb-4">
                Our team will get back to you within 24 hours.
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john.doe@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Your Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="university">University</SelectItem>
                          <SelectItem value="employer">Employer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the subject of your inquiry"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your issue or question in detail"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mb-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border-dashed"
                  >
                    <Upload className="h-4 w-4" />
                    Attach a File (Optional)
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    For screenshots or documents. Max file size: 10MB
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          )}
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section id="alternative" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Alternative Ways to Reach Us
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* <Card className="flex flex-col gap-2 p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-left">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Live Chat</h3>
              <p className="text-muted-foreground flex-grow">
                Chat with our support team in real-time for immediate
                assistance.
              </p>
              <Button className="mt-4" variant="default">
                Start Chat
              </Button>
            </Card> */}

            <Card className="flex flex-col gap-2 p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-left">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Email Support</h3>
              <div className="text-muted-foreground space-y-2 text-sm flex-grow">
                <p>General: contact@elevategrad.com</p>
                <p>Technical: tech@elevategrad.com</p>
                <p>Partnerships: partner@elevategrad.com</p>
              </div>
            </Card>

            <Card className="flex flex-col gap-2 p-6 shadow-sm transition-all hover:shadow-md animate-fade-in">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Phone Support</h3>
              <p className="text-muted-foreground flex-grow">
                For urgent matters, call us at: +1 (XXX) XXX-XXXX
              </p>
              <p className="text-xs text-muted-foreground">
                Available Monday-Friday, <br />
                9am-5pm EST
              </p>
            </Card>

            <Card className="flex flex-col gap-2 p-6 shadow-sm transition-all hover:shadow-md animate-fade-in">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Instagram</h3>
              <p className="text-muted-foreground flex-grow">
                Reach us on Instagram for quick answers to common questions.
              </p>
              <Link
                href={"https://www.instagram.com/elevategrad"}
                target="_blank"
              >
                <Button variant="outline" className="mt-4">
                  @elevategrad
                </Button>
              </Link>
            </Card>

            <Card className="flex flex-col gap-2 p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-right">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <p className="text-muted-foreground flex-grow">
                Reach us on LinkedIn for quick updates and announcements.
              </p>
              <Link
                href={"https://www.linkedin.com/company/elevategrad"}
                target="_blank"
              >
                <Button variant="outline" className="mt-4">
                  @elevategrad
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 bg-teal/20 rounded-xl p-8 animate-fade-in max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">24 hrs</h3>
              <p className="text-muted-foreground">Average Response Time</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">98%</h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">24/7</h3>
              <p className="text-muted-foreground">Support Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Still Need Help?
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
              If you need further assistance, don't hesitate to contact us. Our
              team is ready to help!
            </p>
            <Button
              size="lg"
              variant="default"
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Submit a Support Request
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
