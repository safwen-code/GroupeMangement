import React from "react";

import KmsItem from "./KmsItem";
import PropTypes from "prop-types";

const KmsContent = ({ Kmsinfo }) => {
  return (
    <div className="row">
      {Kmsinfo.map((km) => (
        <KmsItem kmInfo={km} id={km.id} />
      ))}
    </div>
  );
};

KmsContent.propTypes = {
  Kmsinfo: PropTypes.array,
};
export default KmsContent;
