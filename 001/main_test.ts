import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function mainTest() {
  const input = [
    "3 34",
    "1",
    "8 13 26"
  ];
  assertEquals(Main(input), "13");
});

Deno.test(function mainTest() {
  const input = [
    "7 45",
    "2",
    "7 11 16 20 28 34 38"
  ];
  assertEquals(Main(input), "12");
});

Deno.test(function mainTest() {
  const input = [
    "3 100",
    "1",
    "28 54 81"
  ];
  assertEquals(Main(input), "46");
});

Deno.test(function mainTest() {
  const input = [
    "20 1000",
    "4",
    "51 69 102 127 233 295 350 388 417 466 469 523 553 587 720 739 801 855 926 954"
  ];
  assertEquals(Main(input), "170");
});
