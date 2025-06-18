import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import Breadcrumb from "../Breadcrumb";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import { Icon } from "@iconify/react";
import Spacing from "../Spacing";
import Post from "../Post";
import Sidebar from "../Sidebar";
import AuthorWidget from "../Widget/AuthorWidget";
import CommentsWidget from "../Widget/CommentsWidget";
import ReplyWidget from "../Widget/ReplyWidget";
import { pageTitle } from "../../helpers/PageTitle";
const tags = [
  { tag: "Emergency", href: "/blog/blog-details" },
  { tag: "Pediatric", href: "/blog/blog-details" },
  { tag: "Cardiology", href: "/blog/blog-details" },
  { tag: "Psychiatry", href: "/blog/blog-details" },
  { tag: "Others", href: "/blog/blog-details" },
];
const relatedBlog = [
  {
    title: "Atlier",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_1.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/ATELIER",
  },
  {
    title: `JK Plastic Surgery Center`,
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_2.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/JK",
  },
  {
    title: "BANOBAGI",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_3.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/BANOBAGI",
  },
];

const categoryData = [
  {
    title: "TISS’s real review of plastic surgeries! – Banobagi",
    url: "https://eng.banobagi.com/client-review/tisss-real-review-of-plastic-surgeries/ ",
  },
  {
    title: "Banobagi Case Study: The Plastic Surgery Industry - InterAd",
    url: "https://www.interad.com/en/case-studies/banobagi-case-study ",
  },
  {
    title: "Banobagi Plastic Surgery: Where K-beauty meets science",
    url: "https://www.tatlerasia.com/style/beauty/where-to-go-for-cosmetic-procedures-in-south-koreas-beauty-district ",
  },
];

