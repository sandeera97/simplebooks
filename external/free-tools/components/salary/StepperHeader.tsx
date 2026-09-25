import { Check } from "lucide-react";

interface StepperHeaderProps {
  currentStep: number;
}

const StepperHeader = ({ currentStep }: StepperHeaderProps) => {
  const steps = [
    { id: 1, name: "Information" },
    { id: 2, name: "Basic Salary" },
    { id: 3, name: "Allowances" },
    { id: 4, name: "Result" },
  ];

  return (
    <div className="mb-10 px-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center flex-1 text-center"
            >
              <div
                className={`flex items-center justify-center rounded-full 
                  ${isCompleted ? "bg-primary text-white" : ""}
                  ${isActive ? "bg-sidebar-highlight text-white shadow-lg" : ""}
                  ${
                    !isCompleted && !isActive ? "bg-gray-300 text-gray-600" : ""
                  }
                  transition-colors duration-300
                  w-10 h-10 text-lg font-semibold`}
              >
                {isCompleted ? <Check className="h-6 w-6" /> : step.id}
              </div>
              <p
                className={`mt-3 text-sm font-semibold 
                  ${isActive ? "text-black" : "text-gray-500"} hidden sm:block`}
              >
                {step.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="relative mt-6 max-w-4xl mx-auto h-1 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-1 bg-sidebar-highlight rounded-full transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default StepperHeader;
