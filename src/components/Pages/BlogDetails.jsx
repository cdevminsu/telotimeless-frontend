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
    date: "March 12",
    btnText: "Learn More",
    href: "/blog/blog-details",
  },
  {
    title: `JK Plastic Surgery Center`,
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_2.jpeg`,
    date: "March 11",
    btnText: "Learn More",
    href: "/blog/blog-details",
  },
  {
    title: "BANOBAGI",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_3.jpeg`,
    date: "March 9",
    btnText: "Learn More",
    href: "/blog/blog-details",
  },
];

const categoryData = [
  {
    title:
      "An Anatomical Approach to Lower Face Rejuvenation Presented at the Minimally Invasive Plastic Surgery Symposium",
    url: "https://www.k-health.com/news/articleView.html?idxno=81529",
  },
  {
    title:
      "Latest Implant Techniques for Breast Tissue Preservation Highlighted at Motiva Symposium",
    url: "https://www.medisobizanews.com/news/articleView.html?idxno=120765",
  },
  {
    title: "Atelier Plastic Surgery: Where You Become a Work of Art",
    url: "https://www.youtube.com/watch?v=bHgo_7HkzNM",
  },
];

export default function BlogDetails() {
  pageTitle("Blog Details");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="A Place Where You Become a Work of Art – Atelier Plastic Surgery" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/blog_details_1.jpeg`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is Atelier Plastic Surgery?</h2>
              <p>
                Atelier Plastic Surgery is a premium aesthetic clinic in Seoul,
                South Korea, renowned for its artistic approach to beauty
                enhancement. The clinic is dedicated to delivering
                natural-looking and elegant results through a blend of medical
                precision and aesthetic sensibility. <br />
                <br />
                With the philosophy of “Turning You Into a Work of Art,” Atelier
                emphasizes individualized treatment plans tailored to each
                patient’s unique features and goals.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Dermal Filler Artistry:</b>
                  <br />
                  Atelier is highly regarded for its sophisticated filler
                  techniques, particularly in areas such as the nose, under-eye,
                  and jawline. Treatments focus on harmonizing facial
                  proportions with minimal invasiveness and maximum naturalness.
                </li>
                <li>
                  <b>Breast Aesthetic Surgery:</b>
                  <br />
                  The clinic offers advanced breast lifting and augmentation
                  procedures with minimal scarring and high aesthetic standards,
                  guided by both technical expertise and artistic design.
                </li>
                <li>
                  <b>Facial Contouring & Balance:</b>
                  <br />
                  Rather than altering appearances, Atelier aims to refine and
                  enhance a patient’s innate beauty through customized facial
                  contouring procedures.
                </li>
                <li>
                  <b>Doctor-Centered Care:</b>
                  <br />
                  Headed by Dr. Juyoung Ko, the clinic is known for its
                  transparent consultations, clear communication, and a focus on
                  long-term beauty planning, rather than one-time results.
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                At Atelier, beauty is seen as a form of personal expression. The
                environment is elegant and calm, supporting patients through
                every step of their aesthetic journey—from in-depth
                consultations to follow-up care. The clinic avoids overly
                artificial changes and instead pursues “invisible
                beauty”—refined improvements that look effortless and true to
                the patient’s character.
              </p>

              <blockquote
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/blog/blog_details_2.jpeg)`,
                }}
              >
                <p>
                  “Treatments at Atelier Plastic Surgery are designed with both
                  precision and artistry, often involving a personalized
                  combination of advanced techniques and aesthetic insight.”
                </p>
              </blockquote>

              <h2>Conclusion</h2>
              <p>
                Atelier Plastic Surgery is more than just a clinic—it is a space
                where medicine and art meet. For those seeking sophisticated,
                personalized aesthetic care in Korea, Atelier offers a trusted
                and artistic solution. <br />
                <br />
                Whether it’s your first consultation or your next chapter in
                self-confidence, Atelier is committed to helping you become your
                best self—gracefully and naturally.
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
