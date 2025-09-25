import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function Images() {
  const mockUrls = [
    "https://m.media-amazon.com/images/M/MV5BZmQ4YWJiMDQtMWMxMy00MjMxLTgyNWQtZTIxMmMwZmVjYTkzXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZmQ4YWJiMDQtMWMxMy00MjMxLTgyNWQtZTIxMmMwZmVjYTkzXkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZmQ4YWJiMDQtMWMxMy00MjMxLTgyNWQtZTIxMmMwZmVjYTkzXkEyXkFqcGc@._V1_.jpg",
  ];
  const images = mockUrls.map((url, index) => ({
    id: index,
    url,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
        >
          <div className="aspect-square">
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Optional: Overlay for better interaction */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

          {/* Optional: Image title overlay */}
          {image.alt && (
            <div className="absolute right-0 bottom-0 left-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
              <p className="truncate text-sm font-medium text-white">
                {image.alt}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  const user = await currentUser();
  return (
    <main className="">
      <div>
        <SignedOut>
          <div className="mt-4 text-center text-2xl font-semibold">
            Sign In Above to Continue!
          </div>
        </SignedOut>

        <SignedIn>
          <div className="mt-4 text-center text-4xl font-semibold">
            Welcome, {user?.firstName}!
            <Images />
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
