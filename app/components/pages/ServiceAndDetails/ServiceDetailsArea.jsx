
import Services from '../blogListAndDetails/Services'
import { servicesData } from "../../../data/serviceAndDetailsData";
import Link from "next/link";

export default function ServiceDetailsArea() {
  return (
    <section className="ht-service-details-area section-padding">
        <div className="container">
            <div className="service-details-wrapper">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ht-sidebar-area v2">
                            <Services servicesData={servicesData} />
                            <div className="single-contact">
                                <div className="icon">
                                    <img src="images/icon/16.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h3>Don&apos;t hesitate to contact us</h3>
                                    <p>At our IT solution company, we are committed to exceptional</p>
                                    <Link href="/contact" className="ct-btn">Get in Touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="service-details-thumb">
                            <img src="images/service/3.jpg" alt="thumb-service"/>
                        </div>
                        <div className="service-details-content">
                            <h2 className="mb-12">service-details-thumb</h2>
                            <p className="mb-15">
                                Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                                dolorem ipsum quia var quaed inventore veritatis et quasi architecto beatae vitae dicta
                                explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                finibus eros. Lore Ipsum is simply dummy text of the been printing and typesetting
                                industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s,
                                when an unknown printer.
                            </p>
                            <p>
                                When an unknown printer took a galley of type and scrambled it to make a type book. It
                                leap survive not only five centurie, but also the leap into electronic typesetting,
                                unchange Lorem ipsum dolor sit amet consec tetur adipis icing elit.
                            </p>
                            <h3>Service Center</h3>
                            <p>
                                With over a decade of experience, we’ve established ourselves as one of pioneerin
                                agencies in the region. Our small, flexible, agile and design-led structures and
                                processes allow highly responsive and innovative. We’re of passionate leaders,
                                strategists, managers, developers, animators and designers who work together under one
                                umbrella. We are a digitally-led, service creative agency. We combine strategy,
                                marketing, design.
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="service-thumbs">
                                        <img src="images/service/4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="service-thumbs">
                                        <img src="images/service/5.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-35">
                                When an unknown printer took a galley of type and scrambled it to make a type book. It
                                has leap survive not only five centurie, but also the leap into electronic typesetting
                                essentiall dolor unchange Lorem ipsum dolor sit amet consec tetur adipis icing elit.
                            </p>
                            <h3>Services All Details</h3>
                            <p>
                                Cast obscure badger jeep quail congenialy when changed as cat jeepers affectionate thus
                                facilisi goodness this far like ipsum dolor sit amet, consectetur adipisicing elits sed
                                eiusmod tempo et incididunt et laboret dolore magna aliqua enim ad minim. Eveniet in
                                vulputate esse molestie consequat, illum dolore eu feugiat nulla facilisis at seds eros
                                sed.
                            </p>
                            <ul className="service-details-list">
                                <li><i className="fa-solid fa-check"></i>Creating and editing content</li>
                                <li><i className="fa-solid fa-check"></i>Workflows, reporting, and content organization</li>
                                <li><i className="fa-solid fa-check"></i>User & role-based administration and security</li>
                                <li><i className="fa-solid fa-check"></i>Flexibility, scalability, and performance and
                                    analysis</li>
                                <li><i className="fa-solid fa-check"></i>Multilingual content capabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
