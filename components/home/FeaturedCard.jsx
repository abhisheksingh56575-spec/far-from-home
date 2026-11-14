import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedCard({
  icon,
  title,
  description,
  href
}) {
  return (
    <Link href={href} className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <div className="feature-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="feature-arrow">
        <ArrowUpRight size={20} />
      </div>

    </Link>
  );
}