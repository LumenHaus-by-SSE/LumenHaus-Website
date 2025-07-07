import Banner from "@/components/Banner"
import Categories from "@/components/Categories";
import InteriorDesignHero from "@/components/InteriorDesignHero"
import Services from "@/components/Services"
import TestimonialsAndPartners from "@/components/TestimonialsAndPartners";

const page = () => {
  return (
    <div>
      <Banner
        title="SERVICE"
        subtitle="SERVICE"
        image="https://images.pexels.com/photos/18470961/pexels-photo-18470961.jpeg"
      />
      <InteriorDesignHero/>
      <Services/>
      <Categories/>
      <TestimonialsAndPartners/>
    </div>
  );
}
export default page