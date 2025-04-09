import { Provider } from "@/components/ui/provider";
import "../app/globals.css";
import { JobProvider } from "@/context/job-context";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <JobProvider>{children}</JobProvider>
        </Provider>
      </body>
    </html>
  );
}
