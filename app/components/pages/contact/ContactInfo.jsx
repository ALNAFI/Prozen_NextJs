import Image from "next/image";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <section className="ht-contact-info-area section-padding">
      <div className="container">
        <div className="contact-info-wrapper">
          <div className="row gy-5">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="contact-info-item">
                <div className="icon">
                  <Image
                    src="/images/icon/phone.svg"
                    alt="icon"
                    width={42}
                    height={42}
                    loading="lazy"
                  />
                </div>
                <div className="content">
                  <span>Phone number</span>
                  <h4>+44 204 577 0077</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="contact-info-item">
                <div className="icon">
                  <Image
                    src="/images/icon/comment.svg"
                    alt="icon"
                    width={42}
                    height={42}
                    loading="lazy"
                  />
                </div>
                <div className="content">
                  <span>Email address</span>
                  <Link href="mailto:prozen@gmail.com">
                    <h4>prozen@gmail.com</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="contact-info-item">
                <div className="icon">
                  <Image
                    src="/images/icon/location.svg"
                    alt="icon"
                    width={42}
                    height={42}
                    loading="lazy"
                  />
                </div>
                <div className="content">
                  <span>Office Address</span>
                  <h4>Washington Ave, NY</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
