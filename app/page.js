import Hero from "@/components/Hero";
import HeroSetion from "@/components/HeroSetion";
import HomeLatestCreditCardComponents from "@/components/HomeLatestCreditCardComponents";
import HomePartnersComponents from "@/components/HomePartnersComponents";
import HomePopularCreditCardComponents from "@/components/HomePopularCreditCardComponents";




const Home = async() => {

  // await connectDB();
  return (
  <>
<HeroSetion/>

<HomeLatestCreditCardComponents/>

<HomePopularCreditCardComponents/>

<HomePartnersComponents/>




  </>
  );
}

export default Home
