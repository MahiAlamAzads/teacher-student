import HomePageActionButtons from "../../components/HomePageActionButtons";
import HeroHeader from "../../components/HeroHeader";

const HomePage = () => {
  return (
    <div className="min-h-screen mx-2">
      <div className="max-w-7xl mx-auto bg-white/90 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
        <HeroHeader />
        <HomePageActionButtons />
      </div>
    </div>
  );
};

export default HomePage;
