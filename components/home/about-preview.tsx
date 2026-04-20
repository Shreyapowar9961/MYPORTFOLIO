'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description="A passionate Data Science student focused on building innovative and real-world solutions."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					
					{/* Image */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[400px] rounded-lg overflow-hidden"
					>
						<Image
							src="/engi.png"
							alt="Shreya Powar"
							fill
							className="object-cover"
							sizes="(max-width: 1268px) 900vw, 70vw"
						/>
					</motion.div>

					{/* Content */}
					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">
							Data Science Enthusiast
						</h3>

						<p className="text-muted-foreground mb-6">
							I am a third-year Computer Science student specializing in Data Science,
							with a strong interest in machine learning, web development, and building
							real-world applications. I enjoy solving problems using data-driven approaches
							and creating user-friendly digital solutions.
						</p>

						{/* Stats Cards */}
						<div className="grid grid-cols-2 gap-4 mb-6">
							
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Education</h4>
									<p className="text-sm text-muted-foreground">
										B.Tech Data Science
									</p>
								</CardContent>
							</Card>

							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Experience</h4>
									<p className="text-sm text-muted-foreground">
										2 Internships
									</p>
								</CardContent>
							</Card>

							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Projects</h4>
									<p className="text-sm text-muted-foreground">
										4+ Completed
									</p>
								</CardContent>
							</Card>

							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Achievements</h4>
									<p className="text-sm text-muted-foreground">
										Research & Awards
									</p>
								</CardContent>
							</Card>

						</div>

						<Button asChild>
							<Link href="/about">
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>

				</div>
			</div>
		</section>
	);
}