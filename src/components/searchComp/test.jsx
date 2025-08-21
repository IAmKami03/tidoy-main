// console.log("ViewFeat props data:", data);

const ViewFeat = ({ data = [] }) => {
  if (!data.length) {
    return <p className="text-center mt-4">No properties found</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {data.map((property, index) => {
        const imageSrc =
          Array.isArray(property.images) && property.images.length > 0
            ? `${property.images[0]}?v=${property.updatedAt || Date.now()}`
            : "https://via.placeholder.com/400x300?text=No+Image";

        return (
          <div
            key={`${property._id}-${index}`} // unique key
            className="border rounded-lg overflow-hidden shadow"
          >
            <img
              src={imageSrc}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{property.title}</h3>
              <p className="text-sm text-gray-500">
                {property.city}, {property.area}
              </p>
              <p className="text-yellow-500 font-semibold">
                ★ {property.score || "No rating"} ({property.reviewCount})
              </p>
              <p className="mt-2 text-[#0167FF] font-bold">
                ₦{property.pricePerNight} / night
              </p>
              <p className="mt-1 text-sm">{property.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewFeat;
