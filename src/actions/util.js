import linkifyHtml from 'linkifyjs/html';
import chrono from 'chrono-node';

const buildCalendarEvent = (parsedEvent, title) => {
  const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&';
  const startDate = parsedEvent.start.moment();
  const endDate = parsedEvent.end
    ? parsedEvent.end.moment()
    : startDate.endOf('day');

  return `${baseUrl}dates=${startDate.format('YYYYMMDD[T]HHmmss[Z]')}/${endDate.format('YYYYMMDD[T]HHmmss[Z]')}&&text=${encodeURIComponent(title)}`;
};

const parseDateFromText = (textToParse, title) => {
  let offset = 0;
  const defaultTags = {
    opening: "<a class='tooltip'>",
    closing: "<span class='tooltiptext'>Add to calendar</span></a>",
  };
  const parseResult = chrono.parse(textToParse);
  let newTextToParse = textToParse;
  for (let i = 0; i < parseResult.length; i += 1) {
    const result = parseResult[i];
    const eventLink = buildCalendarEvent(result, title);
    const tagsToAdd = defaultTags;
    tagsToAdd.opening = `${tagsToAdd.opening.slice(0, 3)}href='${eventLink}' target='_blank' ${tagsToAdd.opening.slice(3)}`;
    newTextToParse =
      newTextToParse.slice(0, result.index + offset) +
      tagsToAdd.opening +
      newTextToParse.slice(result.index + offset);
    offset += tagsToAdd.opening.length;
    newTextToParse =
      newTextToParse.slice(0, result.index + result.text.length + offset) +
      tagsToAdd.closing +
      newTextToParse.slice(result.index + result.text.length + offset);
    offset += tagsToAdd.closing.length;
  }
  return newTextToParse;
};

const getLinkifiedHTML = (notice) => {
  const { html, title } = notice;
  return linkifyHtml(parseDateFromText(html, title));
};
export default getLinkifiedHTML;
