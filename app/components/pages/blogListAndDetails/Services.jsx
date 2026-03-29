import Link from "next/link";
export default function Services({servicesData}) {
  return (
    <div className="single-widget">
      <h4 className="widget-title">Services</h4>
      <ul className="service-list">
        {servicesData.map((service) => (
          <li key={service.id}>
            <Link href={service.to}>
              {service.label} <i className="fa-solid fa-arrow-right" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
