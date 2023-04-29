import React from "react";
import { mainLinks, secondaryLinks, utilLinks } from "../../mock/sidebarLinks";
import NavList from "./NavList";

function Sidebar({ link, setLink }) {
  return (
    <div className="bg-white p-2 w-1/5 min-h-screen">
      {/* Header */}
      <div className="p-2 sticky top-0 z-10 bg-white">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a3/Artemis_Networks_logo.png"
            className="h-20 w-20"
            alt=""
          />
          {/* <span className="font-bold text-2xl">Artemis</span> */}
        </div>
      </div>

      <hr />
      {/* Primary Section */}
      <NavList
        heading="MAIN"
        links={mainLinks}
        nestedLinks
        link={link}
        setLink={setLink}
      />

      {/* Secondary Section */}
      <NavList
        heading="SECONDARY"
        links={secondaryLinks}
        nestedLinks
        link={link}
        setLink={setLink}
      />

      {/* Utils Section */}
      <NavList heading="" links={utilLinks} link={link} setLink={setLink} />
    </div>
  );
}

export default Sidebar;
