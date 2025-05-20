import { describe, expect, it } from "vitest";

import { getColumnsToToggle, getVisibleColumnsArray } from "../helpers";

describe("Table helpers", () => {
  const mockColumns = [
    {
      field: "displayName",
      type: "singleSelect" as const,
      headerName: "Name",
    },
    {
      field: "city",
      type: "singleSelect" as const,
      headerName: "City",
    },
    {
      field: "isActive",
      type: "singleSelect" as const,
      headerName: "Actions",
    },
    {
      field: "email",
      type: "singleSelect" as const,
      headerName: "Email",
    },
    {
      field: "phone",
      type: "singleSelect" as const,
      headerName: "Phone",
    },
    {
      field: "actions",
      type: "singleSelect" as const,
      headerName: "Actions",
    } as const,
  ];

  describe("getVisibleColumnsArray", () => {
    it("should return all columns when all toggleable columns are visible", () => {
      const visibleColumns = {
        displayName: true,
        city: true,
        email: true,
        phone: true,
      };

      const result = getVisibleColumnsArray(mockColumns, visibleColumns);

      expect(result).toHaveLength(mockColumns.length);
      expect(result).toEqual(mockColumns);
    });

    it("should filter out hidden toggleable columns", () => {
      const visibleColumns = {
        displayName: true,
        city: false,
        email: true,
        phone: false,
      };

      const result = getVisibleColumnsArray(mockColumns, visibleColumns);

      expect(result).toHaveLength(4); // isActive, actions, displayName, email
      expect(result.map((col) => col.field)).toEqual([
        "displayName",
        "isActive",
        "email",
        "actions",
      ]);
    });

    it("should always include non-toggleable columns", () => {
      const visibleColumns = {
        displayName: false,
        city: false,
        email: false,
        phone: false,
      };

      const result = getVisibleColumnsArray(mockColumns, visibleColumns);

      expect(result).toHaveLength(2); // isActive and actions
      expect(result.map((col) => col.field)).toEqual(["isActive", "actions"]);
    });
  });

  describe("getColumnsToToggle", () => {
    it("should return only toggleable columns with their visibility state", () => {
      const visibleColumns = {
        displayName: true,
        city: false,
        email: true,
        phone: false,
      };

      const result = getColumnsToToggle(mockColumns, visibleColumns);

      expect(result).toHaveLength(4); // displayName, city, email, phone
      expect(result).toEqual([
        { field: "displayName", headerName: "Name", isVisible: true },
        { field: "city", headerName: "City", isVisible: false },
        { field: "email", headerName: "Email", isVisible: true },
        { field: "phone", headerName: "Phone", isVisible: false },
      ]);
    });

    it("should not include non-toggleable columns", () => {
      const visibleColumns = {
        displayName: true,
        city: true,
        email: true,
        phone: true,
      };

      const result = getColumnsToToggle(mockColumns, visibleColumns);

      expect(result).not.toContainEqual(
        expect.objectContaining({ field: "isActive" }),
      );
      expect(result).not.toContainEqual(
        expect.objectContaining({ field: "actions" }),
      );
    });

    it("should maintain the order of columns as in the input", () => {
      const visibleColumns = {
        displayName: true,
        city: true,
        email: true,
        phone: true,
      };

      const result = getColumnsToToggle(mockColumns, visibleColumns);

      expect(result.map((col) => col.field)).toEqual([
        "displayName",
        "city",
        "email",
        "phone",
      ]);
    });
  });
});
