import Bable from 'components/Bable/Bable';
import Slider from 'components/Slider/Slider';
import { FaHandPointRight } from 'react-icons/fa';
// import Header from 'components/Header/Header';

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <h2>
          Let's talk <FaHandPointRight />
        </h2>
        <a
          href="mailto: hannamois135@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/hanna-moiseienko/"
          target="_blank"
          rel="noreferrer"
        >
          Linkdin
        </a>
        {/* <a href="https://github.com/HannaMois" target="_blank" rel="noreferrer">
        GitHub
      </a> */}
        <a href="https://t.me/MoiseienkoHanna" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>
      <div>
        <Slider />
        {/* <Bable /> */}
      </div>
    </div>
  );
};

export default HomePage;
