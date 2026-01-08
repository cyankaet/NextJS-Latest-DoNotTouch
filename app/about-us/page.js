import TestResult from "../../components/testresult";

export default function Page() {
  return (
    <TestResult passed={true} title="AppDir Static Page">
      <p>
        If you see this page, the app dir is working properly along with the
        pages router. I have made a change you really don't know about.
      </p>
    </TestResult>
  );
}
