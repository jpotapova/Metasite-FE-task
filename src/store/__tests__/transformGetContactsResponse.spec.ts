import type { ContactProps } from "@common/contact";
import { describe, expect, it } from "vitest";

import { transformGetContactResponse } from "../contactsSlice";

describe("transformGetContactResponse", () => {
  it("should transform API response to a Contact object", () => {
    const mockApiResponse = {
      id: "1",
      name: "John",
      surname: "Doe",
      city: "New York",
      email: "john@example.com",
      phone: "+1234567890",
      isActive: true,
    };

    const expected: ContactProps = {
      id: "1",
      displayName: "John Doe",
      city: "New York",
      email: "john@example.com",
      phone: "+1234567890",
      isActive: true,
    };

    const result = transformGetContactResponse(mockApiResponse);
    expect(result).toEqual(expected);
  });
});
