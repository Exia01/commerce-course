import Directory from '../../components/directory/directory.component';

//Styled component
import { HomePageContainer } from './homepage.styles';

// //No longer needed
import './homepage.styles.scss';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
