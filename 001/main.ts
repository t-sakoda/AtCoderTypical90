
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
  const backtrack = (start: number, depth: number) => {
    if (depth === K) {
      let innerCandidate = L;
      const allCuts = [0, ...combination, L];
      for (let i = 1; i < allCuts.length; i++) {
        const diff = allCuts[i] - allCuts[i - 1];
        innerCandidate = diff <= innerCandidate ? diff : innerCandidate;
        // scoreより小さくなったら終了
        if (innerCandidate <= score) return;
      }
      score = innerCandidate;
      return;
    }
    for (let i = start; i < N; i++) {
      combination.push(A[i]);
      backtrack(i + 1, depth + 1);
      combination.pop();
    }
  };
  backtrack(0, 0);

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
