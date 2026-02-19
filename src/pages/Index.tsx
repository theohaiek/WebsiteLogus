import {
  HeroSection,
  ProblemsSection,
  SolutionSection,
  StepsSection,
  BenefitsSection,
  DifferentialsSection,
  FounderSection,
  CTASection,
  FooterSection,
} from '@/components/LandingSections';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <StepsSection />
      <BenefitsSection />
      <DifferentialsSection />
      <FounderSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
