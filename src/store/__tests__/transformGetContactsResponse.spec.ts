import type { ContactProps } from "@common/contact";
import { describe, expect, it } from "vitest";

import {
  type ContactApiProps,
  transformGetContactsResponse,
} from "../contactsSlice";

describe("transformGetContactsResponse", () => {
  it("should transform API response to Contact array", () => {
    const mockApiResponse = [
      {
        id: "1",
        name: "John",
        surname: "Doe",
        city: "New York",
        email: "john@example.com",
        phone: "+1234567890",
        isActive: true,
      },
      {
        id: "2",
        name: "Jane",
        surname: "Smith",
        city: "Los Angeles",
        email: "jane@example.com",
        phone: "+0987654321",
        isActive: false,
      },
    ];

    const expected: ContactProps[] = [
      {
        id: "1",
        displayName: "John Doe",
        city: "New York",
        email: "john@example.com",
        phone: "+1234567890",
        isActive: true,
      },
      {
        id: "2",
        displayName: "Jane Smith",
        city: "Los Angeles",
        email: "jane@example.com",
        phone: "+0987654321",
        isActive: false,
      },
    ];

    const result = transformGetContactsResponse(mockApiResponse);
    expect(result).toEqual(expected);
  });

  it("should handle empty response", () => {
    const mockApiResponse: ContactApiProps[] = [];
    const result = transformGetContactsResponse(mockApiResponse);
    expect(result).toEqual([]);
  });
});
