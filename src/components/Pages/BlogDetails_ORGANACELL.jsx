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
    title: "Discover Premium Skincare at OGANACELL DERMATOLOGY CLINIC",
    url: "https://oganalotteworldtower.com/oganacell-dermatology-clinic/?utm_source=chatgpt.com",
  },
  {
    title: "Fluid Injection Therapy: Enhance Your Inner Beauty",
    url: "https://oganaglobal.com/en/2024/?utm_source=chatgpt.com",
  },
  {
    title: "Oganacell Dermatology Clinic – Cheongdam Branch Overview",
    url: "https://www.koreaclinicguide.com/clinic/ogana-cell-dermatology-clinic-cheongdam?utm_source=chatgpt.com",
  },
];

export default function BlogDetails_ORGANACELL() {
  pageTitle("ORGANACELL");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Revolutionizing Skin Health: Discover Oganacell Dermatology Clinic" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/ORGANACELL.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is Oganacell Dermatology Clinic?</h2>
              <p>
                Oganacell is a premium dermatology clinic located in
                Gangnam—drawing attention with its flagship branch inside the
                iconic Lotte World Tower. The clinic offers “skin revision,” a
                personalized, data-driven approach to restoring one’s natural
                skin quality through tailored treatments and advanced
                diagnostics.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>1:1 Personalized Skin Revision:</b>
                  <br />
                  Every treatment is customized based on detailed skin analysis,
                  with dermatologists prescribing individualized plans combining
                  lasers, injectables, and cosmeceuticals .
                </li>
                <li>
                  <b>Elasticity & Laser Therapies:</b>
                  <br />
                  Offers Thermage FLX, Ulthera Primus, ONDA, InMode, and other
                  energy-based modalities designed to tighten, rejuvenate, and
                  treat pigmentation.
                </li>
                <li>
                  <b>Advanced Injectables & Fluid Therapy:</b>
                  <br />
                  Services include Botox, fillers, Sculptra, plus Fluid
                  Injection Therapy under the “Inner Beauty Program” to enhance
                  skin from within.
                </li>
                <li>
                  <b>Stem Cell & Scalp Correction:</b>
                  <br />
                  Incorporates regenerative options like Rejuran Healer,
                  stem-cell boosters, fat-dissolving injections, and hair-loss
                  restoration treatments .
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                Oganacell embodies a luxury-meets-medical atmosphere, with
                English, Chinese, and Japanese multilingual staff, private
                treatment spaces, and a comfortable environment tailored to
                global patients—all while emphasizing safe, reliable procedures
                backed by ten years of clinical data .
              </p>

              <h2>Conclusion</h2>
              <p>
                Oganacell Dermatology Clinic brings together personalized care,
                high-end technology, and evidence-based treatments in a
                luxurious setting. Ideal for individuals seeking deep, lasting
                skin transformation guided by expert dermatologists—in a
                refined, patient-centric clinic in the heart of Seoul.
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
