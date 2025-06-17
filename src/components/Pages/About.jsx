import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
const departmentData = [
  {
    title: "Expert Medical Curation",
    subTitle:
      "Specialist matching, hospital selection, and itinerary planning based on individual medical needs",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/calendar_white.svg`,
    href: "/departments/department-details",
  },
  {
    title: "Hospital Booking & Schedule Coordination",
    subTitle:
      "Appointment booking, translation support, and full schedule coordination for your treatment trip",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/calendar_white.svg`,
    href: "/departments/department-details",
  },
  {
    title: "Advanced Treatments & Check-ups",
    subTitle:
      "Cancer, heart, stem cell therapy, and full-body health screenings in top-tier hospitals",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/calendar_white.svg`,
    href: "/departments/department-details",
  },
  {
    title: "All-in-One Medical Travel",
    subTitle:
      "Airport pickup, personal assistance, and curated K-culture activities during your visit",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/calendar_white.svg`,
    href: "/departments/department-details",
  },
  {
    title: "Transparent Pricing & Custom Estimates",
    subTitle:
      "Personalized cost estimates and clear pricing based on your selected services and budget",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/calendar_white.svg`,
    href: "/departments/department-details",
  },
];

const featureListData = [
  {
    title: "Verified Partners",
    subTitle:
      "We work with KHIDI-appointed GHKOL consultants and certified providers to ensure reliable and medically sound care.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/professional.svg`,
  },
  {
    title: "Expert Guidance",
    subTitle:
      "Our medical advisors offer tailored consultations and connect you with the right treatment for your unique needs.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/comprehensive.svg`,
  },
  {
    title: "Trusted Quality",
    subTitle:
      "Every hospital and clinic is rigorously vetted to meet international healthcare and safety standards.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/patient.svg`,
  },
  {
    title: "Transparent Process",
    subTitle:
      "We provide clear pricing, honest communication, and no hidden fees throughout your medical journey.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/facilities.svg`,
  },
];

const funFactData = [
  { number: "20+", title: "Verified Medical Partners" },
  { number: "100%", title: "GHKOL Expert Involvement" },
  { number: "10+", title: "Medical Specialties Covered" },
  { number: "48-", title: "Hour Response Time" },
  { number: "90%", title: "Patient Satisfaction Rate" },
];

const teamData = [
  {
    imgUrl: `${process.env.PUBLIC_URL}/images/about/doctor_1.png`,
    name: "Dr. Min-Hee Ryu",
    designation: "Founder of RNWOOD",
    description:
      "Renowned for facial anatomy expertise and global academic leadership, with extensive experience in top Korean clinics and global societies.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: `${process.env.PUBLIC_URL}/images/about/doctor_2.png`,
    name: "Byung-Il Kang, CEO",
    designation: "GHKOL Consultant",
    description:
      "A veteran in global healthcare consulting with over 60 projects, recognized by the Korean government for advancing Korea's international medical presence.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
  {
    imgUrl: `${process.env.PUBLIC_URL}/images/about/doctor_3.png`,
    name: "Dr. Juyoung Go",
    designation: "Director of Atelier",
    description:
      "Expert in reconstructive and aesthetic surgery, with academic and clinical excellence from Samsung Medical Center to international fellowships.",
    social: [
      { icon: "fa6-brands:facebook-f", href: "/about" },
      { icon: "fa6-brands:linkedin-in", href: "/about" },
      { icon: "fa6-brands:twitter", href: "/about" },
    ],
  },
];

const galleryData = [
  { imgUrl: `${process.env.PUBLIC_URL}/images/about/portfolio_2_lg.jpeg` },
  { imgUrl: `${process.env.PUBLIC_URL}/images/about/portfolio_3_lg.jpeg` },
  { imgUrl: `${process.env.PUBLIC_URL}/images/about/portfolio_1_lg.jpeg` },
  { imgUrl: `${process.env.PUBLIC_URL}/images/about/portfolio_4_lg.jpeg` },
  { imgUrl: `${process.env.PUBLIC_URL}/images/about/portfolio_5_lg.jpeg` },
];
const awardData = [
  {
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
    title: "Medical Korea Global Healthcare Award",
  },
  {
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
    title: "Asia Star Award for Medical Innovation",
  },
  {
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
    title: "KHIDI Global Consulting Excellence Award",
  },
  {
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
    title: "Ministry of Health and Welfare Contribution Award",
  },
];

export default function About() {
  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl={`${process.env.PUBLIC_URL}/images/about/banner_bg.svg`}
        imgUrl={`${process.env.PUBLIC_URL}/images/about/banner_img.png`}
        title="Telotimeless <br />K-Medical Curation Platform"
        subTitle="We curate top Korean medical institutions to provide patients worldwide with safe, expert-guided care."
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl={`${process.env.PUBLIC_URL}/images/about/why_choose_us.jpeg`}
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl={`${process.env.PUBLIC_URL}/images/about/fun_fact_bg.jpeg`}
          data={funFactData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Verified Experts"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Global Awards and <br />Recognition"
          sectionTitleUp="ACHIEVEMENTS"
          sectionSubTitle="Honored for leadership and excellence in <br />international medical consulting and services."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl={`${process.env.PUBLIC_URL}/images/about/banner_bg_2.jpeg`}
          title="Take Charge of Your <br />Health Today"
          subTitle="Schedule your personalized consultation <br />with our top-rated medical experts now."
          center
        />
      </Section>
    </>
  );
}
