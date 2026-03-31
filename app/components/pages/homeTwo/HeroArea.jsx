import Image from "next/image";
import Link from "next/link";

export default function HeroArea() {
  return (
    <section className="ht-hero-area hero-2">
      <div className="shape-two float-bob-x">
        <Image
          src="/images/shape/11.svg"
          alt="shape"
          width={180}
          height={180}
          priority
          loading="eager"
        />
      </div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="row gy-5 align-items-lg-center ">
            <div className="col-lg-5">
              <div className="ht-hero-content style-2">
                <h1 data-aos="fade" data-aos-delay="200">
                  Innovative solutions for growth
                </h1>
                <p className="desc" data-aos="fade-up" data-aos-delay="400">
                  Agilos helps you to convert your data into rategic asset emand
                  get top-notch your business insights.
                </p>
                <Link href="/contact"
                  className="ht-btn style-2"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Let&apos;s Get in Touch
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img two" data-aos="fade-up" data-aos-delay="200">
                <Image
                  src="/images/hero/2.jpg"
                  alt="img"
                  width={900}
                  height={650}
                  priority
                />
                <div className="sm-img float-bob-y">
                  <Image
                    src="/images/hero/4.jpg"
                    alt="img"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
