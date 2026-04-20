'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">

				{/* Top Section */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>

					{/* LEFT */}
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>

						<p className="text-lg text-muted-foreground">
							I am a passionate third-year B.Tech student specializing in Data Science,
							with a strong foundation in machine learning, data analytics, and full-stack
							web development. I enjoy building intelligent and user-friendly applications
							that solve real-world problems and create meaningful impact.
						</p>

						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>

							<p className="text-muted-foreground">
								I started my journey with a curiosity for technology, which gradually
								evolved into a passion for Data Science and development. I built a
								strong foundation in programming and explored web development by
								creating user-friendly applications.
							</p>

							<p className="text-muted-foreground">
								With a growing interest in AI, I worked on projects like leaf disease
								detection using deep learning and developed full-stack platforms for
								real-world applications. Through internships and leadership roles,
								I enhanced my technical, problem-solving, and teamwork skills.
							</p>

							<p className="text-muted-foreground">
								I continue to learn and build, aiming to create impactful and
								innovative solutions in the field of Data Science.
							</p>
						</div>

						{/* Resume Button */}
						<Button className="mt-6" asChild>
							<a href="/resume.pdf" download>
								Download Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					{/* RIGHT IMAGE */}
					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/engi.png"
							alt="Shreya Powar"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				{/* CARDS SECTION */}
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>

					{/* Education */}
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Currently pursuing a Bachelor’s degree in Computer Science &
									Engineering (Data Science), with a strong focus on practical
									applications and innovative real-world solutions.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Experience */}
					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Gained valuable experience through internships and hands-on
									projects, working with modern technologies and real-world
									development practices.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Skills */}
					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Proficient in programming languages, machine learning, and web
									technologies, with a strong foundation in problem-solving and
									analytical thinking.
								</p>
							</CardContent>
						</Card>
					</motion.div>

				</motion.div>

			</div>
		</div>
	);
}