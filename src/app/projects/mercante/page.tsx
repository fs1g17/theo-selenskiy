export default function Mercante() {
  return(
    <div className="w-full flex flex-col gap-y-10 pb-10">
    <div className="flex flex-col">
      <h1></h1>
      <Link
        href=""
        target="_blank"
        className="text-muted-foreground"
      >
        Check it out! (opens in new tab)
      </Link>
    </div>
    <div>
      <h2>Demo</h2>
      <video
        controls
        src={"/videos/anymate-demo.mp4"}
        autoPlay
        muted
        className="w-full aspect-auto"
      />
    </div>
    <div>
      <h2>What problem does it solve?</h2>
      <p className="text-muted-foreground">
        
      </p>
    </div>
    <div>
      <h2>What does it do?</h2>
      <p className="text-muted-foreground">
        
      </p>
    </div>
    <div>
      <h2>Tech approach</h2>
      <p className="text-muted-foreground">
        
      </p>
    </div>
  </div>
  )
}