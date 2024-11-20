---
id: concepts
aliases: 
tags:
  - "[kusto](hubs/kusto.md)"
area: data
project: data
---

# Kusto Query Language (KQL)

The `arg_max()` function is used to retrieve the row(s) with the maximum value of a specified column, along with any other columns you select. Here's a breakdown of your query:

### Query:

```kusto
summarize arg_max(EventInfo_Time, *) by UserInfo_Id
```

### What it Does:

1. **`arg_max(EventInfo_Time, *)`**:

   - Finds the row with the maximum value in the `EventInfo_Time` column.
   - The `*` specifies that all columns from that row should be included in the result.

2. **`by UserInfo_Id`**:
   - Groups the data by `UserInfo_Id`.
   - Within each group, it applies `arg_max()` to determine the row where `EventInfo_Time` is the largest.

### Use Case:

This query is useful when you want to find the latest event (`EventInfo_Time`) for each user (`UserInfo_Id`) and display all details of those events.

### Example Table:

| UserInfo_Id | EventInfo_Time   | EventType | Location  |
| ----------- | ---------------- | --------- | --------- |
| 1           | 2024-11-01 12:00 | Login     | New York  |
| 1           | 2024-11-02 08:30 | Purchase  | San Diego |
| 2           | 2024-10-31 14:15 | Login     | Chicago   |
| 2           | 2024-11-01 09:45 | Logout    | Boston    |

### Result:

Using the query, you'd get:

| UserInfo_Id | EventInfo_Time   | EventType | Location  |
| ----------- | ---------------- | --------- | --------- |
| 1           | 2024-11-02 08:30 | Purchase  | San Diego |
| 2           | 2024-11-01 09:45 | Logout    | Boston    |

### Notes:

- If you only want specific columns instead of `*`, replace `*` with the desired column names, e.g., `arg_max(EventInfo_Time, EventType, Location)`.
- Ensure that `EventInfo_Time` is properly formatted as a datetime column; otherwise, unexpected results might occur.

## check between dates

```
TableName
| where DateTimeColumn between (datetime(2024-11-01) .. datetime(2024-11-07))
```

### Group count by Day

To **group counts by day** from a table and filter results within a date range, you can use **`summarize`** along with the **`bin()`** function in **KQL**. Here's how:

---

### Syntax:

```kusto
TableName
| where DateTimeColumn between (datetime(StartDate) .. datetime(EndDate))
| summarize Count = count() by bin(DateTimeColumn, 1d)
```

---

### Explanation:

1. **`where`**: Filters rows to include only those within the specified date range.
2. **`summarize`**: Groups rows and calculates the count for each group.
3. **`bin(DateTimeColumn, 1d)`**: Groups the data into 1-day bins based on the `DateTimeColumn`.

---

### Example:

#### Input Data:

| EventId | DateTimeColumn      | EventType |
| ------- | ------------------- | --------- |
| 1       | 2024-11-01 10:00:00 | Login     |
| 2       | 2024-11-01 14:15:00 | Purchase  |
| 3       | 2024-11-02 09:30:00 | Logout    |
| 4       | 2024-11-03 11:00:00 | Login     |
| 5       | 2024-11-03 15:45:00 | Purchase  |

#### Query:

```kusto
TableName
| where DateTimeColumn between (datetime(2024-11-01) .. datetime(2024-11-03))
| summarize Count = count() by bin(DateTimeColumn, 1d)
```

#### Result:

| DateTimeColumn | Count |
| -------------- | ----- |
| 2024-11-01     | 2     |
| 2024-11-02     | 1     |
| 2024-11-03     | 2     |

---

### Notes:

- The `bin()` function ensures the `DateTimeColumn` values are grouped into buckets of 1 day (`1d`).
- Replace `1d` with other intervals like `1h`, `7d`, etc., for different granularities.
- If you want to group by just the date (without time), you can use the `startofday()` function:
  ```kusto
  TableName
  | where DateTimeColumn between (datetime(2024-11-01) .. datetime(2024-11-03))
  | summarize Count = count() by startofday(DateTimeColumn)
  ```

## Union: Join two tables
