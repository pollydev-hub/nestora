import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menuLinks = [
  { path: "/", label: "menu.news" },
  { path: "/about", label: "menu.about" },
  { path: "/contact", label: "menu.contact" },
  { path: "/products", label: "menu.products" }
];

const Section = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const bannerSrc =
    lang === "en"
      ? "/img/left-banner-en.png"
      : "/img/left-banner-ru.png";
  return (
    <section className="main-section">
      <nav>
        <ul className="section-menu-list">
          {menuLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  "section-menu-link" + (isActive ? " active" : "")
                }
                end={link.path === "/"}
              >
                {t(link.label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <img src={bannerSrc} alt="Баннер" className="sidebar-banner" />
    </section>
  );
};

export default Section;
