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
export declare class EventHelper {
    getEnumKey(enumType: any, enumValue: any): string;
    parseItem(eventStr: string): EventItem;
    getCurrent(): string;
}
/**
 * 事件本身
 */
export interface EventItem {
    title: string;
    start: string;
    frequency: FrequencyType;
    interval: number;
    weekdays?: WeekdaysType[];
    weekOrdinal?: WeekOrdinalWordsType[];
    monthDate?: number[];
    yearMonths?: MonthType[];
    due?: string;
    except?: string[];
    action?: EventAction;
    conditions?: EventCondition[];
}
/**
 * 執行動作
 */
export interface EventAction {
    client: ClientType;
    adLevel: AdLevelType;
    target?: EventActionTarget[];
    action: ActionType;
    params?: EventActionParamBudget;
}
/**
 * 執行動作目標
 */
export interface EventActionTarget {
    id: string;
    name: string;
}
/**
 * 執行動作參數
 */
export interface EventActionParamBudget {
    budgetType: BudgetType;
    valueType: ValueType;
    value: number;
    limit?: number;
}
/**
 * 條件
 */
export interface EventCondition {
    target?: EventActionTarget[];
    conditionType: ConditionType;
    operation: OperationType;
    valueType: ValueType;
    value: number;
    dateRangeType?: DateRangeType;
    dateRange?: string[];
    comparison: Boolean;
}
/**
 * 平台(帳戶類型)
 */
export declare enum ClientType {
    Google = 1,
    Facebook = 2
}
/**
 * 層級
 */
export declare enum AdLevelType {
    Campaign = 1,
    AdGroup = 2,
    Ad = 3,
    AdTag = 4
}
/**
 * 頻率
 */
export declare enum FrequencyType {
    Never = -1,
    Hour = 1,
    Day = 2,
    Week = 3,
    Month = 4,
    Annual = 5
}
/**
 * 每週星期幾
 */
export declare enum WeekdaysType {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
    Weekday = -1,
    Weekend = -2
}
/**
 * 每月第幾週
 */
export declare enum WeekOrdinalWordsType {
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4,
    Fifth = 5,
    Last = -1
}
/**
 * 月份
 * This code is used to define the MonthType enum. The enum contains the names of the months of the year, with January being 1, February being 2, etc.
 */
export declare enum MonthType {
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
    December = 12
}
/**
 * 執行
 */
export declare enum ActionType {
    SetNewBudget = 1,
    IncreaseBudget = 2,
    LowerBudget = 3,
    OpenProject = 4,
    SuspendProject = 5,
    None = -1
}
/**
 * 設定預算類型
 */
export declare enum BudgetType {
    DailyBudget = "dailyBudget",
    TotalBudget = "totalBudget"
}
/**
 * 預算調整
 */
export declare enum ValueType {
    Value = "value",
    Percentage = "percentage"
}
/**
 * 條件
 */
export declare enum ConditionType {
    BudgetRemaining = "budgetRemaining",
    Impressions = "impressions",
    Spent = "spent",
    Conversions = "conversions",
    ReturnOnADSpending = "roas",
    Clicks = "clicks"
}
/**
 * 比較區間日期範圍
 */
export declare enum DateRangeType {
    Today = 1,
    Yesterday = 2,
    Last3Days = 3,
    Last7Days = 4,
    ThisMonth = 5,
    LastMonth = 6,
    ThisSeason = 7,
    LastSeason = 8,
    ThisYear = 9,
    LastYear = 10,
    SpecifiedTime = -1
}
/**
 * 運算
 */
export declare enum OperationType {
    MoreThan = ">",
    GreaterOrEqualTo = ">=",
    Equal = "==",
    LessThan = "<",
    LessThanOrEqualTo = "<="
}
