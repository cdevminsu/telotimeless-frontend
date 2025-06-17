import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import BrandsSection from "../Section/BrandsSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import AwardSection from "../Section/AwardSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";
const featureListData = [
  {
    iconSrc: `${process.env.PUBLIC_URL}/images/home_1/compassion.svg`,
    title: "Compassion",
    subTitle:
      "We understand that traveling abroad for medical care can feel overwhelming. At TeloTimeless, we create a warm, caring experience where every guest feels safe, heard, and supported—before, during, and after treatment.",
  },
  {
    iconSrc: `${process.env.PUBLIC_URL}/images/home_1/excellence.svg`,
    title: "Excellence",
    subTitle:
      "We partner only with top-tier hospitals and specialists in Korea. Through curated services and constant quality checks, we ensure that every step of your journey meets the highest standards of safety and care.",
  },
  {
    iconSrc: `${process.env.PUBLIC_URL}/images/home_1/integrity.svg`,
    title: "Integrity",
    subTitle: `We value honesty, transparency, and ethics. From consultations to cost breakdowns, TeloTimeless ensures clear communication and always prioritizes the best interests of our clients in every decision.`,
  },
  {
    iconSrc: `${process.env.PUBLIC_URL}/images/home_1/respect.svg`,
    title: "Respect",
    subTitle:
      "We embrace all cultures, backgrounds, and beliefs. Our multilingual support and personalized services are designed to make every individual feel respected and genuinely cared for—wherever you’re from.",
  },
  {
    iconSrc: `${process.env.PUBLIC_URL}/images/home_1/teamwork.svg`,
    title: "Teamwork",
    subTitle:
      "Your health journey is a shared mission. We work closely with hospitals, interpreters, and our care coordinators to deliver a seamless, end-to-end experience tailored just for you.",
  },
];
const brandData = [
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_1.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_2.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_3.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_4.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_5.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_6.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_7.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_8.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_9.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_10.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_11.png`, imgAlt: "Brand" },
  { imgUrl: `${process.env.PUBLIC_URL}/images/brand_12.png`, imgAlt: "Brand" },
];
const faqData = [
  {
    title: "What services does TeloTimeless provide?",
    content:
      "TeloTimeless offers end-to-end medical tourism coordination, including hospital matchmaking, appointment booking, interpretation, travel concierge services, and post-treatment support.",
  },
  {
    title: "Can I choose the hospital or doctor myself?",
    content:
      "Yes. While we curate top medical institutions for each specialty, you are free to choose your preferred hospital or doctor. We also provide expert recommendations based on your condition and goals.",
  },
  {
    title: "Is TeloTimeless available to international patients only?",
    content:
      "No. Our services are available to both international and domestic clients seeking high-quality medical care and wellness experiences in Korea.",
  },
  {
    title: "How does TeloTimeless ensure the quality of hospitals?",
    content:
      "We partner only with accredited hospitals and specialists with proven track records. Our team continuously evaluates partner institutions based on safety, expertise, and patient satisfaction.",
  },
  {
    title: "Can TeloTimeless help with travel arrangements too?",
    content:
      "Absolutely. We offer integrated concierge services, including airport pickup, hotel bookings, interpretation, and local guides to make your medical journey stress-free and comfortable.",
  },
];
const blogData = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    thumbUrl: `${process.env.PUBLIC_URL}/images/home_1/post_1.jpeg`,
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    thumbUrl: `${process.env.PUBLIC_URL}/images/home_1/post_2.jpeg`,
    date: "May 4, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    thumbUrl: `${process.env.PUBLIC_URL}/images/home_1/post_3.jpeg`,
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
];
const awardData = [
  {
    title: "Malcolm Baldrige National Quality Award",
    subTitle:
      "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
  },
  {
    title: "HIMSS Davies Award",
    subTitle:
      "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
  },
  {
    title: "Healthgrades National’s Best Hospital",
    subTitle:
      "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
  },
  {
    title: "Joint Commission Gold Seal of Approval",
    subTitle:
      "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
    iconUrl: `${process.env.PUBLIC_URL}/images/icons/award.svg`,
  },
];
const departmentData = [
  {
    title: "Total Plastic Surgery",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/1.png`,
    href: "departments/department-details",
  },
  {
    title: "Partial Plastic Surgery",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/2.png`,
    href: "departments/department-details",
  },
  {
    title: "Dermatology & Aesthetic",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/3.png`,
    href: "departments/department-details",
  },
  {
    title: "Spine & Joint",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/4.png`,
    href: "departments/department-details",
  },
  {
    title: "Cardiology & Ophthalmology",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/5.png`,
    href: "departments/department-details",
  },
  {
    title: "Health Checkups",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/6.png`,
    href: "departments/department-details",
  },
  {
    title: "Cancer Treatment",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/7.png`,
    href: "departments/department-details",
  },
  {
    title: "Stem Cell Therapy",
    iconUrl: `${process.env.PUBLIC_URL}/images/home_1/8.png`,
    href: "departments/department-details",
  },
];

export default function Home() {
  pageTitle("Home");
  return (
    <>
      <Hero
        title="Your partner in curated health care"
        subTitle="We are committed to connecting you with Korea's top medical experts, offering tailored care and travel support for a safe, smooth healing journey."
        bgUrl={`${process.env.PUBLIC_URL}/images/home_1/hero_bg.jpeg`}
        imgUrl={`${process.env.PUBLIC_URL}/images/home_1/hero_img.png`}
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/xy2iTHUHm_g"
        infoList={[
          {
            title: "Hotline",
            subTitle: "+82 1088698508",
            iconUrl: `${process.env.PUBLIC_URL}/images/contact/icon_1.svg`,
          },
          {
            title: "Email",
            subTitle: "sonadorBIK@gmail.com",
            iconUrl: `${process.env.PUBLIC_URL}/images/icons/tick.svg`,
          },
          {
            title: "Location",
            subTitle: "Seoul, KR",
            iconUrl: `${process.env.PUBLIC_URL}/images/icons/pin.svg`,
          },
        ]}
        btnText="Book Now"
        btnUrl="/"
      />
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl={`${process.env.PUBLIC_URL}/images/home_1/about.png`}
          spiningImgUrl={`${process.env.PUBLIC_URL}/images/home_1/about_mini.svg`}
          title="About Us"
          subTitle="TeloTimeless"
          featureList={[
            {
              featureListTitle: "A team of healthcare coordination experts",
              featureListSubTitle:
                "Dedicated to connecting patients with leading Korean specialists. We deliver comprehensive care solutions tailored to each individual’s medical needs.",
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Medical Categories"
          bgUrl={`${process.env.PUBLIC_URL}images/home_1/department_bg.svg`}
          data={departmentData}
        />
      </Section>

      {/* End Departments Section */}
      {/* Start Award Section */}
      {/* End Award Section */}
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Milestones"
          sectionTitleDown="Our Main Pillars"
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl={`${process.env.PUBLIC_URL}/images/home_1/cta_bg.svg`}
          imgUrl={`${process.env.PUBLIC_URL}/images/home_1/cta_img.png`}
          title="Your Health Journey Starts Here"
          subTitle="Connect with Korea’s top hospitals through our trusted concierge service"
        />
      </Section>
      {/* End Banner Section */}
      {/* Start Blog Section */}
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section>
      {/* End Brand Section */}
    </>
  );
}
