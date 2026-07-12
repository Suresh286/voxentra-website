import {
  AiEmployee,
  AiWorkforce,
  Hero,
  Industries,
  Solutions,
  TrustBar,
  TrustedBy,
} from "@/components/sections";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <TrustBar />
      <TrustedBy />
      <AiEmployee />
      <AiWorkforce />
      <Solutions />
      <Industries />
    </main>
  );
}
