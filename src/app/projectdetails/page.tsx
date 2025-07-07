import Banner from "@/components/Banner"
import ProjectDetailsHero from "@/components/ProjectDetailsHero"
import RedesignCta from "@/components/RedesignCta"

const page = () => {
  return (
    <div>
      <Banner
        title="PROJECT DETAILS"
        subtitle="PROJECT DETAILS"
        image="https://images.pexels.com/photos/25565686/pexels-photo-25565686.png"
      />
      <ProjectDetailsHero/>
      <RedesignCta/>
    </div>
  );
}
export default page