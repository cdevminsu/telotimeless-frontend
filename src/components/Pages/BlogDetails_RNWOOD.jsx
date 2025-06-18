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
      "RNWOOD Plastic Surgery Center for Facial Rejuvenation in Gangnam‑Gu, Seoul, South Korea",
    url: "https://www.whatclinic.com/cosmetic-plastic-surgery/south-korea/seoul/gangnam-gu/rnwood-plastic-surgery?utm_source=chatgpt.com",
  },
  {
    title: "Dr. Ryu – RNWood Plastic Surgery",
    url: "https://www.reddit.com/r/SeoulPlasticSurgery/comments/1kgonxh/dr_ryu_rnwood_plastic_surgery/?utm_source=chatgpt.com",
  },
  {
    title:
      "post‑op, the pain was minimal, and the aftercare was impressive: hair washing, red/blue light therapy, and oxygen chamber treatments…",
    url: "https://www.reddit.com/r/SeoulPlasticSurgery/comments/1kgonxh/dr_ryu_rnwood_plastic_surgery/?utm_source=chatgpt.com",
  },
];

export default function BlogDetails_RNWOOD() {
  pageTitle("RNWOOD");
  return (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title="Redefining Facial Rejuvenation: RNWOOD Plastic Surgery Center" />
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
          src={`${process.env.PUBLIC_URL}/images/blog/RNWOOD.png`}
          alt="Blog Details"
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_blog_details">
              <h2>What is RNWOOD Plastic Surgery Center?</h2>
              <p>
                RNWOOD Plastic Surgery, located in Apgujeong, Gangnam-gu, Seoul,
                is a boutique facial rejuvenation clinic led by board-certified
                surgeon Dr. Min‑Hee Ryu. Dr. Ryu is internationally recognized
                for his expertise in deep-plane facelifts, cadaver-based anatomy
                training, and contributions to aesthetic surgery academia . The
                clinic emphasizes precision, personalized care, and advanced
                aftercare, attracting both domestic and global clients seeking
                natural yet transformative results.
              </p>

              <h2>Signature Services and Specialties</h2>
              <ol>
                <li>
                  <b>Deep Plane Facelift & Neck Lift:</b>
                  <br />
                  Highly specialized procedures performed by Dr. Ryu, offering
                  minimal downtime and long-lasting outcomes with focus on
                  structural rejuvenation.
                </li>
                <li>
                  <b>Brow Lift & Eyelid Surgery:</b>
                  <br />
                  Aesthetic enhancements employing advanced techniques to
                  refresh and harmonize facial balance.
                </li>
                <li>
                  <b>Fat Transfer & Submentoplasty:</b>
                  <br />
                  Complementary techniques to restore volume and refine contours
                  in a single-session approach for holistic facial rejuvenation.
                </li>
                <li>
                  <b>Luxury Post‑Op Care:</b>
                  <br />
                  Includes services like hyperbaric oxygen therapy, light-based
                  wound care, daily hair washing, and dedicated staff
                  support—ensuring a comfortable recovery experience .
                </li>
              </ol>

              <h2>Patient Experience and Philosophy</h2>
              <p>
                RNWOOD offers a warm, personalized environment built around
                trust and academic excellence. Patients frequently highlight
                seamless communication—from initial online consults to post-op
                care—as well as the attentive, non-pressured atmosphere . The
                clinic manages logistics, lunges into recovery protocols, and
                provides multilingual support for international patients.
              </p>

              <h2>Conclusion</h2>
              <p>
                RNWOOD Plastic Surgery stands out as an elite clinic for
                individuals seeking deep-plane facelifts and facial rejuvenation
                with minimal downtime. With Dr. Ryu’s surgical mastery, academic
                leadership, and a patient-centric care model, RNWOOD offers a
                refined antidote to impersonal high-volume clinics—delivering
                natural, elegant, and enduring results.
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
