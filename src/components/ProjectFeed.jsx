import { Button } from "@kobalte/core";
import { useNavigate } from '@solidjs/router';

const ProjectFeed = ({ projects = [] }) => {
  console.log('projects', projects);
  const navigate = useNavigate();
  return (
    <section class="project-feed">
    {projects && projects.length
      ? projects.map((project = {}) => {
          const { title, description, image, slug } = project;
          return (
            <section class={`project-card project-${slug}`}>
              <div class="project-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Button.Root class="button">Read Case Study</Button.Root>
              </div>
              <div class="project-card-image">
                <img src={image} />
              </div>
            </section>
            );
        })
      : <h3>No Projects Found.</h3>
    }
    </section>
  )
  
};

export default ProjectFeed;
