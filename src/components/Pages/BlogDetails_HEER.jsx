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
    title:
      "Comprehensive clinic overview, procedures, outcomes, and international patient services.",
    url: "https://us-uk.bookimed.com/clinic/hershe-plastic-surgery-korea/",
  },
  {
    title: "Hershe Plastic Surgery-Medical Departures",
    url: "https://www.medicaldepartures.com/clinic/hershe-plastic-surgery",
  },
  {
    title:
      "Highlights luxurious one‑stop service, airport transfer, and thorough 1:1 consultation process.",
    url: "https://www.whatclinic.com/cosmetic‑plastic‑surgery/south‑korea/seoul/hershe‑plastic‑surgery‑clinic",
  },
];

export default function BlogDetails_HEER() {
  pageTitle("HEER");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Timeless Beauty, Expertly Crafted: Discover HERSHE Plastic Surgery Korea" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/HEER.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is HERSHE Plastic Surgery Korea?</h2>
              <p>
                HERSHE Plastic Surgery Korea is a distinguished aesthetic
                medical center located in Cheongdam‑dong, Seoul. Established in
                1992, HERSHE combines over 30 years of clinical experience with
                cutting‑edge techniques to deliver natural and refined beauty
                transformations. Led by board‑certified surgeons and an expert
                care team, the clinic takes a personalized, one‑on‑one
                approach—ensuring each patient’s goals are met with precision
                and care.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Anti‑Aging & Rejuvenation:</b>
                  <br />
                  HERSHE offers patented stem‑cell therapies (including their
                  proprietary approach), lasers, fillers, and thread lifts to
                  restore youthful skin vitality.
                </li>
                <li>
                  <b>Facial Contouring & Eye Procedures:</b>
                  <br />
                  The clinic specializes in upper and lower blepharoplasty,
                  facelift, rhinoplasty, facial fat grafting, and SMAS‑based
                  lifts—intended for balanced, elegant results.
                </li>
                <li>
                  <b>Body Sculpting & Breast Aesthetics:</b>
                  <br />
                  Services include liposuction, buttock lift (non‑surgical and
                  surgical), tummy‑tuck, breast augmentation/lift/reduction, and
                  body contouring.
                </li>
                <li>
                  <b>Premium Patient Experience:</b>
                  <br />
                  HERSHE emphasizes individualized consultations, private
                  procedural rooms, dedicated after‑care (with personal recovery
                  buzzers), English‑speaking coordinators, and seamless service
                  from airport arrival to post‑op care :contentReference.
                </li>
              </ol>

              <h2>Patient Journey and Philosophy</h2>
              <p>
                At HERSHE, beauty is viewed as a personal journey. From the
                detailed initial consultation—where all procedures, prices, and
                options are explained—to post‑op recovery in private rooms,
                every step is designed for comfort and transparency. Their
                philosophy focuses on natural enhancement rather than overt
                transformation—an approach consistently echoed in positive
                international patient reviews :contentReference.
              </p>

              <h2>Conclusion</h2>
              <p>
                HERSHE Plastic Surgery Korea stands out as a holistic aesthetic
                hub, uniting artistic skill, medical expertise, and
                patient-first service. Ideal for both first-time visitors and
                revisiting clients, the clinic offers a full range of cosmetic
                surgery and rejuvenation with sophisticated, personalized
                care—helping you look and feel your best, naturally and
                confidently.
              </p>
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
