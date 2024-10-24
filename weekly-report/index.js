const variable = {
  $REPORT_DATE: "September 16 - September 22",
  $USER_NAME: "John Doe",
  $ACCOUNTS: [
    {
      $ID: 1,
      $ACCOUNT_NAME: "Account 1",
      $ACCOUNT_IMG_URL: "https://picsum.photos/200/300",
      $MESSAGE_COUNT: 10,
      $PERCENT_COMPARED_TO_LAST_WEEK: 10,
      $TOTAL_MESSAGE: 100,

      $MON_DATE: "12/8",
      $TUE_DATE: "13/8",
      $WED_DATE: "14/8",
      $THU_DATE: "15/8",
      $FRI_DATE: "16/8",
      $SAT_DATE: "17/8",
      $SUN_DATE: "18/8",
      $MON_VALUE: 10,
      $TUE_VALUE: 20,
      $WED_VALUE: 30,
      $THU_VALUE: 40,
      $FRI_VALUE: 50,
      $SAT_VALUE: 60,
      $SUN_VALUE: 70,

      // Intention Analysis

      $PAYMENT_INQUIRY_PERCENTS: 15,
      $HIGHEST_INTENTION: "Product Price",
      $LOWEST_INTENTION: "Latest Promotion",

      $HIGHEST_INTENTION_COLOR: "#ffedd5",
      $LOWEST_INTENTION_COLOR: "#ec4899",

      $INTENTION_1: "Store Location",
      $INTENTION_2: "Latest Promotion",
      $INTENTION_3: "Product Availability",
      $INTENTION_4: "Product Information",
      $INTENTION_5: "Product Price",

      $INTENTION_1_VALUE: 15,
      $INTENTION_2_VALUE: 10,
      $INTENTION_3_VALUE: 20,
      $INTENTION_4_VALUE: 25,
      $INTENTION_5_VALUE: 30,

      $INTENTION_1_PERCENT: 15,
      $INTENTION_2_PERCENT: 10,
      $INTENTION_3_PERCENT: 20,
      $INTENTION_4_PERCENT: 25,
      $INTENTION_5_PERCENT: 30,

      $INTENTION_1_OLD_PERCENT: 20,
      $INTENTION_2_OLD_PERCENT: 15,
      $INTENTION_3_OLD_PERCENT: 25,
      $INTENTION_4_OLD_PERCENT: 30,
      $INTENTION_5_OLD_PERCENT: 35,

      $INTENTION_1_COLOR: "#ffedd5",
      $INTENTION_2_COLOR: "#ec4899",
      $INTENTION_3_COLOR: "#2563eb",
      $INTENTION_4_COLOR: "#a855f7",
      $INTENTION_5_COLOR: "#fb923c",

      //   Urgency Analysis

      $HIGHEST_URGENCY_DAY_OF_WEEK: "Wednesday",
      $HIGHEST_URGENCY_DATE: "14/08",

      $LOWEST_URGENCY_DAY_OF_WEEK: "Tuesday",
      $LOWEST_URGENCY_DATE: "13/08",

      $LOW_URGENCY_VALUE: 80,
      $MEDIUM_URGENCY_VALUE: 85,
      $HIGH_URGENCY_VALUE: 90,
      $LOW_URGENCY_VALUE_OLD: 85,
      $MEDIUM_URGENCY_VALUE_OLD: 90,
      $HIGH_URGENCY_VALUE_OLD: 95,

      $LOW_URGENCY_PERCENT: 80,
      $MEDIUM_URGENCY_PERCENT: 85,
      $HIGH_URGENCY_PERCENT: 90,
      $LOW_URGENCY_PERCENT_OLD: 85,
      $MEDIUM_URGENCY_PERCENT_OLD: 90,
      $HIGH_URGENCY_PERCENT_OLD: 95,

      //   Net Sentiment Score
      $NET_SENTIMENT_SCORE: 50,
      // calculate NET_SENTIMENT_SCORE_PERCENT by (NET_SENTIMENT_SCORE/100)*75
      $NET_SENTIMENT_SCORE_PERCENT: 37.5,
      $NET_SENTIMENT_STATUS: "Positive",
      $SCORE_CHANGE: "+7",
      $SCORE_CHANGE_COLOR: "#31C48D",
      $SCORE_CHANGE_PERCENT: 15,

      $POSITIVE_SCORE: 60,
      $NEGATIVE_SCORE: 40,
      $NEUTRAL_SCORE: 20,
    },
  ],
};
const keys = Object.keys(variable);

keys.forEach((key) => {
  const body = document.querySelector("body");
  const bodyContent = body.innerHTML;
  const reportContainer = document.querySelector(".report-container");
  const reportSample = document.querySelector(".report-sample");
  switch (key) {
    case "$ACCOUNTS":
      variable[key].forEach((account) => {
        const newReportSample = reportSample.cloneNode(true);
        const accountKeys = Object.keys(account);
        accountKeys.forEach((accountKey) => {
          newReportSample.innerHTML = newReportSample.innerHTML.replace(
            accountKey,
            account[accountKey]
          );
        });
        reportContainer.appendChild(newReportSample);
      });
      reportSample.remove();
      break;

    default:
      body.innerHTML = body.innerHTML.replace(key, variable[key]);
      break;
  }
});
