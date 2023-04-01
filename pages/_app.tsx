import Transition from '../components/Transition';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({
	Component,
	pageProps,
}: AppProps) {
	const router = useRouter();
	return (
		<div className='container mx-auto px-[15px]'>
			<div className='flex justify-between items-center bg-slate-500 rounded'>
				<Link
					href='/'
					className={
						router.asPath === '/'
							? 'py-2 px-3 text-[24px] bg-red-300'
							: 'py-2 px-3 text-[24px]'
					}
				>
					Home
				</Link>
				<Link
					href='/about'
					className={
						router.asPath === '/about'
							? 'py-2 px-3 text-[24px] bg-red-300'
							: 'py-2 px-3 text-[24px]'
					}
				>
					About
				</Link>
				<Link
					href='/contact'
					className={
						router.asPath === '/contact'
							? 'py-2 px-3 text-[24px] bg-red-300'
							: 'py-2 px-3 text-[24px]'
					}
				>
					Contact
				</Link>
			</div>
			<Transition>
				<Component {...pageProps} />
			</Transition>
		</div>
	);
}
