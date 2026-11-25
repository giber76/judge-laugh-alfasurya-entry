import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The joke: "other duties as assigned" is a real clause in nearly every job
// description, meant as a footnote. The turn promotes the footnote to the
// whole job — a true observation (everyone's extra duties did become the job)
// with the punchline landing on the last three words, "the whole job".
// No pun, no stock trope, reads aloud in one breath.
const joke =
  'My job description said "other duties as assigned" — turns out that was the whole job.';

// The gate scores /output/entry.txt: 1-200 Unicode code points, not only
// whitespace, exactly this text.
const length = [...joke].length;
if (length < 1 || length > 200 || joke.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

// Read back what was written: the gate scores exactly this file, so it must
// be byte-identical to the joke above — no trailing newline, no extra
// whitespace smuggled in by the write.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== joke) {
  throw new Error("entry.txt does not match the joke exactly");
}
