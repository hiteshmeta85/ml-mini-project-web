export interface Tweet {
  cashtags?: (null)[] | null;
  conversation_id: string;
  created_at: string;
  date: string;
  geo: string;
  prediction?: 0 | 1
  hashtags?: (string | null)[] | null;
  id: number;
  language: string;
  likes_count: number;
  link: string;
  mentions?: (ReplyToEntityOrMentionsEntity | null)[] | null;
  name: string;
  near: string;
  photos?: (string | null)[] | null;
  place: string;
  quote_url: string;
  replies_count: number;
  reply_to?: (ReplyToEntityOrMentionsEntity1 | null)[] | null;
  retweet: boolean;
  retweet_date: string;
  retweet_id: string;
  retweets_count: number;
  source: string;
  thumbnail: string;
  time: string;
  timezone: string;
  trans_dest: string;
  trans_src: string;
  translate: string;
  tweet: string;
  urls?: (string | null)[] | null;
  user_id: number;
  user_rt: string;
  user_rt_id: string;
  username: string;
  video: number;
}
export interface ReplyToEntityOrMentionsEntity {
  id: string;
  name: string;
  screen_name: string;
}
export interface ReplyToEntityOrMentionsEntity1 {
  id: string;
  name: string;
  screen_name: string;
}