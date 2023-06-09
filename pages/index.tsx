import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div className='container mx-auto'>
				<div className='h-[500px] border rounded bg-slate-500 text-[36px] px-3 text-center'>
					Home Page
				</div>
			</div>
		</>
	);
}
