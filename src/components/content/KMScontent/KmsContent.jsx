import React from "react";

import KmsItem from "./KmsItem";
import PropTypes from "prop-types";

const KmsContent = ({ Kmsinfo, loading }) => {
 
  return (
    <div className="row">
      {loading && Kmsinfo.length >= 0 ? (
        Kmsinfo.map((km) => <KmsItem userinfo={km} id={km.id} />)
      ) : (
        <h5>no kmsInof</h5>
      )}
    </div>
  );
};

KmsContent.propTypes = {
  Kmsinfo: PropTypes.array,
};
export default KmsContent;
