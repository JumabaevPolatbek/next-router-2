import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
	children: any;
};
const variants = {
	in: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			duration: 0.35,
			delay: 0.2,
		},
	},
	out: {
		opacity: 0,
		scale: 1,
		x: 40,
		transition: {
			duration: 0.35,
		},
	},
};
const Transition: React.FC<Props> = ({ children }) => {
	const { asPath } = useRouter();
	return (
		<div className='effect-1 container mx-auto'>
			<AnimatePresence
				initial={false}
				mode='wait'
			>
				<motion.div
					key={asPath}
					variants={variants}
					animate='in'
					initial='out'
					exit='out'
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Transition;
