"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching contact bar data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="contact-bar">
      <div className="container">
        <div className="contact-bar-inner">
          {/* Contact items */}
          <div className="contact-bar-items">
            {contactBarData?.contactItems?.map((value: any, index: number) => (
              <Link
                key={index}
                href={value?.link || "#!"}
                target={value?.link?.startsWith("http") ? "_blank" : undefined}
                rel={value?.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-bar-link"
              >
                <Image
                  src={getImgPath(value?.icon)}
                  alt={value?.type}
                  width={18}
                  height={18}
                  className="contact-bar-icon"
                />
                {value?.label}
              </Link>
            ))}
          </div>

          {/* Social icons — plain icon links, no wrapper divs */}
          <div className="contact-bar-socials">
            {contactBarData?.socialItems?.map((value: any, index: number) => (
              <Link
                key={index}
                href={value?.link || "#!"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-plain"
                aria-label={value?.platform}
              >
                <Image
                  src={getImgPath(value?.icon)}
                  alt={value?.platform}
                  width={24}
                  height={24}
                  className="social-icon-img"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
