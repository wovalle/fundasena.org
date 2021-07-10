import Link from "next/link";
import { useRouter, Router } from "next/router";
import { useEffect, useState } from "react";
import constants from "../constants.json";

const MenuItem = ({ url, name, options, children }) => (
  <li key={url} className="menu-item">
    <>
      <Link href={url} passHref>
        <a href={url}>
          <>
            {name}
            {options?.length && <i className="fa fa-angle-down" />}
          </>
        </a>
      </Link>

      {children && <ul>{children}</ul>}
    </>
  </li>
);

export function Header() {
  const defaultMenuClass = "navy";
  const expandMenuClass = "expanded";
  const [menuListClass, setMenuListClass] = useState(defaultMenuClass);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setMenuListClass(defaultMenuClass);
    });

    return () => router.events.off("routeChangeStart");
  }, [router]);

  const menu = constants.menu.map((i) => {
    const options = i.options?.map((o) => <MenuItem key={o.url} {...o} />);

    return (
      <MenuItem key={i.url} {...i}>
        {options?.length ? options : null}
      </MenuItem>
    );
  });

  const onClickSandwich = () => {
    if (menuListClass.includes(expandMenuClass)) {
      setMenuListClass(defaultMenuClass);
    } else {
      setMenuListClass((prevClass) => `${prevClass} ${expandMenuClass}`);
    }
  };

  return (
    <header>
      {/* <!-- Outer Starts --> */}
      <div className="outer">
        {/* <!-- Top bar starts --> */}
        <div className="top-bar">
          <div className="container">
            {/* <!-- Contact starts --> */}
            <div className="tb-contact pull-left">
              {/* <!-- Email --> */}
              <i className="fa fa-envelope color"></i>{" "}
              <a href="mailto:fundacionmamasena@gmail.com">
                fundacionmamasena@gmail.com
              </a>
            </div>
            {/* <!-- Contact ends --> */}

            {/* <!-- Social media starts --> */}
            <div className="tb-social pull-right">
              <div className="brand-bg text-right">
                {/* <!-- Brand Icons --> */}
                <a
                  href="https://www.facebook.com/fundasenard"
                  className="facebook"
                >
                  <i className="fa fa-facebook square-2 rounded-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/fundasenard"
                  className="instagram"
                >
                  <i className="fa fa-instagram square-2 rounded-1"></i>
                </a>
                <Link href="/feed.xml">
                  <a className="google-plus">
                    <i className="fa fa-rss square-2 rounded-1" />
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Social media ends --> */}
            <div className="clearfix"></div>
          </div>
        </div>

        {/* <!-- Top bar ends --> */}

        {/* <!-- Header two Starts --> */}
        <div className="header-2">
          {/* <!-- Container --> */}
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-8">
                {/* <!-- Logo section --> */}
                <div className="logo">
                  <h1>
                    <Link href="/">{constants.acronym}</Link>
                  </h1>
                </div>
              </div>
              <div className="col-md-9 col-xs-4">
                {/* <!-- Navigation starts.  --> */}
                <div className="navy">
                  <button
                    id="menu-button"
                    className="visible-xs visible-sm"
                    onClick={onClickSandwich}
                  ></button>
                  <ul className={`${menuListClass} hidden-sm`}>
                    {/* <!-- Main menu --> */}
                    {menu}
                  </ul>
                </div>
                {/* <!-- Navigation ends --> */}
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
