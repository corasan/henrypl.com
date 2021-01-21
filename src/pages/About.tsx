const About = () => {
  const responsive = 'sm:w-3/5 sm:px-14 sm:py-16 sm:shadow-lg'
  return (
    <div
      className={`flex flex-wrap min-w-full sm:min-w-0 justify-center bg-white pb-24 px-0 flex-col ${responsive}`}
    >
      <span className="text-4xl font-black sm:text-6xl">Hello, I am</span>
      <span className="text-4xl font-black text-accent sm:text-6xl">Henry Paulino</span>

      <p className="text-xl mt-8 sm:text-2xl">
        I am a Front-End Developer and React Native Developer. From time to time I like play around
        in the Back-End using Node.js or Ruby on Rails.
      </p>

      <div>
        <div className="inline-block border-b-2 border-accent pb-1 mt-8">
          <a
            href="https://drive.google.com/file/d/1N5ZhlxJspzOvq2x-hzBEysx9WdTm7Lfe/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-xl sm:text-2xl text-accent font-extrabold inline cursor-pointer"
          >
            Resume
          </a>
        </div>
      </div>

      {/* <div>
      <div className="inline-block border-b-2 border-accent pb-1 mt-8">
        <a className="text-2xl text-accent font-extrabold inline cursor-pointer">See my projects</a>
      </div>
    </div> */}
    </div>
  )
}

export default About
