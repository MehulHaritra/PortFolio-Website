// Projects.js
import Food from './images/FoodWebsite.png'
import SignUp from './images/SignUpPage.png'
export default function Projects() {
	return (
		<section id="projects"
				className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-emerald-500 font-bold text-center">
				My Projects
			</h2>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://github.com/MehulHaritra/HaritraFood_WebSite"
						className="w-full h-full">
						<img src={Food}
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline"
							href=
"https://github.com/MehulHaritra/HaritraFood_WebSite">
							Haritra Food
						</a>
					</h2>
					<p>
					Initialise a new Vite project with React template.
          Set up React Router for navigating between Home, About Us, Our Food, and Sign Up pages.
          Design a responsive header and footer component using Tailwind CSS.
          Implement an image slider functionality showcasing different food items or offers. Ensure responsiveness across various screen sizes.
          Provide information about the project or the team behind it.
          Display various food items available in your project Use cards or grids to showcase food items  with images and descriptions.
          Create a sign-up form for users to register.Implement form validation using React hooks Include  fields for username, email, password, etc.
					</p>
				</div>
			</div>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://github.com/MehulHaritra/SignUp_Page"
					className="w-full h-full">
						<img src={SignUp}
							alt="Project 2"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href=
"https://github.com/MehulHaritra/SignUp_Page">
							SignUp Page With Validation 
						</a>
					</h2>
					<p>
          Create a SignUp component to handle user registration. Design a form with input fields for email, phone number, name, password, and confirm password.
          Utilise React state to manage form data and validation errors.Initialize state variables for  email, phone number, name, password, confirm password, and validation errors.
          Implement controlled components for each input field in the SignUp form.Set up onChange handlers to update state values as users input their information.
          Define validation rules for each input field
          Email: Validate if the input is a valid email format.
          O Phone Number: Validate if the input is a valid phone number format.
          Name: Validate if the input is not empty.
          Password: Implement minimum length and complexity requirements.
          Confirm Password: Ensure it matches the password field.
          Implement form submission handling to process user registration Validate all input fields before submitting the form.

					</p>
				</div>
			</div>
		</section>
	);
}
