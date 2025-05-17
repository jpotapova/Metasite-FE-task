import {
  type ColumnProps,
  type ColumnToShowHide,
  isColumnToShowHide,
} from "./types";

export const getVisibleColumnsArray = (
  columns: ColumnProps[],
  visibleColumns: Record<ColumnToShowHide, boolean>,
) => {
  return columns.filter(
    (column) =>
      (isColumnToShowHide(column.field) && visibleColumns[column.field]) ||
      !isColumnToShowHide(column.field),
  );
};

export const getColumnsToToggle = (
  columns: ColumnProps[],
  visibleColumns: Record<ColumnToShowHide, boolean>,
) => {
  return columns
    .filter(
      (
        column,
      ): column is ColumnProps & {
        field: ColumnToShowHide;
      } => {
        return isColumnToShowHide(column.field);
      },
    )
    .map((column) => {
      return {
        field: column.field,
        headerName: column.headerName,
        isVisible: visibleColumns[column.field],
      };
    });
};
