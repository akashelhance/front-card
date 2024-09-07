import CreditCardIssuerComponents from "@/components/CreditCardIssuerComponents";
import PageHeading from "@/components/PageHeading";


async function fetchData() {
    const res = await fetch(`http://localhost:8000/api/card-issuers/` , { cache: 'no-cache', next: { revalidate: 0 }});
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const final = await res.json();
  
    return final
  }
  


export default async function CreditCardIssuerPage() {

    const { results: cardIssuers } = await fetchData();


    return <>
 <div className="bg-indigo-50 pt-12">
            <PageHeading heading="Credit Card Issuers" desc="The credit card industry is among the most promising." />
            <p className="text-base md:text-lg lg:text-xl text-center px-4 md:px-8 lg:px-16 mt-4">
                Credit card issuers play a significant role in the financial industry, providing customers with credit cards that offer various rewards, benefits, and financial management tools.
            </p>
            <CreditCardIssuerComponents issuers={cardIssuers} />
        </div>

    </>
}