import Layout from './components/Layout';
import Splash from './components/Splash';
import Me from './assets/Ben-Adams_NoBG.png';
import { siteMetadata } from './data/metadata';
import './index.scss';

const App = () => {
  const { name, title, subTitle } = siteMetadata || {};
  return (
    <Layout container={false} className="portfolio-home">
      <Splash
        header={<><strong>{name}</strong><br/>{title}</>}
        subHeader={subTitle}
        asideImage={Me}
      />
    </Layout>
  );
};

export default App;
