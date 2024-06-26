// About.js
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-emerald-200 max-w-5xl mx-auto">
			<div className="flex-1">
				<img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
					alt="About"
					className="w-full h-full bg-cover"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-emerald-500 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p>
					As I said, I am your friendly
					neighbourhood osm developer...
				</p>
				<p>
					I am a Passionate React.js Developer with a relentless drive to excel in the ever evolving landscape of web development. Focused on crafting immersive user experience through proficiency in HTML, Css, JavaScript, React.js and My SQL Committed to staying abreast of industry trends and emerging technologies, while actively seeking opportunities to apply innovative solutions to real-world challenges Dedicated to continuous learning and growth, with a fervent dedication to delivering impactful contributions to transformative projects.
				</p>
			</div>
		</section>
	);
}
