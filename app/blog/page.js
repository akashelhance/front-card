import BlogComponets from "@/components/BlogComponents";
import PageHeading from "@/components/PageHeading";

import Link from "next/link"

export default function FleshlightsPage(){
    return <>
         <div className="bg-indigo-50 pt-12">

    <PageHeading heading="Blog" desc="Fleshlights ipsum dolor sit amet, consectetur adipiscing elit."/>
    <BlogComponets/>
   
    </div>
    </>
}