import { describe, expect, it } from "vitest";

import { getOptions } from "../helpers";

const MIN_CONTACT_DATA = {
  city: "Gorouso",
  isActive: true,
  displayName: "Julian Martelli",
  id: "635b85baef6d933a68be1615",
  email: "ela@gmail.com",
  phone: "(355) 886-5350",
};

describe("getOptions", () => {
  it("should return an empty array when contacts are undefined", () => {
    const result = getOptions(undefined);
    expect(result).toEqual([]);
  });

  it("should return an empty array when contacts are empty", () => {
    const result = getOptions([]);
    expect(result).toEqual([]);
  });

  it("should return sorted unique options when contacts have duplicate cities", () => {
    const contacts = [
      { ...MIN_CONTACT_DATA, city: "New York" },
      { ...MIN_CONTACT_DATA, city: "Los Angeles" },
      { ...MIN_CONTACT_DATA, city: "New York" },
      { ...MIN_CONTACT_DATA, city: "Chicago" },
    ];
    const result = getOptions(contacts);
    expect(result).toEqual([
      { value: "Chicago", label: "Chicago" },
      { value: "Los Angeles", label: "Los Angeles" },
      { value: "New York", label: "New York" },
    ]);
  });

  it("should handle contacts with only one city", () => {
    const contacts = [{ ...MIN_CONTACT_DATA, city: "Boston" }];
    const result = getOptions(contacts);
    expect(result).toEqual([{ value: "Boston", label: "Boston" }]);
  });

  it("should handle contacts with cities containing special characters", () => {
    const contacts = [
      { ...MIN_CONTACT_DATA, city: "São Paulo" },
      { ...MIN_CONTACT_DATA, city: "München" },
      { ...MIN_CONTACT_DATA, city: "Zürich" },
    ];
    const result = getOptions(contacts);
    expect(result).toEqual([
      { value: "München", label: "München" },
      { value: "São Paulo", label: "São Paulo" },
      { value: "Zürich", label: "Zürich" },
    ]);
  });
});
