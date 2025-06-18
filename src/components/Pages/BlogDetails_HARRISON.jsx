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
    title: "Preparing for the Robotic Era in Spinal Treatment and Surgery",
    url: "https://magazine.hankyung.com/business/article/202505020018b",
  },
  {
    title:
      "Posterior Endoscopic Cervical Discectomy: A Case Study from Harrison",
    url: "http://www.hitnews.co.kr/news/articleView.html?idxno=62608",
  },
  {
    title:
      "There is Nothing in the World That Does Not Change” by Dr. Hyeun-Sung Kim",
    url: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=202505167523b",
  },
];

export default function BlogDetails_HARRISON() {
  pageTitle("HARRISON");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Advanced Minimally Invasive Spine Care at Harrison Spinartus Hospital" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/HARRISON.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is Harrison Spinartus Hospital?</h2>
              <p>
                Harrison Spinartus Hospital is a specialized spinal care center
                located in the heart of Seoul’s Gangnam district. Known for its
                expertise in minimally invasive spine surgery, the hospital
                provides advanced endoscopic and robotic-assisted procedures
                that focus on reducing pain, minimizing recovery time, and
                improving long-term patient outcomes. <br />
                <br />
                With a philosophy of “Precision in Motion,” Harrison offers
                patient-centered care led by globally recognized neurosurgeons
                and spine specialists.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Endoscopic Spine Surgery:</b>
                  <br />
                  Harrison is a pioneer in full endoscopic techniques for
                  treating herniated discs and spinal stenosis. These procedures
                  are performed through small incisions, resulting in faster
                  recovery, minimal scarring, and reduced complications.
                </li>
                <li>
                  <b>Biportal Endoscopic Techniques:</b>
                  <br />A cutting-edge approach that allows for a wider surgical
                  field while preserving soft tissue, offering excellent
                  outcomes in cervical, thoracic, and lumbar cases.
                </li>
                <li>
                  <b>Robotic-Assisted Surgery:</b>
                  <br />
                  Harrison is preparing for the future of robotic-guided spinal
                  procedures, enhancing precision and safety through advanced
                  technology.
                </li>
                <li>
                  <b>International Patient Services:</b>
                  <br />
                  The hospital offers multilingual support, travel assistance,
                  and personalized care programs for patients visiting from
                  abroad.
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                Harrison believes that effective healing begins with trust. From
                the first consultation to post-operative rehabilitation, the
                hospital provides comprehensive care in a clean, modern, and
                welcoming environment. Patients receive thorough diagnostic
                evaluations, customized surgical plans, and attentive follow-up
                to ensure long-term spine health.
              </p>

              <h2>Conclusion</h2>
              <p>
                Harrison Spinartus Hospital combines medical innovation,
                surgical expertise, and heartfelt service to deliver world-class
                spinal care. Whether you're suffering from chronic back pain or
                seeking a second opinion on surgery, Harrison offers a safe,
                effective, and globally trusted solution. <br />
                <br />
                Regain mobility and rediscover life—with confidence, comfort,
                and clarity.
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
