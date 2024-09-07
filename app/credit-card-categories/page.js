import CreditCardCategoryComponents from "@/components/CreditCardCategoryComponents";
import PageHeading from "@/components/PageHeading";

async function fetchCategories() {
    const res = await fetch(`http://localhost:8000/api/card-categories/`, { cache: 'no-cache', next: { revalidate: 0 }});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const final = await res.json();
    return final.results;
}

export default async function CreditCardCategoryPage() {
    const categories = await fetchCategories();

    return (
        <div className="bg-indigo-50 pt-12">
            <PageHeading heading="Credit Card Categories" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <CreditCardCategoryComponents categories={categories} />
        </div>
    );
}
