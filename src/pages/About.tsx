const About = () => (
  <div className="flex flex-wrap w-3/5 justify-center bg-white py-16 px-14 flex-col shadow-lg">
    <span className="text-6xl font-black">Hello, I am</span>
    <span className="text-6xl font-black text-accent">Henry Paulino</span>

    <p className="text-2xl mt-8">
      I am a Front-End Developer and React Native Developer. From time to time I like play around in
      the Back-End using Node.js or Ruby on Rails.
    </p>

    <div>
      <div className="inline-block border-b-2 border-accent pb-1 mt-8">
        <a
          href="https://drive.google.com/file/d/1N5ZhlxJspzOvq2x-hzBEysx9WdTm7Lfe/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-accent font-extrabold inline cursor-pointer"
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

export default About
