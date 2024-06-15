import FleshLightsComponets from "@/components/FleshLightComponents"
import PageHeading from "@/components/PageHeading";

import Link from "next/link"

export default function FleshlightsPage(){
    return <>
         <div className="bg-rose-100 pt-12">

    <PageHeading heading="Fleshlights" desc="Fleshlights ipsum dolor sit amet, consectetur adipiscing elit."/>

    <FleshLightsComponets/>
    </div>
    </>
}