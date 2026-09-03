import { useState, useEffect } from "react";
import {
  API_VENDOR_DETAILS,
  API_VENDOR_REVIEW,
  API_VENDOR_MENU,
} from "./constants";

const useVendorData = (vendorID) => {
  const [vendorObj, setVendorObj] = useState(null);
  const endpoints = [API_VENDOR_DETAILS, API_VENDOR_REVIEW, API_VENDOR_MENU];

  const FetchWhole = async () => {
    const responses = await Promise.all(
      endpoints.map((endpoint) => fetch(endpoint + vendorID)),
    );
    const datas = await Promise.all(
      responses.map((response) => response.json()),
    );
    //stitch each object.data together into the large vendorObj
    setVendorObj(datas.reduce((a, c) => ({ ...a, ...c?.data }), {}));
  };

  useEffect(() => {
    FetchWhole();
  }, []);

  return vendorObj;
};
export default useVendorData;
