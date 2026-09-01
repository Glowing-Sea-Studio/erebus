export interface StepperProps { currentStep: number; steps: string[]; }

export const Stepper = ({ currentStep, steps }: StepperProps) => (
  <ol className="erb-stepper">
    {steps.map((step, i) => (
      <li key={i} className="erb-stepper__step" aria-current={currentStep === i ? 'step' : undefined}>
        <span>{i + 1}</span> <span>{step}</span>
      </li>
    ))}
  </ol>
);
