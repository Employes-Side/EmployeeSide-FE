import React from "react";
import { Button, Card, CardBody, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ResourceCardProps {
  title: string;
  icon: string;
  color: string;
  isNew?: boolean;
}

function ResourceCard({ title, icon, color, isNew = false }: ResourceCardProps) {
  return (
    <Card className="border-none h-full" shadow="sm">
      <CardBody className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center ${color}`}>
          <Icon icon={icon} className="text-2xl" />
        </div>
        <h3 className="text-md font-medium">{title}</h3>
        {isNew && (
          <Badge color="primary" variant="flat" size="sm" className="absolute top-2 right-2">
            New
          </Badge>
        )}
      </CardBody>
    </Card>
  );
}

export function HeroSection() {
  const resources = [
    { title: "Financial Literacy", icon: "lucide:bar-chart-2", color: "bg-primary-100 text-primary-500 dark:bg-primary-900/30" },
    { title: "Benefits Guide", icon: "lucide:heart", color: "bg-danger-100 text-danger-500 dark:bg-danger-900/30", isNew: true },
    { title: "Retirement Planning", icon: "lucide:piggy-bank", color: "bg-success-100 text-success-500 dark:bg-success-900/30" },
    { title: "Tax Essentials", icon: "lucide:receipt", color: "bg-warning-100 text-warning-500 dark:bg-warning-900/30" },
    { title: "Career Growth", icon: "lucide:trending-up", color: "bg-secondary-100 text-secondary-500 dark:bg-secondary-900/30" },
    { title: "Workplace Rights", icon: "lucide:shield", color: "bg-primary-100 text-primary-500 dark:bg-primary-900/30" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.1]"></div>
      <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <Badge color="primary" variant="flat" className="mb-4">
              Employee Knowledge Platform
            </Badge>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Empower your 
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                {" "}employees{" "}
              </span>
              with financial knowledge
            </h1>
            <p className="mb-8 text-xl text-default-600">
              Comprehensive resources on finance, benefits, and workplace essentials for new employees to thrive in their careers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button 
                color="primary" 
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="bordered" 
                size="lg"
                startContent={<Icon icon="lucide:play" />}
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="h-8 w-8 rounded-full border-2 border-white bg-default-100 dark:border-default-800"
                  ></div>
                ))}
              </div>
              <p className="text-default-600">
                <span className="font-semibold">500+</span> companies trust us
              </p>
            </div>
          </div>
          <div className="w-full max-w-lg lg:max-w-xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {resources.map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title} 
                  icon={resource.icon} 
                  color={resource.color}
                  isNew={resource.isNew}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}