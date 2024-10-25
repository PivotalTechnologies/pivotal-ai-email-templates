const fs = require("fs");
const path = require("path");

const inputFilePath = "index.html";
const outputFilePath = inputFilePath.replace(/(\.[^/.]+)$/, "-compiled$1");

const variables = {
  // Header
  $REPORT_DATE: "September 16 - September 22",
  $USER_NAME: "John Doe",
  $ACCOUNT_IMG_URL: "https://picsum.photos/200/300",
  $ACCOUNT_NAME: "Account 1",
  // Message Distribution
  $MESSAGE_COUNT: 10,
  $PERCENT_COMPARED_TO_LAST_WEEK: 10,
  $TOTAL_MESSAGE: 100,
  $MON_DAILY_MESSAGES_PERCENTAGE: "10",
  $MON_DAILY_MESSAGES_VALUE: 100,
  $MON_DATE: "12/8",
  $TUE_DAILY_MESSAGES_PERCENTAGE: "23",
  $TUE_DAILY_MESSAGES_VALUE: 100,
  $TUE_DATE: "12/8",
  $WED_DAILY_MESSAGES_PERCENTAGE: "99",
  $WED_DAILY_MESSAGES_VALUE: 100,
  $WED_DATE: "12/8",
  $THU_DAILY_MESSAGES_PERCENTAGE: "100",
  $THU_DAILY_MESSAGES_VALUE: 100,
  $THU_DATE: "12/8",
  $FRI_DAILY_MESSAGES_PERCENTAGE: "43",
  $FRI_DAILY_MESSAGES_VALUE: 100,
  $FRI_DATE: "12/8",
  $SAT_DAILY_MESSAGES_PERCENTAGE: "76",
  $SAT_DAILY_MESSAGES_VALUE: 100,
  $SAT_DATE: "12/8",
  $SUN_DAILY_MESSAGES_PERCENTAGE: "54",
  $SUN_DAILY_MESSAGES_VALUE: 100,
  $SUN_DATE: "12/8",

  // Intention Analysis
  $INQUIRY_COLOR: "#2563eb",
  $INQUIRY_VALUE: "",
  $PAYMENT_INQUIRY_PERCENTS: "56",
  $HIGHEST_INTENTION_COLOR: "#ec4899",
  $HIGHEST_INTENTION_LABEL: "Latest Promotion",
  $LOWEST_INTENTION_COLOR: "#a855f7",
  $LOWEST_INTENTION_LABEL: "Product Information",
  $INTENTION_1_COLOR: "#ffedd5",
  $INTENTION_2_COLOR: "#ec4899",
  $INTENTION_3_COLOR: "#2563eb",
  $INTENTION_4_COLOR: "#a855f7",
  $INTENTION_5_COLOR: "#fb923c",
  $INTENTION_1_LABEL: "Store Location",
  $INTENTION_1_VALUE: "12",
  $CURRENT_INTENTION_1_PERCENTAGE: "10",
  $PREV_INTENTION_1_PERCENTAGE: "20",
  $INTENTION_2_LABEL: "Latest Promotion",
  $INTENTION_2_VALUE: "15",
  $CURRENT_INTENTION_2_PERCENTAGE: "24",
  $PREV_INTENTION_2_PERCENTAGE: "12",
  $INTENTION_3_LABEL: "Product Availability",
  $INTENTION_3_VALUE: "23",
  $CURRENT_INTENTION_3_PERCENTAGE: "66",
  $PREV_INTENTION_3_PERCENTAGE: "22",
  $INTENTION_4_LABEL: "Product Information",
  $INTENTION_4_VALUE: "34",
  $CURRENT_INTENTION_4_PERCENTAGE: "100",
  $PREV_INTENTION_4_PERCENTAGE: "43",
  $INTENTION_5_LABEL: "Product Price",
  $INTENTION_5_VALUE: "54",
  $CURRENT_INTENTION_5_PERCENTAGE: "23",
  $PREV_INTENTION_5_PERCENTAGE: "78",

  // Urgency Analysis
  $URGENCY_LEVEL_COLOR: "#f87171",
  $URGENCY_LEVEL_LABEL: "Highest",
  $HIGHEST_URGENCY_DAY_OF_WEEK: "Monday",
  $HIGHEST_URGENCY_DATE: "21/8",
  $LOWEST_URGENCY_DAY_OF_WEEK: "Wednesday",
  $LOWEST_URGENCY_DATE: "26/8",
  $LOW_URGENCY_VALUE_CURRENT: "12",
  $LOW_URGENCY_PERCENTAGE_CURRENT: "20",
  $LOW_URGENCY_VALUE_PREV: "34",
  $LOW_URGENCY_PERCENTAGE_PREV: "40",
  $MEDIUM_URGENCY_VALUE_CURRENT: "23",
  $MEDIUM_URGENCY_PERCENTAGE_CURRENT: "20",
  $MEDIUM_URGENCY_VALUE_PREV: "34",
  $MEDIUM_URGENCY_PERCENTAGE_PREV: "80",
  $HIGH_URGENCY_VALUE_CURRENT: "67",
  $HIGH_URGENCY_PERCENTAGE_CURRENT: "74",
  $HIGH_URGENCY_VALUE_PREV: "54",
  $HIGH_URGENCY_PERCENTAGE_PREV: "44",

  // Net Sentiment
  $SCORE_CHANGE_VALUE: "+10",
  $NET_SENTIMENT_SCORE: "100",
  $NET_SENTIMENT_PERCENTAGE: "75",
  $NET_SENTIMENT_STATUS: "Positive",
  $SCORE_CHANGE_PERCENT: "12",
  $POSITIVE_SCORE: "42",
  $NEGATIVE_SCORE: "23",
  $NEUTRAL_SCORE: "53",

  // Footer
  $GO_TO_DASHBOARD_URL: "https://example.com",
  $UNSUBSCRIBE_EMAIL_URL: "https://example.com",
};

fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  let result = data;
  for (const [variable, value] of Object.entries(variables)) {
    const regex = new RegExp(`\\${variable}`, "g");
    result = result.replace(regex, value);
  }
  fs.writeFile(outputFilePath, result, "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
      return;
    }
    console.log(
      "Variable replacement completed. Output written to:",
      outputFilePath
    );
  });
});
