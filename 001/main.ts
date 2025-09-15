
export function Main(input: string[]) {
  // N: 切れ目の数, L: ようかんの長さ
  const [N, L] = input[0].trim().split(/\s/).map(Number);
  // K: 選択する切れ目の数
  const K = Number(input[1].trim());
  // A: 切れ目の位置（昇順）
  const A = input[2].trim().split(/\s/).map(Number);

  // 二分探索で最大の最小値を求める
  let ok = 0;
  let ng = L + 1

  const check = (x: number): boolean => {
    // 最小値がx以上になるようにK個の切れ目を選べるか
    let count = 0; // 選んだ切れ目の数
    let last = 0; // 最後に選んだ切れ目の位置
    for (let i = 0; i < N; i++) {
      if (A[i] - last >= x) {
        // x以上長く切れたら、その切れ目を選ぶ
        count++;
        last = A[i];
      }
      if (count === K) {
        // K個の切れ目を選んだら終了
        break;
      }
    }
    // K個の切れ目を選ぶことができて、かつ、最後のようかんの端までx以上長く切れていれば成功
    return count == K && L - last >= x;
  }

  while (ng - ok > 1) {
    const mid = Math.floor((ok + ng) / 2);
    if (check(mid)) {
      ok = mid;
    } else {
      ng = mid;
    }
  }
  return ok.toString();
}

//*この行以降は提出するときに有効にする。
/*
const readInput = async (): Promise<string[]> => {
  const input = await Deno.readTextFile("/dev/stdin");
  return input.trim().split("\n");
};
const input = await readInput();
console.log(Main(input));
*/
