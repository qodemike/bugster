
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  {ssr: false}
);

const NewIssuePage = () => {
  return (
    <div className="pt-10">
      <h1 className="mb-3 text-2xl font-bold">Fill the Form Below</h1>
      <IssueForm></IssueForm>
    </div>
   
  );
};

export default NewIssuePage;

export const metadata: Metadata = {
  title: "Bugster - New Issue",
  description: "Fill in the form to create a new Issue."
}