import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import { notFound } from 'next/navigation'
import ExitCaseStudy from '@/app/components/case-study/exit-case-study'

const projects: Record<
  string,
  { title: string; subtitle: string; component: ComponentType }
> = {
  exit: {
    title: 'Exit',
    subtitle: 'Helping people quit their job',
    component: ExitCaseStudy,
  },
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: project.title,
    description: project.subtitle,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  // lollll what the fuck is this 😂 ill fix later
  const CaseStudy = project.component

  return <CaseStudy />
}
