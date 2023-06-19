import { useState, useEffect, lazy, Suspense } from "react";

const LazyPhotosGrid = lazy(() => import("@/components/Photo/Grid"));
import SearchInput from "@/components/Common/Search";
import { getPhotos } from "@/components/Common/Api";
import LoadingSpinner from "@/components/Common/Loading";

interface Photo {
  _id: string;
  src: string;
  name: string;
}

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredPhotos = photos.filter((photo) =>
    photo.name.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const data = await getPhotos();
      setPhotos(data);
    } catch (error) {
      console.error("Failed to fetch photos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="w-full p-6 items-center m-auto max-w-max">
      <SearchInput value={searchTerm} onChange={handleSearch} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <LazyPhotosGrid photos={filteredPhotos} />
        </Suspense>
      )}
    </div>
  );
}
