import Banner from "@/components/Banner"
import PricingHero from "@/components/PricingHero"
import Price from "@/components/Price"

const page = () => {
  return (
    <div>
      <Banner
        title="PRICING"
        subtitle="PRICING"
        image="https://images.pexels.com/photos/7614614/pexels-photo-7614614.jpeg"
      />
      <PricingHero/>
      <Price/>
    </div>
  );
}
export default page