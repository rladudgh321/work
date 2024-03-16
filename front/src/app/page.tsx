import Contact from './frontComponents/Contact';
import Grid from './frontComponents/Grid';
import Main_1_intro from './frontComponents/Main_1_intro';
import MainPage from './frontComponents/main';

export default function Home() {
  return (
    <div>
      <MainPage />
      <Main_1_intro />
      <Grid />
      <Contact />
    </div>
  );
}
