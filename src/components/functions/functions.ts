

export function getRelativeTime(timePosted: string): string {
  const postedDate = new Date(timePosted);
  const now = new Date();

  const diffMs = now.getTime() - postedDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 1) return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  if (years === 0 && months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  if (years >= 1) {
    const yearStr = `${years} year${years !== 1 ? "s" : ""}`;
    const monthStr = months > 0 ? `, ${months} month${months !== 1 ? "s" : ""}` : "";
    return `${yearStr}${monthStr} ago`;
  }

  return "Some time ago"; // fallback (shouldn't hit this)
}

