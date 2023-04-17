import './About.css';
import aboutImg from '../../assets/portfolioImgs/aboutImg.svg';
import CV from '../../assets/Devarshi Resume.pdf';

function About() {
	return (
		<section
			id='about'
			className='flex-center'>
			<h1>About Me</h1>
			<h2>My Introduction</h2>
			<div className='aboutGridContainer'>
				<img
					className='aboutImg'
					src={aboutImg}
					loading='lazy'
					alt='Illustration of a Developer Coding'
				/>
				<p>
					Web developer, with extensive knowledge and years of experience,
					working in web technologies and UI/UX, delivering quality work.
				</p>
				<div className='experienceSection'>
					<div className='yearsExp'>
						<p>02+</p>
						<p>
							Years
							<br />
							Experience
						</p>
					</div>
					<div className='projects'>
						<p>10+</p>
						<p>
							Completed
							<br />
							Projects
						</p>
					</div>
					<div className='workExp'>
						<p>1</p>
						<p>Internships</p>
					</div>
					<button className='primaryBtn'>
						<a
							className='flex-center'
							href={CV}
							target='_blank'>
							View Resume
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 1024 1024'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z'></path>
							</svg>
						</a>
					</button>
				</div>
			</div>
		</section>
	);
}

export default About;
