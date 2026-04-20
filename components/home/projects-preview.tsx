'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	const previewProjects = projects.slice(0, 3);

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">

				<SectionHeader
					title="Featured Projects"
					description="Explore some of my recent projects and technical work."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
				>

					{previewProjects.map((project, index) => (
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
											View Repo
										</a>
									)}
								</CardFooter>

							</Card>
						</motion.div>
					))}

				</motion.div>

				{/* View All Button */}
				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/projects">
							View All Projects <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>

			</div>
		</section>
	);
}