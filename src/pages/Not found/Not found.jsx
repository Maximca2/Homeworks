import React from "react";

const pageNotFound =
  "https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="">
        <img src={pageNotFound} alt="img not found" />
      </div>
    </div>
  );
};

export default NotFound;
