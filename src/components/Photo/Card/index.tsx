interface Photo {
  src: string;
  name: string;
}

interface PhotoCardProps {
  photo: Photo;
}
export default function PhotoCard({ photo }: PhotoCardProps): JSX.Element {
  return (
    <>
      <img className="card shadow-xl" src={photo.src} alt={photo.name} />
    </>
  );
}
