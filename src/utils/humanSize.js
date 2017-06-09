const sizes = ['B', 'KiB', 'MiB', 'GiB'];

export default function humanSize(size, i = 1) {
  const newSize = size / 1024;
  return (newSize > 1024)
    ? humanSize(newSize, i + 1)
    : `${newSize.toFixed(2)} ${sizes[i]}`;
}
