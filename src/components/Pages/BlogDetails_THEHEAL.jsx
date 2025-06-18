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
    title: "7 Foreigner-Friendly Skin Clinics to Go to in Seoul",
    url: "https://www.reddit.com/r/koreatravel/comments/1hycxut/skin_clinics_recommendations_warnings/?utm_source=chatgpt.com",
  },
  {
    title: "I Went to South Korea for a Week of Cutting-Edge Skin Treatments",
    url: "https://www.allure.com/story/best-beauty-treatments-seoul-south-korea?utm_source=chatgpt.com",
  },
  {
    title:
      "Inside Korea's Intricate Approach to Treating Fine Lines and Wrinkles",
    url: "https://www.allure.com/story/how-to-treat-fine-lines-wrinkles-in-korea?utm_source=chatgpt.com",
  },
];

export default function BlogDetails_THEHEAL() {
  pageTitle("THEHEAL");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Revitalize & Restore: The HEAL Dermatology Clinic, Sinsa" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/THEHEAL.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is The HEAL Dermatology Clinic?</h2>
              <p>
                The HEAL Dermatology Clinic is a high-end dermatology practice
                located on the 7th floor of Sinsa Square, just a 5‑minute walk
                from Sinsa Station (Lines 3 & Shinbundang), Gangnam, Seoul.
                Expertly combining medical dermatology with aesthetic skin care,
                the clinic provides advanced treatments—ranging from acne and
                pigmentation management to anti-aging injectables and laser
                rejuvenation—all under the guidance of board-certified
                specialists, including founder Dr. Park Ju‑Hyuk, a leader in
                both clinical and cosmetic dermatology.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Comprehensive Skin Rejuvenation:</b>
                  <br />
                  Services include fractional CO₂ lasers, IPL, HydraFacial,
                  chemical peels, microneedling, and PRP for glow, texture, and
                  tone enhancement.
                </li>
                <li>
                  <b>Injectables & Anti-Aging:</b>
                  <br />
                  Botox and dermal fillers for fine lines, jawline sculpting,
                  under-eye refreshment, double-chin correction, and subtle
                  facial contouring.
                </li>
                <li>
                  <b>Medical Dermatology:</b>
                  <br />
                  Diagnosis and treatment for acne, psoriasis, eczema, hives,
                  fungal infections, pigmentation disorders, skin cancer
                  screenings, and nail issues.
                </li>
                <li>
                  <b>Advanced Lifting & Tightening:</b>
                  <br />
                  Non-surgical lifts using Thermage, Ultherapy, thread lifts,
                  HIFU, and laser tightening for sagging skin and improved
                  elasticity.
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                With English and Korean-speaking staff, private consultation
                rooms, and a patient-first approach, The HEAL Clinic is known
                for delivering tailored care—from initial skin analysis to
                ongoing follow-up. The environment is designed to be soothing,
                discreet, and personalized.
              </p>

              <h2>Conclusion</h2>
              <p>
                The HEAL Dermatology Clinic merges medical expertise, aesthetic
                precision, and compassionate care. Serving both domestic and
                international clients, the clinic offers a full spectrum of
                skincare solutions—from clinical treatment to cosmetic
                enhancement—centering on individual needs and natural results.
                Ideal for those seeking a trusted, expert-driven approach to
                healthy, beautiful skin in the heart of Gangnam.
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
