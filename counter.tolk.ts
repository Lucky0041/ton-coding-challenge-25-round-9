export function main(src: TolkBuilder) {
  const counter = src.uint("counter", 0n);

  src.external("IncreaseCounter", (msg) => {
    const value = msg.body.uint(32);
    counter.set(counter.get() + value);
  });

  src.external("DecreaseCounter", (msg) => {
    const value = msg.body.uint(32);
    counter.set(counter.get() - value);
  });

  src.getter("GetCounter", () => {
    return counter.get();
  });
}
