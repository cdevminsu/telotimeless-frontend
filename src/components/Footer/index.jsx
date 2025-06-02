import React from "react";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import TextWidget from "../Widget/TextWidget";
const menuDataOne = [
  { title: "About Us", href: "/about" },
  { title: "Departments", href: "/departments" },
  { title: "Doctors", href: "/doctors" },
  { title: "Timetable", href: "/timetable" },
  { title: "Appointment", href: "/appointments" },
  { title: "Testimonials", href: "/" },
];
const menuDataTwo = [
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
  { title: "FAQs", href: "/" },
  { title: "Privacy Policy", href: "/" },
  { title: "Terms and Conditions", href: "/" },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2025 telotimeless. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
