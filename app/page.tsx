import {
  AiEmployee,
  AiWorkforce,
  FinalCta,
  Hero,
  HowItWorks,
  Industries,
  Solutions,
  StatsBanner,
  TrustedBy,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <Solutions />
      <TrustedBy />
      <AiEmployee />
      <AiWorkforce />
      <Industries />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
