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
    title: "JK Plastic Surgery Center – Top Clinic for International Patients",
    url: "https://us-uk.bookimed.com/clinic/jk-plastic-surgery-center/",
  },
  {
    title: "Accredited for Foreign Patient Excellence – JK Plastic Surgery",
    url: "https://jkplastic.com/en/",
  },
  {
    title: "JK Plastic Surgery Korea – Services & International Standards",
    url: "https://mediglobus.com/clinic/jk-plastic-surgery-center/",
  },
];

export default function BlogDetails_JK() {
  pageTitle("JK");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Trusted Excellence in Global Aesthetics: JK Plastic Surgery Center" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/JK.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is JK Plastic Surgery Center?</h2>
              <p>
                Established in 1998, JK Plastic Surgery Center is one of South
                Korea’s premier aesthetic medical institutions, located in the
                heart of Gangnam, Seoul. It is the first clinic in Korea
                officially certified to treat international patients under the
                Korean Accreditation Program for Hospitals Serving Foreign
                Patients (KAHF, Permit No. 0001). <br />
                <br />
                With over 85,000 successful procedures and a perfect safety
                record, JK is globally renowned for combining high-precision
                surgery, luxury-level care, and personalized service designed
                for both domestic and international clients.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Facial & Body Aesthetic Surgery:</b>
                  <br />
                  JK offers expert procedures in rhinoplasty, blepharoplasty,
                  jaw contouring, breast augmentation, liposuction, tummy tucks,
                  and more—tailored to each patient’s needs with a focus on
                  natural-looking results.
                </li>
                <li>
                  <b>Anti-Aging & Stem Cell Therapy:</b>
                  <br />
                  The clinic features a dedicated wellness center with advanced
                  stem-cell treatments, hyperbaric oxygen therapy, nutritional
                  detox programs, and hair/scalp health care.
                </li>
                <li>
                  <b>Premium International Patient Services:</b>
                  <br />
                  Patients enjoy multilingual consultations, 1:1 care
                  coordination, luxury inpatient rooms, halal and vegan meals,
                  airport pickup, and even optional Rolls-Royce transfers.
                </li>
                <li>
                  <b>Certified Safety and Global Accreditation:</b>
                  <br />
                  JK maintains international-grade sterilization and anesthesia
                  systems, with a full-time anesthesiology team and 24/7 nursing
                  staff, earning commendations from the Korean Ministry of
                  Health.
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                JK prioritizes comfort, transparency, and trust throughout the
                entire patient journey. From initial consultations in private
                rooms to attentive aftercare following surgery, every detail is
                designed for a seamless and supportive experience. Patients can
                even receive post-op care remotely after returning home.
              </p>

              <h2>Conclusion</h2>
              <p>
                JK Plastic Surgery Center offers a unique blend of cutting-edge
                medical technology, luxury hospitality, and personalized beauty
                solutions. As a government-certified leader in medical tourism,
                JK is a trusted destination for anyone seeking transformative
                aesthetic care with world-class standards. <br />
                <br />
                Experience excellence where safety meets sophistication—only at
                JK.
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
