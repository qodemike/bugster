
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
