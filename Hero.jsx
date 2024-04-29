// Hero.js
export default function Hero() {
	return (
	<section
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
		<div>
			<h4 className="text-center text-[4rem] font-bold">
				Hi and welcome to
			</h4>
			<h2 className="text-center text-emerald-500 text-4xl font-bold">
			My Portfolio Website
			</h2>
		</div>
		<p className="text-center text-[1.5rem] ">
			I am your friendly ReactJs developer...
		</p>
		</div>
		
	</section>
	);
}
