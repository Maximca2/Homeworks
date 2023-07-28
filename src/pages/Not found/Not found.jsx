import React from "react";

const pageNotFound =
  "https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg";

const NotFound = () => {
  return (
    <div>
        <img src={pageNotFound} alt="img not found" />
    </div>
  );
};

export default NotFound;
