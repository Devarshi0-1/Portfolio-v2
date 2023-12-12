import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

import './footer.css';

function Footer() {
	return (
		<footer className='flex-center'>
			<div className='footerContentCont'>
				<div className='footerNameInfo'>
					<h2>Devarshi</h2>
					<p>Full Stack Developer</p>
				</div>
				<div>
					<a
						href='#about'
						aria-label='about'>
						About
					</a>
					<a
						href='#home'
						aria-label='header'>
						Portfolio
					</a>
					<a
						href='#contact'
						aria-label='contact'>
						ContactMe
					</a>
				</div>
				<div className='socials flex-center'>
					<a
						href='https://github.com/Devarshi0-1'
						target='_blank'
						aria-label='Github'>
						<FiGithub />
					</a>
					<a
						href='https://www.instagram.com/devarshi__dwivedi/'
						target='_blank'
						aria-label='Linkedin'>
						<FiLinkedin />
					</a>
					<a
						href='https://www.linkedin.com/in/devarshi-dwivedi/'
						target='_blank'
						aria-label='Instagram'>
						<FiInstagram />
					</a>
				</div>
				<p>&copy; Devarshi. All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;
