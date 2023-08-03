import { Button } from "@kobalte/core";
import { useNavigate } from '@solidjs/router';

const Splash = ({
  header,
  subHeader,
  callToAction = { label: 'Do Something', to: '/' },
  asideImage
}) => {
  const navigate = useNavigate();
  return (
    <section class='splash'>
      <div class="container">
        <h1>{header}</h1>
        <p>{subHeader}</p>
        {callToAction && (
          <Button.Root
            class="button button-primary"
            onClick={()=>navigate(callToAction.to)} 
          >
            {callToAction.label}
          </Button.Root>
        )}
      </div>
      <div class="aside-image">
        <img src={asideImage} />
      </div>
    </section>
  );
};

export default Splash;
