import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
	const sectionRef = useRef(null);
	const rydeRef = useRef(null);
	const mojitoRef = useRef(null);
	const ycDirectoryRef = useRef(null);

	useGSAP(() => {
		// Animation for the main section
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.5 },
		);

		// Animations for each app showcase
		const cards = [rydeRef.current, mojitoRef.current, ycDirectoryRef.current];

		cards.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
					},
				},
			);
		});
	}, []);

	return (
		<div id="work" ref={sectionRef} className="app-showcase">
			<div className="w-full">
				<div className="showcaselayout w-full">
					<div className="project-list-wrapper w-full overflow-hidden">
						<a
							href="https://gilded-glass.vercel.app/"
							target="_blank"
							className="project"
							ref={mojitoRef}
						>
							<div className="image-wrapper bg-[#FFEFDB] ">
								<img src="/images/project2.png" alt="Gilded Glass Project" />
							</div>
							<h2>The Gilded Glass Project</h2>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppShowcase;
