
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  {ssr: false}
);

const NewIssuePage = () => {
  return (
    <>
      <IssueForm></IssueForm>
    </>
   
  );
};

export default NewIssuePage;

export const metadata: Metadata = {
  title: "Bugster - New Issue",
  description: "Fill in the form to create a new Issue."
}