export default function Video({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative my-4 h-0 max-w-full overflow-hidden rounded-sm pb-[56.25%]">
      <iframe
        src={src}
        title={title}
        allow="autoplay"
        className="absolute left-0 top-0 aspect-video h-full w-full border-0"
      />
    </div>
  );
}
