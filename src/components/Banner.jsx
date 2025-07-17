import { useEffect } from "react";
import "./Banner.css";

export default function Banner({ title, subtitle }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const bannerBg = document.querySelector(".banner-img");
      const bannerDesc = document.querySelector(".banner-desc");
      if (bannerBg) {
        bannerBg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
      if (bannerDesc) {
        bannerDesc.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="banner">
      <img
        src="https://www.acceptmission.com/wp-content/uploads/2021/02/good-ideas.jpg.webp"
        alt=""
        className="banner-img"
      />
      <div className="banner-desc">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
