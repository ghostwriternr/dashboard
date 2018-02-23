import axios from "axios";
import { unionBy } from "lodash/array";
import { getLinkifiedHTML } from "./util";

const notice_urls = ["acad_ug", "acad_pg", "bcrth", "public"];
const veritas_url = "https://hermes.mykgp.com/";

var updateNotices = notices => ({
  type: "UPDATE_NOTICES",
  value: notices
});

var setFetchingNotices = value => ({
  type: "SET_FETCHING_NOTICES",
  value: value
});

export var fetchNotices = (noticeType, firstPageOnly = false) => (
  dispatch,
  getState
) => {
  // getState() returns mutable, make sure to create copy
  var notices = { ...getState().noticesData.notices };
  var currentTypeNotices = notices[noticeType];
  const { allFetched, nextPage } = currentTypeNotices;
  if (!allFetched) {
    var url = `${veritas_url}${notice_urls[noticeType]}/`;
    if (nextPage && !firstPageOnly) {
      url = `${url}page/${nextPage}`;
    }
    dispatch(setFetchingNotices(true));
    axios
      .get(url)
      .then(response => {
        const { data } = currentTypeNotices;
        const parsedNewData = response["data"]["data"].map(notice => ({
          ...notice,
          linkifiedHTML: getLinkifiedHTML(notice)
        }));
        notices[noticeType] = {
          data: unionBy(data, parsedNewData, "_id"),
          allFetched:
            nextPage === response["data"]["next_cursor"] && !firstPageOnly,
          nextPage: response["data"]["next_cursor"]
        };
        dispatch(setFetchingNotices(false));
        dispatch(updateNotices(notices));
      })
      .catch(error => {
        console.log(error);
      });
  }
};
