"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, School, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const PARTNERED_UNIVERSITIES = [
  {
    id: "humber",
    name: "Humber Polytechnic",
  },
];

export default function GetStartedPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>();
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false);
  const [showNonPartnerMessage, setShowNonPartnerMessage] = useState(false);
  const [showPartnerLogin, setShowPartnerLogin] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState<string>();
  const [showConnectXLogin, setShowConnectXLogin] = useState(false);

  const handleConnectXClick = () => {
    setSelectedOption("connectx");
    setShowSchoolDropdown(false);
    setShowNonPartnerMessage(false);
    setShowPartnerLogin(false);
    setShowConnectXLogin(true);
  };

  const handleCampusXClick = () => {
    setSelectedOption("campusx");
    setShowNonPartnerMessage(false);
    setShowConnectXLogin(false);
    setShowPartnerLogin(false);
    setShowSchoolDropdown(true);
  };

  const handleUniversityChange = (value: string) => {
    if (value === "Not Listed") {
      setShowPartnerLogin(false);
      setShowNonPartnerMessage(true);
    } else if (PARTNERED_UNIVERSITIES.some((uni) => uni.id === value)) {
      setSelectedUniversity(value);
      setShowNonPartnerMessage(false);
      setShowPartnerLogin(true);
    }
  };

  return (
    <div className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Get Started with ElevateGrad
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the option that best fits your needs and start your journey
          towards career success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="animate-slide-in-left">
          <Card
            className={`h-full cursor-pointer transition-all hover:shadow-lg ${
              selectedOption === "campusx" ? "ring-2 ring-primary" : ""
            }`}
            onClick={handleCampusXClick}
          >
            <Link href="#select-university">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" />
                  CampusX
                </CardTitle>
                <CardDescription>
                  For students from partnered universities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access exclusive opportunities, resources, and events
                  available through your university&apos;s partnership.
                </p>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCampusXClick();
                  }}
                >
                  Select CampusX
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>

        <div className="animate-slide-in-right">
          <Card
            className={`h-full cursor-pointer transition-all hover:shadow-lg ${
              selectedOption === "connectx" ? "ring-2 ring-primary" : ""
            }`}
            onClick={handleConnectXClick}
          >
            <Link href="#select-role">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  ConnectX
                </CardTitle>
                <CardDescription>
                  Open to all students for networking & career opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with professionals, access career resources, and
                  discover opportunities regardless of your university.
                </p>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleConnectXClick();
                  }}
                >
                  Select ConnectX
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>

      {showSchoolDropdown && (
        <div
          id="select-university"
          className="mt-8 w-full max-w-md animate-fade-in"
        >
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold">Select Your University</h2>
            <p className="text-sm text-muted-foreground">
              Choose your university to continue with CampusX
            </p>
          </div>

          <Select onValueChange={handleUniversityChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your university" />
            </SelectTrigger>
            <SelectContent>
              {PARTNERED_UNIVERSITIES.map((uni) => (
                <SelectItem key={uni.id} value={uni.id}>
                  {uni.name}
                </SelectItem>
              ))}
              <SelectItem value="Not Listed">Not Listed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {showNonPartnerMessage && (
        <div className="mt-8 p-6 bg-muted rounded-lg w-full max-w-md text-center animate-fade-in">
          <h3 className="text-lg font-medium mb-2">
            Your university is not yet partnered with us
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Ask your university to partner with ElevateGrad to access exclusive
            CampusX features.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            In the meantime, you can still access our platform through ConnectX.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <Link href={"/request-demo"}>
              <Button size="lg" variant="outline">
                Request a Demo
              </Button>
            </Link>
            <Button size="lg" variant="primary" onClick={handleConnectXClick}>
              Continue with ConnectX
            </Button>
          </div>
        </div>
      )}

      {showPartnerLogin && (
        <div className="mt-8 w-full max-w-md animate-fade-in text-center">
          <Button
            size="lg"
            variant="primary"
            className="w-full"
            onClick={() =>
              router.push(
                `https://campusx.elevategrad.com?school=${selectedUniversity}`
              )
            }
          >
            Login with{" "}
            {
              PARTNERED_UNIVERSITIES.find(
                (uni) => uni.id === selectedUniversity
              )?.name
            }
          </Button>
        </div>
      )}

      {showConnectXLogin && (
        <div
          id="select-role"
          className="mt-8 w-full max-w-md animate-fade-in text-center flex flex-col md:flex-row gap-4"
        >
          <Button
            size="lg"
            variant="primary"
            className="w-full"
            onClick={() =>
              router.push("https://connectx.elevategrad.com?role=student")
            }
          >
            Continue as Student
          </Button>
          <Button
            size="lg"
            variant="primary"
            className="w-full"
            onClick={() =>
              router.push("https://connectx.elevategrad.com?role=recruiter")
            }
          >
            Continue as Recruiter
          </Button>
        </div>
      )}
    </div>
  );
}
