export default function BackgroundBlobs() {
  return (
    <>
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/30 blur-[120px]" />

      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-teal-300/20 blur-[120px]" />

      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-orange-300/20 blur-[120px]" />
    </>
  );
}