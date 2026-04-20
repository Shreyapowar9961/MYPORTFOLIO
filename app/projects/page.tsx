'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export default function ProjectsPage() {
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
						variants={fadeInScale(0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Projects</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A showcase of my projects demonstrating real-world problem solving and development skills.
						</p>
					</motion.div>

					{/* Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<motion.div
								key={index}
								variants={fadeInScale(index * 0.1)}
							>
								<Card className="flex flex-col h-full card-gradient hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">

									{/* Image */}
									<div className="relative h-48 w-full pointer-events-none">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover rounded-t-lg"
										/>
									</div>

									{/* Content */}
									<CardContent className="flex-grow p-6">
										<h3 className="font-bold text-xl mb-2">
											{project.title}
										</h3>

										<p className="text-muted-foreground mb-4">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, i) => (
												<Badge key={i} variant="secondary">
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>

									{/* Repo Button */}
									<CardFooter className="p-6 pt-0">
										{project.repo && (
											<a
												href={project.repo}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted transition cursor-pointer z-10"
											>
												<Github className="h-4 w-4" />
												View Repository
											</a>
										)}
									</CardFooter>

								</Card>
							</motion.div>
						))}
					</div>

				</motion.div>

			</div>
		</div>
	);
}