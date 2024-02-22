export default function localDateShort(string) {
  return new Date(string).toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
