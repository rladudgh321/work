import { NextLayout, NextProvider } from "@/providers";

interface Props {
  children?: React.ReactNode;
}

export default function AdminLayout({children}: Props) {
  return (
    <NextProvider>
      <NextLayout>{children}</NextLayout>
    </NextProvider>
  );
}