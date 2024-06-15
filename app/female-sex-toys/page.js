import FemaleSexToysComponets from "@/components/FemaleSexToysComponents";
import PageHeading from "@/components/PageHeading";

export default function FemaleToysPage(){
    return <>
       <div className="bg-rose-100 pt-12">
       <PageHeading heading="Female Sex Toys" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
       <FemaleSexToysComponets/>
       </div>
    </>
}