export default function BlogDetails_BANOBAGI() {
  pageTitle("BANOBAGI");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Refining Beauty with Precision: Inside Banobagi Plastic Surgery" />
      </Section>
      <div className="container">
        {/* <div className="cs_blog_details_info">
          <div className="cs_blog_details_info_left">
            <div className="cs_blog_details_tags">
              {tags.map((item, index) => (
                <Link key={index} to={item.href}>
                  {item.tag}
                </Link>
              ))}
            </div>
            <div className="cs_blog_details_date">
              March 12, 2023 | Debri Bianca
            </div>
          </div>
          <div className="cs_social_links_wrap">
            <h2>Share:</h2>
            <div className="cs_social_links">
              <Link to="/">
                <Icon icon="fa-brands:facebook-f" />
              </Link>
              <Link to="/">
                <Icon icon="fa-brands:linkedin-in" />
              </Link>
              <Link to="/">
                <Icon icon="fa-brands:twitter" />
              </Link>
            </div>
          </div>
        </div> */}
        <Spacing md="55" />
        <img
          src={`${process.env.PUBLIC_URL}/images/blog/BANOBAGI.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is Banobagi Plastic Surgery?</h2>{" "}
              <p>
                Banobagi Plastic Surgery & Aesthetics is a premier aesthetic
                hospital located in Gangnam‑gu, Seoul. Celebrated for its
                philosophy—“Detail”—the clinic prioritizes precision, safety,
                and a patient‑centred approach. Every procedure is overseen by
                board‑certified surgeons, many of whom graduated from Seoul
                National University, and supported by a dedicated team of
                anesthesiologists and specialists.
              </p>{" "}
              <h2>Core Philosophy & Patient Safety</h2>{" "}
              <ol>
                {" "}
                <li>
                  <b>Attention to Detail:</b> Banobagi emphasizes exhaustive
                  planning—including 3D simulations—and individualized treatment
                  strategies. The goal is to avoid over-treatment and instead
                  focus on enhancing patients’ natural beauty .
                </li>{" "}
                <li>
                  <b>Safety First:</b> Equipped with advanced operating rooms,
                  uninterrupted power backups, emergency defibrillators, and
                  continuous monitoring by a team of ≥4 anesthesiologists,
                  Banobagi places patient safety at the forefront .
                </li>{" "}
                <li>
                  <b>Humanistic Care:</b> Adopting a “patients-as-family” ethos,
                  the clinic performs thorough pre-op health screenings (blood
                  work, imaging, stress tests) and offers customized follow-up
                  care to support both physical recovery and emotional
                  wellbeing.
                </li>{" "}
              </ol>{" "}
              <h2>Signature Procedures & Expertise</h2>{" "}
              <ul>
                {" "}
                <li>
                  <b>Facial Contouring & Skull Harmony:</b> Cheekbone reduction,
                  square-jaw reshaping, chin (genioplasty), two-jaw surgery, and
                  advanced non-surgical skin rejuvenation. Their results often
                  enhance the sought-after V‑line aesthetic
                </li>{" "}
                <li>
                  <b>Eyes & Nose Surgery:</b> Double eyelid creation, ptosis
                  correction, canthoplasty, lower eyelid bag removal,
                  rhinoplasty, and minimally invasive thread-lifts
                </li>{" "}
                <li>
                  <b>Breast & Body Sculpting:</b> Augmentation, reduction,
                  lifts, gynecomastia correction, liposuction, body contouring,
                  and fat grafting
                </li>{" "}
                <li>
                  <b>Rejuvenation & Injectables:</b> Toxins (Botox), fillers,
                  fat stem-cell/SVF therapy, PDRN, lasers, and anti-aging
                  procedures
                </li>{" "}
              </ul>{" "}
              <h2>International Patient Care</h2>{" "}
              <p>
                With over 20 years of experience serving international clients,
                Banobagi offers multilingual support, online consultations, and
                assistance with travel logistics including accommodation and
                post-op recovery scheduling
              </p>{" "}
              <h2>Clinic Experience & Facilities</h2>{" "}
              <p>
                Located near Yeoksam Station (Lines 2 & 9), Banobagi is a
                full-service facility boasting modern surgical suites,
                anesthesiology monitoring systems, pre-op exam rooms, inviting
                recovery spaces, and tailored aftercare programs
                :contentReference
              </p>{" "}
              <h2>Conclusion</h2>{" "}
              <p>
                Banobagi Plastic Surgery & Aesthetics blends meticulous
                planning, artistic refinement, and an unwavering commitment to
                safety. Ideal for those seeking natural, well-balanced
                enhancements crafted by a highly qualified surgical team,
                Banobagi offers a truly holistic aesthetic journey—from
                consultation to recovery.
              </p>{" "}
              <h2>Clinic Details</h2>{" "}
              <p>
                <b>Address:</b> 517 Nonhyeon‑ro, Gangnam‑gu, Seoul
                <br /> <b>Hours:</b> Mon–Fri 09:30–18:30, Sat 09:30–16:00;
                closed Sundays & holidays
              </p>{" "}
            </div>
            {/* <Spacing md="85" />
            <AuthorWidget
              imgUrl={`${process.env.PUBLIC_URL}/images/blog/author.png`}
              name="Author Bio"
              description="John Smith is a freelance writer and content strategist with a passion for helping businesses tell their stories. With over 10 years of experience in the industry, John has worked with a wide range of clients, from startups to Fortune 500 companies. He holds a Bachelor's degree in English from the University of California, Los Angeles (UCLA), and is an avid reader and traveler in his free time. Follow him on Twitter @johnsmithwriter for the latest updates on his work."
            />
            <Spacing md="110" /> */}
            {/* <CommentsWidget title="Comments" />
            <Spacing md="92" />
            <ReplyWidget title="Leave a Reply" /> */}
          </div>
          <div className="col-lg-4">
            <Sidebar categoryData={categoryData} />
          </div>
        </div>
        <Spacing md="135" lg="100" />
        <h2 className="mb-0 cs_fs_40 cs_medium">Other Hospitals</h2>
        <Spacing md="57" />
        <div className="row cs_gap_y_40">
          {relatedBlog?.map((item, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <Post {...item} />
            </div>
          ))}
        </div>
      </div>
      <Spacing md="200" xl="150" lg="110" />
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl={`${process.env.PUBLIC_URL}/images/doctors/banner_img_3.png`}
        />
      </Section>
    </>
  );
}
