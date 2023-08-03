import Layout from './components/Layout';
import Splash from './components/Splash';
import ProjectFeed from './components/ProjectFeed';

import Me from './assets/Ben-Adams_NoBG.png';
import { siteMetadata } from './data/metadata';
import './index.scss';

import GeospatialImage from './assets/projects/geospatial/Geospatial-Search.jpg';
import OceanographyImage from './assets/projects/oceanography/ocean_preview.jpeg';
import EarthScienceImage from './assets/projects/earth-science/earth-science.jpg';
import { TbMessages } from 'solid-icons/tb'

const Home = () => {
  const projects = [
    {
      title: 'Geospatial Application with serious capabilities!',
      description: "A React application, built on Node & AWS, packed with a bunch of unique & powerful features. I've operated as the lead FE Engineer & UI/UX designer since 2021, shipping numerous vital features.",
      slug: 'geospatial',
      tags: ['Frontend Engineering', 'UI/UX Design', 'CI/CD', 'React', 'JavaScript'],
      image: GeospatialImage
    },
    {
      title: 'Full UI/UX Overhaul for an Ocean Sciences Org',
      description: "Designing & building out a new design & website templates in code, for a well respected Oceanographic institute.",
      slug: 'oceanography',
      tags: ['Frontend Engineering', 'UI/UX Design'],
      image: OceanographyImage
    },
    {
      title: 'NASA + USGS Website & Data Portal Overhaul',
      description: "Designing & developing a completely new website, including a Django backed CMS & a powerful new data search portal.",
      slug: 'earth-science',
      tags: ['Frontend Engineering', 'UI/UX Design', 'JavaScript', 'Django'],
      image: EarthScienceImage
    }
  ]
  const { name, jobTitle, subTitle } = siteMetadata || {};
  return (
    <Layout container={false} className="my-work-home">
      <Splash
        header={<><strong>{name}</strong><br/>{jobTitle}</>}
        subHeader={subTitle}
        asideImage={Me}
      />
      <div class="container">
        <ProjectFeed projects={projects} />
      </div>
      
      <section class="experience">
        <div class="container">
        <TbMessages size={60} color="white" />
          <h2>Wanna chat?</h2>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
