import { describe, expect, it } from "vitest";

import { getFilteredRows } from "../helpers";

const MIN_CONTACT_DATA = {
  isActive: true,
  email: "ela@gmail.com",
  phone: "(355) 886-5350",
};

describe("getFilteredRows", () => {
  it("should return an empty array if no contacts are provided", () => {
    const result = getFilteredRows(undefined, {
      displayName: "",
      city: "",
      showActive: false,
    });
    expect(result).toEqual([]);
  });

  it("should return all contacts if no filter is applied", () => {
    const contacts = [
      { ...MIN_CONTACT_DATA, id: "1", displayName: "Alice", city: "New York" },
      { ...MIN_CONTACT_DATA, id: "2", displayName: "Bob", city: "Los Angeles" },
    ];
    const result = getFilteredRows(contacts, {
      displayName: "",
      city: "",
      showActive: false,
    });
    expect(result).toEqual(contacts);
  });

  it("should filter contacts by city", () => {
    const contacts = [
      { ...MIN_CONTACT_DATA, id: "1", displayName: "Alice", city: "New York" },
      { ...MIN_CONTACT_DATA, id: "2", displayName: "Bob", city: "Los Angeles" },
      {
        ...MIN_CONTACT_DATA,
        id: "3",
        displayName: "Charlie",
        city: "New York",
      },
    ];
    const result = getFilteredRows(contacts, {
      displayName: "",
      city: "New York",
      showActive: false,
    });
    expect(result).toEqual([
      { ...MIN_CONTACT_DATA, id: "1", displayName: "Alice", city: "New York" },
      {
        ...MIN_CONTACT_DATA,
        id: "3",
        displayName: "Charlie",
        city: "New York",
      },
    ]);
  });

  it("should return an empty array if no contacts match the filter", () => {
    const contacts = [
      { ...MIN_CONTACT_DATA, id: "1", displayName: "Alice", city: "New York" },
      { ...MIN_CONTACT_DATA, id: "2", displayName: "Bob", city: "Los Angeles" },
    ];
    const result = getFilteredRows(contacts, {
      displayName: "",
      city: "Chicago",
      showActive: false,
    });
    expect(result).toEqual([]);
  });

  it("should handle case-insensitive filtering", () => {
    const contacts = [
      {
        ...MIN_CONTACT_DATA,
        id: "1",
        displayName: "Alice Smith",
        city: "New York",
      },
      {
        ...MIN_CONTACT_DATA,
        id: "2",
        displayName: "Alice Green",
        city: "Los Angeles",
      },
    ];
    const result = getFilteredRows(contacts, {
      displayName: "alice",
      city: "",
      showActive: false,
    });
    expect(result).toEqual([
      {
        ...MIN_CONTACT_DATA,
        id: "1",
        displayName: "Alice Smith",
        city: "New York",
      },
      {
        ...MIN_CONTACT_DATA,
        id: "2",
        displayName: "Alice Green",
        city: "Los Angeles",
      },
    ]);
  });
});
