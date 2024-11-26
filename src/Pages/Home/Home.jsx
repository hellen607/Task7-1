import Card from "../../components/Card/Card.jsx";
import Companies from "../../components/Companies/Companies.jsx";
import Features from "../../components/Features/Features.jsx";
import FeedBack from "../../components/FeedBack/FeedBack.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import PricingPlans from "../../components/PricingPlans/PricingPlans.jsx";
import Video from "../../components/Video/Video.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Card />
      <Video />
      <PricingPlans />
      <FeedBack />
      <Features />
    </>
  );
}
