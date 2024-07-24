// import '@testing-library/jest-dom';
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils.js";

it("getFullyear returns the correct year", () => {
    expect(getFullYear()).toBe(new Date().getFullYear())
})

it("getFooterCopy returns the correct string", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
    expect(getFooterCopy(true)).toBe("Holberton School")
})

it("getLatestNotifications returns the correct string", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})
