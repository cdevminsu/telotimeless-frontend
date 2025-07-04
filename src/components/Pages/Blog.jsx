import React from "react";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
const blogData = [
  {
    title: "Atelier",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_1.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/ATELIER",
    socialShare: true,
  },
  {
    title: `RNWOOD`,
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_2.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/RNWOOD",
    socialShare: true,
  },
  {
    title: "JK Plastic Surgery Center",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_3.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/JK",
    socialShare: true,
  },
  {
    title: "BANOBAGI",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_4.jpeg`,
    date: "Plastic Surgery",
    btnText: "Learn More",
    href: "/blog/BANOBAGI",
    socialShare: true,
  },
  {
    title: "ORGANACELL",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_5.jpeg`,
    date: "Dermatology",
    btnText: "Learn More",
    href: "/blog/ORGANACELL",
    socialShare: true,
  },
  {
    title: "THE HEAL",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_6.jpeg`,
    date: "Dermatology",
    btnText: "Learn More",
    href: "/blog/THEHEAL",
    socialShare: true,
  },
  {
    title: "HEER",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_7.jpeg`,
    date: "Dermatology",
    btnText: "Learn More",
    href: "/blog/HEER",
    socialShare: true,
  },
  {
    title: "Kwangdong Hospital",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_8.jpeg`,
    date: "Feb 26",
    btnText: "Learn More",
    href: "/blog/KWANGDONG",
    socialShare: true,
  },
  {
    title: "Harrison Hospital",
    thumbUrl: `${process.env.PUBLIC_URL}/images/blog/post_9.jpeg`,
    date: "Feb 25",
    btnText: "Learn More",
    href: "/blog/HARRISON",
    socialShare: true,
  },
];

export default function Blog() {
  pageTitle("Blog");
  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Verified Hospital Partners" />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={blogData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Your Health Deserves <br/>the Front Seat."
          subTitle="Connect with trusted medical experts <br />and start your journey to better health today."
          imgUrl={`${process.env.PUBLIC_URL}/images/doctors/banner_img_3.png`}
        />
      </Section>
    </>
  );
}
