import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Calendar,
  Users,
  Briefcase,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-teal/50 to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6 animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Elevate Your Campus Experience with ElevateGrad
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Stay connected, engage with student communities, and unlock
                career opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href={"/get-started"}>
                  <Button size="lg" variant="default">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href={"/request-demo"}>
                  <Button size="lg" variant="outline">
                    Request a Demo
                  </Button>
                </Link>
              </div>
              {/* <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                    >
                      <Image
                        src={`/placeholder.svg?height=32&width=32`}
                        alt="User"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by <span className="font-medium">10,000+</span>{" "}
                  students and faculty
                </p>
              </div> */}
            </div>
            <div className="relative overflow-hidden rounded-xl bg-muted md:order-last animate-slide-in-right">
              <Image
                src="./landing_hero.jpeg"
                alt="Students collaborating"
                width={1280}
                height={720}
                className="object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section id="features" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore ElevateGrad
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              A powerful platform designed to enhance student life and career
              growth.
            </p>
          </div>

          <Tabs defaultValue="campusx" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full h-full grid-cols-2 mb-12 animate-fade-in">
              <TabsTrigger value="campusx" className="text-lg py-3">
                CampusX
              </TabsTrigger>
              <TabsTrigger value="connectx" className="text-lg py-3">
                ConnectX
              </TabsTrigger>
            </TabsList>
            <TabsContent value="campusx" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-left">
                  <Calendar className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Campus Events</h3>
                  <p className="text-muted-foreground">
                    Discover, RSVP, and participate in university events
                    seamlessly.
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-fade-in">
                  <MessageSquare className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Campus Announcements</h3>
                  <p className="text-muted-foreground">
                    Stay updated with real-time announcements and important
                    campus news.
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-right">
                  <Users className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Student Clubs</h3>
                  <p className="text-muted-foreground">
                    Engage with student organizations and grow your network on
                    campus.
                  </p>
                </div>
              </div>
              <div className="mt-12 rounded-xl overflow-hidden border shadow-lg animate-fade-in">
                <Image
                  src="./landing_campusX.jpeg"
                  alt="CampusX Dashboard"
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="connectx" className="space-y-4">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-slide-in-left">
                  <Users className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Professional Networking</h3>
                  <p className="text-muted-foreground">
                    Connect with alumni, mentors, and industry experts to build
                    your career.
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md animate-fade-in">
                  <Briefcase className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">Internships & Jobs</h3>
                  <p className="text-muted-foreground">
                    Get matched with top internship and job opportunities
                    tailored to your skills.
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md  animate-slide-in-right">
                  <CheckCircle className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold">
                    Exclusive Career Opportunities
                  </h3>
                  <p className="text-muted-foreground">
                    Access hand-picked career advancements and leadership
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="mt-12 rounded-xl overflow-hidden border shadow-lg animate-fade-in">
                <Image
                  src="./landing_connectX.jpeg"
                  alt="ConnectX Dashboard"
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Engagement */}
      <section
        id="engagement"
        className="py-20 bg-gradient-to-b from-teal/50 to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A Well-Connected Student is More Likely to Stay
            </h2>
            <p className="max-w-6xl text-lg text-muted-foreground">
              ElevateGrad helps students build friendships early, keeping them
              engaged from offer to graduation and beyond.
            </p>
          </div>

          <div className="grid gap-12 md:gap-24">
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="order-2 md:order-1 flex flex-col gap-4 animate-slide-in-left">
                <h3 className="text-2xl font-bold">
                  A Significant Impact on Offerholder Conversion
                </h3>
                <p className="text-muted-foreground">
                  ElevateGrad ensures students connect with peers before they
                  even arrive, making them more confident, excited, and likely
                  to enroll. By fostering a supportive network early on,
                  universities see higher conversion and retention rates.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-xl overflow-hidden border shadow-md animate-slide-in-right">
                <Image
                  src="./landing_engagement_1.jpeg"
                  alt="Student Connections"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="rounded-xl overflow-hidden border shadow-md animate-slide-in-left">
                <Image
                  src="./landing_engagement_2.jpeg"
                  alt="Belonging and Engagement"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 animate-slide-in-right">
                <h3 className="text-2xl font-bold">
                  Creating a Sense of Belonging
                </h3>
                <p className="text-muted-foreground">
                  ElevateGrad helps students build friendships and feel
                  connected before they even arrive on campus. As the most
                  vibrant student community in higher education, it fosters
                  meaningful conversations, creating a welcoming environment
                  from day one.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="order-2 md:order-1 flex flex-col gap-4 animate-slide-in-left">
                <h3 className="text-2xl font-bold">
                  Community Engagement with Zero Effort
                </h3>
                <p className="text-muted-foreground">
                  ElevateGrad is a student-led community that requires zero
                  administrative effort from universities. We provide all the
                  tools and services necessary to create an engaging student
                  experience without additional workload for university staff.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-xl overflow-hidden border shadow-md animate-slide-in-right">
                <Image
                  src="./landing_engagement_3.jpeg"
                  alt="Effortless Community Engagement"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="rounded-xl overflow-hidden border shadow-md animate-slide-in-left">
                <Image
                  src="./landing_engagement_4.jpeg"
                  alt="Career Growth and Internships"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 animate-slide-in-right">
                <h3 className="text-2xl font-bold">
                  Seamless Access to Jobs & Internships
                </h3>
                <p className="text-muted-foreground">
                  ElevateGrad connects students with exclusive job and
                  internship opportunities tailored to their skills and
                  interests. Through AI-powered recommendations and direct
                  connections with recruiters, students can land their first
                  internship or full-time role with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section
        id="testimonials"
        className="py-20 bg-background animate-fade-in"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Testimonials & Success Stories
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              See what students, faculty, and employers have to say about
              ElevateGrad
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                role: "Computer Science Student",
                quote:
                  "ElevateGrad completely transformed my campus experience. I've connected with amazing peers, found my dream internship, and built a professional network before even graduating!",
              },
              {
                name: "Dr. Sarah Williams",
                role: "Faculty, Business School",
                quote:
                  "As a professor, ElevateGrad has made it incredibly easy to engage with students, share resources, and organize events. The platform has significantly improved student participation.",
              },
              {
                name: "Michael Chen",
                role: "Recruiter, Tech Company",
                quote:
                  "ElevateGrad gives us access to exceptional student talent. The platform's matching algorithm helps us find candidates who are perfect fits for our company culture and requirements.",
              },
              {
                name: "Priya Patel",
                role: "Engineering Student",
                quote:
                  "I landed my dream internship through ElevateGrad! The platform's career resources and networking opportunities opened doors I didn't even know existed.",
              },
              {
                name: "James Wilson",
                role: "Alumni Relations Director",
                quote:
                  "ElevateGrad has revolutionized how we connect current students with alumni. The engagement metrics have increased by 200% since implementing the platform.",
              },
              {
                name: "Emma Rodriguez",
                role: "Student Club President",
                quote:
                  "Managing our club has never been easier. ElevateGrad helps us organize events, communicate with members, and collaborate with other campus organizations seamlessly.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-lg border p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground rounded-xl">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Elevate Your Campus Experience?
              </h2>
              <p className="text-xl opacity-90">
                Join thousands of students, faculty, and employers who are
                already benefiting from ElevateGrad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href={"/get-started"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-secondary-foreground hover:text-primary-foreground"
                  >
                    Join Now - It's Free!
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href={"/request-demo"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <div className="flex flex-col items-center gap-2 rounded-lg bg-primary-foreground/10 p-6 text-center">
                <h3 className="text-4xl font-bold">10k+</h3>
                <p>Active Students</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg bg-primary-foreground/10 p-6 text-center">
                <h3 className="text-4xl font-bold">50+</h3>
                <p>Universities</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg bg-primary-foreground/10 p-6 text-center">
                <h3 className="text-4xl font-bold">200+</h3>
                <p>Employer Partners</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg bg-primary-foreground/10 p-6 text-center">
                <h3 className="text-4xl font-bold">95%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Find answers to common questions about ElevateGrad
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How much does ElevateGrad cost for students?",
                  answer:
                    "ElevateGrad is completely free for students! We believe in making education and career resources accessible to all students. Universities and employers have premium plans with additional features.",
                },
                {
                  question: "How does ElevateGrad protect user privacy?",
                  answer:
                    "We take privacy seriously. ElevateGrad complies with GDPR and FERPA regulations. Students have full control over their data and can choose what information to share with employers and other users.",
                },
                {
                  question:
                    "Can ElevateGrad integrate with our university's existing systems?",
                  answer:
                    "Yes! ElevateGrad offers seamless integration with popular LMS platforms, student information systems, and campus apps. Our team will work with your IT department to ensure a smooth implementation.",
                },
                {
                  question:
                    "How do employers connect with students on the platform?",
                  answer:
                    "Employers can create company profiles, post job opportunities, participate in virtual career fairs, and connect with students based on matching algorithms. Our platform ensures that students see opportunities that align with their skills and interests.",
                },
                {
                  question:
                    "Is ElevateGrad accessible to students with disabilities?",
                  answer:
                    "ElevateGrad is built with accessibility in mind and complies with WCAG 2.1 guidelines. We regularly audit our platform to ensure it's usable by everyone.",
                },
                {
                  question:
                    "How can I get started with ElevateGrad at my university?",
                  answer:
                    "Simply request a demo through our website, and our team will guide you through the implementation process. We offer comprehensive onboarding support to ensure a successful rollout at your institution.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
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
