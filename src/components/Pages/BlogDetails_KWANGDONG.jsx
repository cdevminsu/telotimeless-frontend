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
      "Kwangdong Hospital of Traditional Korean Medicine – Bookimed Profile",
    url: "https://us-uk.bookimed.com/clinic/kwangdong-hospital-of-traditional-korean-medicine/?utm_source=chatgpt.com",
  },
  {
    title: "Medical Korea: Kwangdong Hospital Traditional Korean Medicine",
    url: "https://www.medicalkorea.or.kr/en/mostvisitedmedicalinstitutions/view?medicalProviderNo=10115&utm_source=chatgpt.com",
  },
  {
    title:
      "How I rebooted my beauty regimen in South Korea… At Kwangdong Hospital of Traditional Korean Medicine",
    url: "https://www.washingtonpost.com/lifestyle/travel/how-i-rebooted-my-beauty-regimen-in-south-korea-a-country-that-takes-skin-care-seriously/2017/06/29/ead56364-4f8f-11e7-be25-3a519335381c_story.html?utm_source=chatgpt.com",
  },
];

export default function BlogDetails_KWANGDONG() {
  pageTitle("KWANGDONG");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="East Meets West in Wellness: E‑Kwangdong Oriental Medicine Hospital" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/KWANGDONG.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is E‑Kwangdong Hospital?</h2>
              <p>
                E‑Kwangdong Hospital of Traditional Korean Medicine, founded in
                1994 and based in Gangnam, Seoul, is a renowned integrative
                healthcare center. Combining scientific principles with Eastern
                medicinal expertise, it offers a wide range of services—from
                acupuncture and herbal therapy to wellness aesthetics and weight
                management—delivered by experienced specialists and supported by
                robust diagnostic systems. With strong government recognition
                and excellence in international patient service, E‑Kwangdong is
                a trusted destination for both health care and cosmetic wellness
                seekers.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Holistic Aesthetic Medicine:</b>
                  <br />
                  Includes cosmetic facial acupuncture, anti-aging treatments,
                  collagen and elasticity boosters, detox wraps, and skin-tone
                  improvement therapies blending Eastern techniques with modern
                  science.
                </li>
                <li>
                  <b>Wellness & Weight Management:</b>
                  <br />
                  Personalized herbal medicine regimens and detox programs
                  support sustainable weight loss, immunity enhancement, and
                  fatigue recovery.
                </li>
                <li>
                  <b>Integrative East–West Care:</b>
                  <br />
                  With systems in place for MRIs and Western diagnostics,
                  E‑Kwangdong designs collaborative treatment plans that combine
                  Korean medicine with conventional therapies .
                </li>
                <li>
                  <b>International Patient Focus:</b>
                  <br />
                  The hospital maintains 1:1 interpretation services (English,
                  Japanese, Chinese, Russian, Mongolian), private rooms, and
                  VIP-level coordination—ideal for foreign visitors .
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                E‑Kwangdong’s philosophy centers on nurturing inherent
                balance—addressing health, appearance, and vitality together.
                Treatments are tailored through thorough assessments and
                delivered in private, multilingual-supportive settings, ensuring
                comfort, confidentiality, and personalized healing.
              </p>

              <h2>Conclusion</h2>
              <p>
                E‑Kwangdong Hospital blends the best of Korean and Western
                medicine to offer a unique approach to aesthetic wellness and
                integrated health care. Whether you seek cosmetic rejuvenation,
                wellness support, or East–West fusion therapies, this hospital
                offers trustworthy, accredited, and culturally sensitive
                care—rooted in decades of expertise and public recognition.
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
