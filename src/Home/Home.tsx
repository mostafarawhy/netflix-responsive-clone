import WatchOnTv from "./WatchOnTv";
import WatchOnDevice from "./WatchOnDevice";
import WatchEveryWhere from "./WatchEveryWhere";
import KidsCard from "./KidsCard";
import DescriptionAndGettingStarted from "./DescriptionAndGettingStarted";

const Home = () => {
  return (
    <>
      <DescriptionAndGettingStarted />
      <WatchOnTv />
      <WatchOnDevice />
      <WatchEveryWhere />
      <KidsCard />
    </>
  );
};

export default Home;
