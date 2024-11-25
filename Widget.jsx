export default function Widget() {
  return (
    <div className="bg-background text-foreground">
      <header className="flex justify-between p-6">
        <div className="text-xl font-bold">Anne Marie</div>
        <nav className="space-x-4">
          <a href="#" className="text-muted hover:text-muted-foreground">
            HOME
          </a>
          <a href="#" className="text-muted hover:text-muted-foreground">
            WORK
          </a>
          <a href="#" className="text-muted hover:text-muted-foreground">
            ABOUT
          </a>
          <a href="#" className="text-muted hover:text-muted-foreground">
            BLOG
          </a>
          <a href="#" className="text-muted hover:text-muted-foreground">
            FAQs
          </a>
          <a href="#" className="text-muted hover:text-muted-foreground">
            CONTACT
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center">
        <div className="relative w-full h-96">
          <img src="https://placehold.co/600x400" alt="Lifestyle Photography" className="absolute inset-0 object-cover w-full h-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl font-bold">Lifestyle Photography</h1>
            <p className="mt-2 text-lg">CAPTURING THE MOMENT</p>
          </div>
        </div>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold">Hello! I am Anne.</h2>
          <p className="mt-4 text-muted-foreground">
            Write something about yourself here. Paragraph text comes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </main>
    </div>
  )
}
