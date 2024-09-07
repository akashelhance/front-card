
async function fetchPopularCreditCards() {
    const res = await fetch('http://localhost:8000/api/popular-credit-cards/', { cache: 'no-cache', next: { revalidate: 0 } });

    if (!res.ok) {
        throw new Error('Failed to fetch popular credit cards');
    }

    const data = await res.json();
    return data.results;
}

export default async function HomePopularCreditCardComponents() {
    const creditCards = await fetchPopularCreditCards();

    return (
        <div className="bg-indigo-50 flex flex-col items-center py-8 px-4">
            <h1 className="text-2xl text-indigo-900 sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                Most Popular Credit Cards in India
            </h1>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {creditCards.slice(0, 3).map((card) => (
                        <div
                            key={card.id}
                            className="flex flex-col items-center rounded-lg p-4 shadow-lg relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={card.card_image || 'default-image-url.jpg'}
                                alt={card.card_image_alt_text || card.name}
                                className="w-full h-auto max-w-full rounded-lg mb-4"
                            />
                            <p className="text-normal text-indigo-700 sm:text-lg font-semibold mb-2 text-center">
                                {card.name}
                            </p>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-yellow-500 text-xl">⭐</span>
                                <span className="text-lg font-semibold">{card.rating || 'N/A'}</span>
                            </div>
                            <div className="flex flex-col items-start space-y-2 w-full mt-4">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-indigo-700">Joining Fee:</span>
                                    <span>{card.joining_fee || 'N/A'}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-indigo-700">Rewards Rate:</span>
                                    <span>{card.rewards_rate ? `${card.rewards_rate}%` : 'N/A'}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-4">
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-rose-700 transition-colors duration-300">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}