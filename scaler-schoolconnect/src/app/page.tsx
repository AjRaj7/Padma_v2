import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import SocialProofSection from '@/components/SocialProofSection'
import ProblemSolutionSection from '@/components/ProblemSolutionSection'
import LearningJourneySection from '@/components/LearningJourneySection'
import CoursesPreviewSection from '@/components/CoursesPreviewSection'
import SuccessStorySpotlight from '@/components/SuccessStorySpotlight'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import FinalConversionSection from '@/components/FinalConversionSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <ProblemSolutionSection />
      <LearningJourneySection />
      <CoursesPreviewSection />
      <SuccessStorySpotlight />
      <PricingPreviewSection />
      <FinalConversionSection />
    </main>
  )
}