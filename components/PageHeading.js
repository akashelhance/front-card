export default function PageHeading({heading,desc}){
    return <>

<div className="max-w-3xl mx-auto text-center mt-16">
  <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
     {heading}
    </span>
    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
  </h1>
  <p className="text-lg text-gray-800 mb-8">
{desc}  </p>
</div>

    </>
}