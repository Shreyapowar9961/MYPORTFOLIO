'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>

					{/* Heading */}
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">
							Certificates & Achievements
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							My certifications, research work, and hackathon experiences.
						</p>
					</motion.div>

					{/* Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{certificates.map((cert, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="card-gradient h-full hover:shadow-xl transition duration-300">
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<Award className="h-8 w-8 text-primary shrink-0" />

											<div>
												<h2 className="text-lg font-semibold mb-2">
													{cert.title}
												</h2>

												<p className="text-muted-foreground text-sm">
													{cert.issuer}
												</p>

												<p className="text-sm text-muted-foreground mt-2">
													{cert.date}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

				</motion.div>
			</div>
		</div>
	);
}