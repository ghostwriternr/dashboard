import axios from 'axios';
import { unionBy } from 'lodash/array';
import getLinkifiedHTML from './util';

const noticeUrls = ['acad_ug', 'acad_pg', 'bcrth', 'public'];
const veritasUrl = 'https://hermes.mykgp.com/';

const updateNotices = notices => ({
  type: 'UPDATE_NOTICES',
  value: notices,
});

const setFetchingNotices = value => ({
  type: 'SET_FETCHING_NOTICES',
  value,
});

const fetchNotices = (noticeType, firstPageOnly = false) => (
  dispatch,
  getState,
) => {
  // getState() returns mutable, make sure to create copy
  const notices = { ...getState().noticesData.notices };
  const currentTypeNotices = notices[noticeType];
  const { allFetched, nextPage } = currentTypeNotices;
  if (!allFetched) {
    let url = `${veritasUrl}${noticeUrls[noticeType]}/`;
    if (nextPage && !firstPageOnly) {
      url = `${url}page/${nextPage}`;
    }
    dispatch(setFetchingNotices(true));
    axios
      .get(url)
      .then((response) => {
        const { data } = currentTypeNotices;
        const parsedNewData = response.data.data.map(notice => ({
          ...notice,
          linkifiedHTML: getLinkifiedHTML(notice),
        }));
        notices[noticeType] = {
          data: unionBy(data, parsedNewData, '_id'),
          allFetched:
            nextPage === response.data.next_cursor && !firstPageOnly,
          nextPage: response.data.next_cursor,
        };
        dispatch(setFetchingNotices(false));
        dispatch(updateNotices(notices));
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default fetchNotices;
