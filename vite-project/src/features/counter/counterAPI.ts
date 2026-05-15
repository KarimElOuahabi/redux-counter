export function fetchAmount(amount: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: 10 }), 1000),
  ) as Promise<{ data: number }>;
}
