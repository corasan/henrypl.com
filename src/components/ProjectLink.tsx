import Link from "next/link";
import { ArrowUpRight} from 'lucide-react'

export function ProjectLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <div className="project-link">
      <Link href={href} target="_blank" rel="noopener noreferrer">{children}</Link>
      <ArrowUpRight size={16} />
    </div>
  );
}

