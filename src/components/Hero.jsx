import logo  from "../assets/logo.png"
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
    <nav className="flex justify-between  items-center w-full mb-10 pt-3">
    <img src={logo} alt="EZSumz_Logo" className="w-[9rem] object-contain"/>
    <button type="button" onClick={()=>window.open("https://github.com/sprhackz", "_blank")} className="black_btn ">Github</button>
    </nav>
    <h1 className="head_text">

    Summarize Articles with <br className="max-md:hidden"/>
    <span className="red_gradient">OpenAI GPT-4 </span>
    </h1>
    <h2 className="desc">
      Simplify Your reading with Summize, am open-source article Summarizer that transforms lengthy articles into clear and concise summaries
    </h2>
    </header>
    
  )
}

export default Hero