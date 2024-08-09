import { useEffect } from "react";

const handleScroll = () => {
  const scroll = window.scrollY;
  const stickyNavbar = document.querySelector(".sticky-navbar");
  const backToTop = document.querySelector(".back-to-top");
  const customStickyElements = document.querySelector(
    ".custom-sticky-elements"
  ) as HTMLElement;
  const articleBlog = document.querySelector(
    ".article-blog-content"
  ) as HTMLElement;

  if (stickyNavbar && backToTop) {
    if (scroll < 50) {
      stickyNavbar.classList.remove("sticky");
      (backToTop as HTMLElement).style.display = "none";
    } else {
      stickyNavbar.classList.add("sticky");
      (backToTop as HTMLElement).style.display = "block";
    }
  }

  if (customStickyElements && articleBlog) {
    const sectionHeader = document.querySelector(
      ".section-header"
    ) as HTMLElement;
    const sectionHeaderHeight = sectionHeader?.offsetHeight || 0;
    const customStickyElementsOffset =
      customStickyElements.offsetTop - sectionHeaderHeight;
    const articleBlogHeight = articleBlog.offsetHeight;
    const articleBlogOffset = articleBlog.offsetTop + articleBlogHeight;

    if (scroll > customStickyElementsOffset && scroll < articleBlogOffset) {
      customStickyElements.classList.add("custom-sticky");
      const sidebarSocial = customStickyElements.querySelector(
        ".sidebar-social"
      ) as HTMLElement;
      if (sidebarSocial) {
        sidebarSocial.style.top = `${sectionHeaderHeight + 30}px`;
      }
    } else {
      customStickyElements.classList.remove("custom-sticky");
    }
  }
};

const useScrollHandler = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollHandler;
