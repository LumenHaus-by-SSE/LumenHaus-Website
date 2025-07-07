import Banner from '@/components/Banner'
import FoundedSection from '@/components/FoundedSection';
import ProgressSection from '@/components/ProgressSection';
import SuccessSection from '@/components/SuccessSection';
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner
        title="HISTORY"
        subtitle="HISTORY"
        image="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg"
      />
      <FoundedSection/>
      <ProgressSection/>
      <SuccessSection/>
    </div>
  );
}
export default page