'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function EducationPage() {
	return (
		<section className="py-16 md:py-24">
			<div className="container max-w-4xl mx-auto px-4">
				
				{/* Heading */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="text-center mb-12"
				>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						className="text-4xl md:text-5xl font-bold mb-4"
					>
						Education
					</motion.h1>

					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground max-w-2xl mx-auto"
					>
						My academic journey, highlighting my growth, achievements, and passion for technology.
					</motion.p>
				</motion.div>

				{/* Timeline */}
				<div className="space-y-10">
					{education.map((edu, index) => (
						<motion.div
							key={index}
							variants={fadeIn('up', 0.2 * index)}
							initial="hidden"
							animate="show"
						>
							<Card className="card-gradient hover:shadow-xl transition-all duration-300 rounded-2xl">
								<CardContent className="p-6 md:p-8">

									{/* Top Section */}
									<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
										<div>
											<h2 className="text-2xl font-semibold">
												{edu.degree}
											</h2>
											<p className="text-primary font-medium">
												{edu.field}
											</p>
										</div>

										{edu.gpa && (
											<p className="text-lg font-semibold mt-2 md:mt-0 text-primary">
												{edu.gpa}
											</p>
										)}
									</div>

									{/* Info Section */}
									<div className="space-y-3 text-sm md:text-base">
										<div className="flex items-center text-muted-foreground">
											<MapPin className="h-4 w-4 mr-2 text-primary" />
											{edu.institution}, {edu.location}
										</div>

										<div className="flex items-center text-muted-foreground">
											<Calendar className="h-4 w-4 mr-2 text-primary" />
											{edu.startDate} - {edu.endDate}
										</div>
									</div>

									{/* Achievements */}
									{edu.achievements && (
										<div className="mt-6">
											<h3 className="text-lg font-semibold mb-3">
												Achievements
											</h3>

											<ul className="space-y-2">
												{edu.achievements.map((achievement, i) => (
													<li key={i} className="flex items-start">
														<Award className="h-5 w-5 mr-2 text-primary mt-0.5 shrink-0" />
														<span className="text-muted-foreground">
															{achievement}
														</span>
													</li>
												))}
											</ul>
										</div>
									)}

								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

			</div>
		</section>
	);
}