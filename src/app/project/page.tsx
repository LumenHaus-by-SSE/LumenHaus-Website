import Banner from "@/components/Banner"
import ProjectHero from "@/components/ProjectHero"
import TestimonialsAndPartners from "@/components/TestimonialsAndPartners";

const page = () => {
  return (
    <div>
      <Banner
        title="PROJECT"
        subtitle="PROJECT"
        image="https://images.pexels.com/photos/22743858/pexels-photo-22743858.jpeg"
      />
      <ProjectHero/>
      <TestimonialsAndPartners/>
    </div>
  );
}
export default page