export interface TeamMember {
	id: string
	name: string
	role: string
	bio: string
	image?: string
}

/**
 * Team members data for the About page
 * Images should be placed in /public/assets/team/
 */
export const teamMembers: TeamMember[] = [
	{
		id: 'director',
		name: 'Anna Rangarira',
		role: 'Director',
		bio: `Annatonet is a skilled bookkeeper and administrator with a bachelor’s degree in business
				administration and a Higher Certiﬁcate in Accounting Science. Her expertise in ﬁnancial
				management and administrative tasks is crucial to Jetspan's operations in the petroleum industry.
				Annatonet excels in recording transactions, preparing ﬁnancial statements, and managing invoices,
				ensuring smooth ﬁnancial operations for the company's fuel supply business. Her proﬁciency with
				accounting software and data management contributes to Jetspan's eﬃcient fuel distribution
				and management systems. Driven by a passion for continuous improvement, Annatonet plays a vital
				role in supporting Jetspan's growth in the competitive energy sector. Her commitment to
				authenticity and professional excellence aligns perfectly with Jetspan's mission to provide reliable
				and innovative fuel solutions.`,
		// image: '/assets/team/anna-director.jpg',
	},
	{
		id: 'director',
		name: 'Asa Rangarira',
		role: 'Director',
		bio: `Asa Rangarira is an accomplished software engineer with a passion for innovative, user-friendly
				applications. Holding a certiﬁcate in software engineering, he brings five years of industry
				experience to his role. He is passionate about leveraging technology to optimize operations and
				enhance customer service. Known for his hands-on approach and customer-centric focus, Asa
				drives the company's mission to deliver reliable, cost-eﬀective fuel solutions. His vision of
				sustainable growth and operational excellence continues to shape Jetspan's trajectory in the
				dynamic energy landscape. His favorite quote, "You can always be what you work to be," reﬂects his
				belief in hard work, persistence, and following one's dreams to achieve success and personal
				fulﬁlment.`,
		image: '/assets/team/asa-director.jpg',
	},
	{
		id: 'director',
		name: 'Tonderai Sibanda',
		role: 'Director',
		bio: `With extensive experience in automotive engineering and a passion for innovation,
				Tonderai drives Jetspan's mission to revolutionize fuel distribution. His expertise in diesel
				and petrol systems, combined with a deep understanding of diverse client needs, has
				positioned Jetspan as a frontrunner in providing eﬃcient and sustainable energy solutions.
				Tonderai's commitment to leveraging cutting-edge technology and optimizing fuel
				management has been instrumental in the company's growth. His leadership philosophy,
				centered on consistency and excellence, guides Jetspan's approach to customer service,
				safety, and environmental stewardship. Under Tonderai's direction, Jetspan continues to
				fuel progress and empower businesses across South Africa, contributing signiﬁcantly to the
				nation's economic transformation.`,
		image: '/assets/team/tonderai-director.jpeg',
	},
	{
		id: 'operations-manager',
		name: 'Earnest Munyoro',
		role: 'Operations Manager',
		bio: `Earnest Munyoro holds an LLB (Bachelor of Laws) from Wits University. As a Compliance
				Officer, he ensures adherence to regulatory requirements and industry standards. His
				responsibilities include conducting risk assessments, implementing mitigation strategies,
				and fostering a culture of compliance within internal teams. Earnest's passion lies in the
				petroleum industry, where he stays informed about the latest developments and trends.
				His skills encompass legal research, compliance management, contract review, and a deep
				understanding of the petroleum sector.`,
		image: '/assets/team/operations-manager2.jpg',
	}	
]
