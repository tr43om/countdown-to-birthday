import Title from "./components/Title";
import Countdown from "./components/Countdown";
import SocialLinks from "./components/SocialLinks";

import { TimeLeftProvider } from "./components/TimeLeftContext";

const App = () => {
  return (
    <>
      <TimeLeftProvider>
        <header className="header">
          <Title />
        </header>
        <main className="main">
          <Countdown />
        </main>
        <footer className="footer">
          <SocialLinks />
        </footer>
      </TimeLeftProvider>
    </>
  );
};

export default App;
