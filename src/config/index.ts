// Max date range to schedule post
export const MAX_DATE_DISTANCE_MONTHS = 3;

// Text max characters length, 2000 is max according to discord webhook docs
export const TEXT_MAX_LENGTH = 2000;

// At what time messages should be posted
// it will be used to mutate data when writing to db
// so changes after recording will not be reflected
export const MESSAGE_HOUR_POST = 20;
