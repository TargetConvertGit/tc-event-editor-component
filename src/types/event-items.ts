/**
 * API:
 * 列表 GET /heybear/api/monitor
 * 新增 POST /heybear/api/monitor
 * 修改 PUT /heybear/api/monitor/4
 *
 *
 */

/**
 * 事件輔助類別
 */
export class EventHelper {
  // 取得列舉索引
  getEnumKey(enumType: any, enumValue: any): string {
    return enumType[enumValue];
  }
  // 從字串解析事件本身
  parseItem(eventStr: string): EventItem {
    return JSON.parse(eventStr);
  }
  getCurrent(): string {
    return new Date().toISOString();
  }
}

/**
 * 事件本身
 */
export interface EventItem {
  title: string; // 事件名稱
  start: string; // 事件開始日期
  active: boolean; // 啟用狀態
  customInterval: boolean; // 自訂頻率
  frequency: FrequencyType; // 頻率單位
  interval: number; // 頻率間隔
  weekdays?: WeekdaysType[]; // 指定每週第幾星期
  weekOrdinal?: WeekOrdinalWordsType[]; //指定每月第幾週
  monthDate?: number[]; // 每個月第幾天(1 - 31), -1表示最後一天
  yearMonths?: MonthType[]; // 每年的第幾個月
  due?: string; // 事件結束日期
  except?: string[]; // 排除指定日期
  action?: EventAction; // 執行動作
  conditions?: EventCondition[]; // 條件
  notify: EventNotify; // 通知
}

/**
 * 執行動作
 */
export interface EventAction {
  client: ClientType;
  adLevel: AdLevelType;
  targetType: EventActionTargetType;
  target?: EventActionTarget[];
  action: ActionType;
  params?: EventActionParamBudget;
}

/**
 * 執行動作目標
 */
export interface EventActionTarget {
  id: string;
}

/**
 * 執行動作參數
 */
export interface EventActionParamBudget {
  budgetType: BudgetType;
  valueType: ValueType;
  value: number; // 值 or 百分比
  limit?: number; // 上限 or 下限
}

/**
 * 條件
 */
export interface EventCondition {
  client: ClientType;
  adLevel: AdLevelType;
  targetType: EventActionTargetType;
  target?: EventActionTarget[];
  conditionType: ConditionType; // 條件下拉
  operation: OperationType;
  valueType: ValueType;
  value: number; // 值 or 百分比
  dateRangeType?: DateRangeType;
  dateRange?: string[];
  comparison: Boolean; // 加入比較區間
}

export interface EventNotify {
  email: EmailNotify;
  line: ToggleNotify;
}

/**
 * Email通知
 */
export enum EmailNotify {
  None = -1,  // 不寄送
  All = 1,    // 僅執行動作或錯誤時
  Error = 2   //僅出現錯誤時
}

/**
 * 訊息開關
 */
export enum ToggleNotify {
  Off = 0,
  On = 1
}

/**
 * 平台(帳戶類型)
 */
export enum ClientType {
  Google = 1,
  Facebook = 2,
}

/**
 * 各平台層級
 */
export type AdLevelType = AdLevelTypeGoogle | AdLevelTypeFacebook;

/**
 * Google 層級
 */
export enum AdLevelTypeGoogle {
  Campaign = 1,
  AdGroup = 2,
  Ad = 3,
  AdTag = 4,
}

/**
 * Facebook 層級
 */
export enum AdLevelTypeFacebook {
  Campaign = 1,
  AdGroup = 2,
  Ad = 3,
  AdTag = 4,
}

/**
 * 目標類別
 */
export enum EventActionTargetType {
  ForAll = 1, // 所有項目
  ForID = 2, // 指定項目
  ForActive = 3, // 僅已啟用項目
}

/**
 * 各平台層級
 */
export type ConditionAdLevelType =
  | ConditionAdLevelTypeGoogle
  | ConditionAdLevelTypeFacebook;

/**
 * Google 層級
 */
export enum ConditionAdLevelTypeGoogle {
  Account = 1,
  Campaign = 2,
  AdGroup = 3,
}

/**
 * Facebook 層級
 */
export enum ConditionAdLevelTypeFacebook {
  Account = 1,
  Campaign = 2,
  AdGroup = 3,
}

/**
 * 頻率
 */
export enum FrequencyType {
  Never = -1,
  Hour = 1,
  Day = 2,
  Week = 3,
  Month = 4,
  Annual = 5,
}

/**
 * 每週星期幾
 */
export enum WeekdaysType {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Weekday = -1, // 平日
  Weekend = -2, // 週末
}

/**
 * 每月第幾週
 */
export enum WeekOrdinalWordsType {
  First = 1,
  Second = 2,
  Third = 3,
  Fourth = 4,
  Fifth = 5,
  Last = -1,
}

/**
 * 月份
 * This code is used to define the MonthType enum. The enum contains the names of the months of the year, with January being 1, February being 2, etc.
 */
export enum MonthType {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

/**
 * 執行
 */
export enum ActionType {
  SetNewBudget = 1, // 設定新預算
  IncreaseBudget = 2, // 提高預算
  LowerBudget = 3, // 降低預算
  OpenProject = 4, // 開啟項目
  SuspendProject = 5, // 暫停項目
  None = -1, // 不執行動作
}

/**
 * 設定預算類型
 */
export enum BudgetType {
  DailyBudget = "dailyBudget", // 每日預算
  TotalBudget = "totalBudget", // 總預算
}

/**
 * 預算調整
 */
export enum ValueType {
  Value = "value", // 數值
  Percentage = "percentage", // 百分比
}

/**
 * 條件
 */
export enum ConditionType {
  BudgetRemaining = "accountBudget", // 帳戶剩餘預算
  BudgetCap = "budgetCap", // 預算上限
  Clicks = "clicks", // 點擊數
  Impressions = "impressions", // 曝光數
  Cpc = "cpc",
  Spend = "cost", // 花費
  Conversions = "conversions", // 轉換數
  ConversionSpend = "conversionsValue", // 單次轉換費用
  // ConversionRates = 'conversionRates', // 轉換率: 轉換次數除以同個時間範圍內帶來轉換的廣告點擊總數。舉例來說，如果 1,000 次互動帶來了 50 次轉換，轉換率就是 5% (50 ÷ 1,000 = 5%)。
  ReturnOnADSpending = "roas", // ROAS
  // ClickThroughRate = 'ctr', // 點擊率: 計算方式為 (點擊次數 ÷ 曝光次數)。
}

/**
 * 比較區間日期範圍
 */
export enum DateRangeType {
  Today = 1, // 當天
  Yesterday = 2, // 昨天
  Last3Days = 3, // 近3天
  Last7Days = 4, // 近7天
  ThisMonth = 5, // 這個月
  // LastMonth = 6, // 上個月
  // ThisSeason = 7, // 這一季
  // LastSeason = 8, // 上一季
  // ThisYear = 9, // 今年
  // LastYear = 10, // 去年
  SpecifiedTime = -1, // 指定時間
}

/**
 * 運算
 */
export enum OperationType {
  MoreThan = ">",
  GreaterOrEqualTo = ">=",
  Equal = "==",
  LessThan = "<",
  LessThanOrEqualTo = "<=",
}

/**
 * email通知
 */
export enum emailType {
  AbnormalityOrError,
  Error,
  None = -1,
}
