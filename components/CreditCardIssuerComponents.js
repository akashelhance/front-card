export default function CreditCardIssuerComponents({ issuers }) {
    return <>

<div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {issuers.map((issuer) => (
                    <div key={issuer.id} className="bg-white shadow-md rounded-lg p-6 relative">
                        <img
                            src={issuer.issuer_image || 'https://via.placeholder.com/150'}
                            alt={issuer.issuer_image_alt_text || "Issuer Logo"}
                            className="h-16 mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{issuer.name}</h3>
                        <p className="text-gray-700 mb-4">
                            {issuer.issuer_description || "Description not available."}
                        </p>
                        <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-2 py-1 rounded">
                            Total Cards: {issuer.cr.length}
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </>
}