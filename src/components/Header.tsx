import Link from "next/link";
import Container from "./Container";

export default function Header() {
	return (
		<header className="bg-slate-500 py-4">
			<Container className="flex justify-between items-center">
				<Link href="/" className="font-bold text-4xl">
					Mehmet K.
				</Link>
				<div className="flex items-center gap-x-2">
					<a target="_blank" href="https://twitter.com/konukcudev">
						<svg
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
						>
							<g clip-path="url(#clip0_138_53)">
								<path
									d="M9.4377 27.1875C20.7557 27.1875 26.9479 17.8084 26.9479 9.67739C26.9479 9.41372 26.942 9.14418 26.9303 8.88051C28.1348 8.00939 29.1744 6.93038 30 5.69418C28.8782 6.19331 27.6871 6.51929 26.4674 6.66098C27.7516 5.8912 28.7132 4.6819 29.1738 3.25727C27.9657 3.97326 26.6445 4.47833 25.2668 4.75082C24.3385 3.76451 23.1112 3.11146 21.7746 2.89262C20.438 2.67379 19.0665 2.90137 17.8722 3.54018C16.6779 4.17899 15.7273 5.19344 15.1673 6.4267C14.6074 7.65996 14.4693 9.04333 14.7744 10.3629C12.3281 10.2402 9.93492 9.60469 7.74998 8.49768C5.56503 7.39068 3.63712 5.83686 2.09121 3.93696C1.3055 5.29162 1.06507 6.89462 1.41879 8.42018C1.77251 9.94573 2.69383 11.2794 3.99551 12.15C3.01829 12.119 2.06247 11.8559 1.20703 11.3825V11.4586C1.20616 12.8802 1.69762 14.2583 2.59789 15.3585C3.49815 16.4588 4.75165 17.2133 6.14531 17.4938C5.24007 17.7415 4.28998 17.7776 3.36855 17.5993C3.76182 18.8219 4.52697 19.8912 5.55721 20.658C6.58746 21.4248 7.8314 21.8508 9.11543 21.8766C6.93553 23.5889 4.24272 24.5177 1.4707 24.5133C0.979109 24.5126 0.487999 24.4824 0 24.4231C2.81607 26.2297 6.09191 27.1893 9.4377 27.1875Z"
									fill="currentColor"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_138_53">
									<rect width="30" height="30" fill="white"></rect>
								</clipPath>
							</defs>
						</svg>
					</a>
					<a target="_blank" href="https://www.instagram.com/mehmetext/">
						<svg
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
						>
							<g clip-path="url(#clip0_138_49)">
								<path
									d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8105 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z"
									fill="currentColor"
								></path>
								<path
									d="M15 7.29492C10.7461 7.29492 7.29492 10.7461 7.29492 15C7.29492 19.2539 10.7461 22.7051 15 22.7051C19.2539 22.7051 22.7051 19.2539 22.7051 15C22.7051 10.7461 19.2539 7.29492 15 7.29492ZM15 19.998C12.2402 19.998 10.002 17.7598 10.002 15C10.002 12.2402 12.2402 10.002 15 10.002C17.7598 10.002 19.998 12.2402 19.998 15C19.998 17.7598 17.7598 19.998 15 19.998Z"
									fill="currentColor"
								></path>
								<path
									d="M24.8086 6.99018C24.8086 7.98627 24 8.78901 23.0098 8.78901C22.0137 8.78901 21.2109 7.98041 21.2109 6.99018C21.2109 5.99408 22.0195 5.19135 23.0098 5.19135C24 5.19135 24.8086 5.99994 24.8086 6.99018Z"
									fill="currentColor"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_138_49">
									<rect width="30" height="30" fill="white"></rect>
								</clipPath>
							</defs>
						</svg>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/mehmetkonukcu/">
						<svg
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
						>
							<g clip-path="url(#clip0_138_47)">
								<path
									d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z"
									fill="currentColor"
								></path>
							</g>
							<defs>
								<clipPath id="clip0_138_47">
									<rect width="30" height="30" fill="white"></rect>
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</Container>
		</header>
	);
}
