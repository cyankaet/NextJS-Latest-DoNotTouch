import TestResult from "../../components/testresult";

export default function Page() {
  return (
    <TestResult passed={true} title="AppDir Static Page">
      <p>
        If you see this page, the app dir is working properly along with the
        pages router. I have made another massive change.
      </p>
    </TestResult>
  );
}
