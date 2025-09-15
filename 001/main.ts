
export function Main(input: string[]) {
  // N: 切れ目の数, L: ようかんの長さ
  const [N, L] = input[0].split(" ").map(Number);
  // K: 選択する切れ目の数
  const K = Number(input[1]);
  // A: 切れ目の位置
  const A = input[2].split(" ").map(Number);

  let score = 0;

  // 切る位置の組み合わせを生成
  const combination: number[] = [];
  const backtrack = (currentIndex: number, depth: number, lastCandidate: number) => {
    if (depth === K) {
      const leftLength = combination[combination.length - 1] - (combination[combination.length - 2] || 0);
      const rightLength = L - combination[combination.length - 1];
      const candidate = Math.min(lastCandidate, leftLength, rightLength);
      score = Math.max(score, candidate);
      return;
    }
    for (let i = currentIndex; i < N; i++) {
      const diff = A[i] - (combination[combination.length - 1] || 0);
      // scoreより小さくなったら終了
      if (diff <= score) continue;
      const candidate = Math.min(lastCandidate, diff);
      combination.push(A[i]);
      backtrack(i + 1, depth + 1, candidate);
      combination.pop();
    }
  };
  backtrack(0, 0, L);

  return `${score}`;
}

//*この行以降は提出するときに有効にする。
/*
const readInput = async (): Promise<string[]> => {
  const input = await Deno.readTextFile("/dev/stdin");
  return input.split("\n")
};
const input = await readInput();
console.log(Main(input));
*/
