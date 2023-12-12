import { useActiveTabStore } from '../store';
import './navBar.css';

function NavBar() {
	const activeTab = useActiveTabStore((state) => state.activeTab);

	return (
		<nav>
			<ul>
				<li className={activeTab === 'home' ? 'active' : ''}>
					<a
						href='#home'
						aria-label='home'>
						Home
					</a>
				</li>
				<li className={activeTab === 'about' ? 'active' : ''}>
					<a
						href='#about'
						aria-label='about'>
						About
					</a>
				</li>
				<li className={activeTab === 'skills' ? 'active' : ''}>
					<a
						href='#skills'
						aria-label='skills'>
						Stack
					</a>
				</li>
				<li className={activeTab === 'projects' ? 'active' : ''}>
					<a
						href='#projects'
						aria-label='projects'>
						Projects
					</a>
				</li>
				<li className={activeTab === 'contact' ? 'active' : ''}>
					<a
						href='#contact'
						aria-label='contact'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
